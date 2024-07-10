import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateOrdersComponent } from './state-orders/state-orders.component';

import { ChartModule } from 'primeng/chart';
import { MonthsChartComponent } from './months-chart/months-chart.component';

@NgModule({
  declarations: [StateOrdersComponent, MonthsChartComponent],
  exports: [StateOrdersComponent, MonthsChartComponent],
  imports: [CommonModule, ChartModule],
})
export class ComponentsDashboardModule {}
