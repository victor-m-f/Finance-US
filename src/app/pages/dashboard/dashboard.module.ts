import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DxBulletModule, DxChartModule, DxDataGridModule, DxFunnelModule, DxLoadPanelModule, DxPieChartModule, DxScrollViewModule } from 'devextreme-angular';
import { ApplyPipeModule } from 'src/app/pipes';
import { CardAnalyticsModule } from 'src/app/shared/components/graphs/card-analytics/card-analytics.component';
import { ToolbarAnalyticsModule } from 'src/app/shared/components/graphs/toolbar-analytics/toolbar-analytics.component';
import { DataService } from 'src/app/shared/services';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainViewComponent } from './main-view/main-view.component';

@NgModule({
  declarations: [
    MainViewComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ToolbarAnalyticsModule,
    CardAnalyticsModule,
    DxScrollViewModule,
    DxDataGridModule,
    DxBulletModule,
    DxFunnelModule,
    DxPieChartModule,
    DxChartModule,
    DxLoadPanelModule,
    ApplyPipeModule,
  ],
  providers: [
    DataService,
  ],
})
export class DashboardModule { }
