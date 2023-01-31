import { Component, OnInit } from '@angular/core';
import { forkJoin, map, Observable, share } from 'rxjs';
import { DataService } from 'src/app/shared/services';
import { analyticsPanelItems, Dates } from 'src/app/types';
import { Sales } from 'src/app/types/sale';
import { SalesByState } from 'src/app/types/saleByState';
import { SalesByStateAndCity } from 'src/app/types/saleByStateAndCity';
import { SalesOrOpportunitiesByCategory } from 'src/app/types/salesOrOpportunitiesByCategory';
import { ApplyPipeModule } from "src/app/pipes";

type DashboardData = SalesOrOpportunitiesByCategory | Sales | SalesByState | SalesByStateAndCity | null;
type DataLoader = (startDate: string, endDate: string) => Observable<Object>;

@Component({
  templateUrl: 'main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})

export class MainViewComponent implements OnInit {
  analyticsPanelItems = analyticsPanelItems;

  opportunities: SalesOrOpportunitiesByCategory = null;
  sales: Sales = null;
  salesByState: SalesByState = null;
  salesByCategory: SalesByStateAndCity = null;

  isLoading: boolean = false;

  constructor(private service: DataService) { }

  selectionChange(dates: Dates) {
    this.loadData(dates.startDate, dates.endDate);
  }

  customizeOppText(arg: { valueText: string }) {
    return `$${arg.valueText}`;
  }

  customizeSaleText(arg: { percentText: string }) {
    return arg.percentText;
  }

  loadData = (startDate: string, endDate: string) => {
    this.isLoading = true;
    const tasks: Observable<object>[] = [
      ['opportunities', this.service.getOpportunitiesByCategory],
      ['sales', this.service.getSales],
      ['salesByCategory', this.service.getSalesByCategory],
      ['salesByState', (startDate: string, endDate: string) => this.service.getSalesByStateAndCity(startDate, endDate).pipe(
        map((data) => this.service.getSalesByState(data))
      )
      ]
    ].map(([dataName, loader]: [string, DataLoader]) => {
      const loaderObservable = loader(startDate, endDate).pipe(share());

      loaderObservable.subscribe((result: DashboardData) => {
        this[dataName] = result;
      });

      return loaderObservable;
    });

    forkJoin(tasks).subscribe(() => {
      this.isLoading = false;
    });
  };

  getTotal(data: Array<{ value?: number, total?: number }>): number {
    return (data || []).reduce((total, item) => total + (item.value || item.total), 0);
  }

  ngOnInit(): void {
    const [startDate, endDate] = analyticsPanelItems[4].value.split('/');

    this.loadData(startDate, endDate);
  }
}
