import { Component, NgModule, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxTabsModule } from 'devextreme-angular/ui/tabs';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';

import { ItemClickEvent as TabsItemClickEvent } from 'devextreme/ui/tabs';

import { ScreenService } from 'src/app/shared/services';
import { Dates, PanelItem } from 'src/app/types';

@Component({
  selector: 'toolbar-analytics',
  templateUrl: './toolbar-analytics.component.html',
  styleUrls: ['./toolbar-analytics.component.scss']
})

export class ToolbarAnalyticsComponent {
  @Input() selectedItems: Array<number>;

  @Input() titleText: string;

  @Input() panelItems: Array<PanelItem>;

  @Output() selectionChanged = new EventEmitter<Dates>();

  constructor(private screen: ScreenService) { }

  selectionChange(e: TabsItemClickEvent) {
    const dates = e.itemData.value.split('/');

    this.selectionChanged.emit({ startDate: dates[0], endDate: dates[1] });
  }

  getTabWidth = () => {
    return this.screen.isXSmallScreen() ? 150 : 'auto';
  };
}

@NgModule({
  imports: [
    CommonModule,
    DxButtonModule,
    DxTabsModule,
    DxToolbarModule
  ],
  declarations: [ToolbarAnalyticsComponent],
  exports: [ToolbarAnalyticsComponent],
})
export class ToolbarAnalyticsModule { }
