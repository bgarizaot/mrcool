import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { ComponentsDialogModule } from '../../componentsDialog/components-dialog.module';

import { MonthsChartComponent } from './components/months-chart/months-chart.component';

import { DetailsComponent } from './pages/details/details.component';
import { ListComponent } from './pages/list/list.component';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [DetailsComponent, ListComponent, MonthsChartComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    ComponentsDialogModule,
    // primeng
    TableModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    TagModule,
    ButtonGroupModule,
    ChartModule,
  ],
})
export class EmployeesModule {}
