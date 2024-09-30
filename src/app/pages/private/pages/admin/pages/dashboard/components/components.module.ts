import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateOrdersComponent } from './state-orders/state-orders.component';
import { MonthsChartComponent } from './months-chart/months-chart.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { CustomersComponent } from './customers/customers.component';

// primeng
import { ChartModule } from 'primeng/chart';
import { ProgressBarModule } from 'primeng/progressbar';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    StateOrdersComponent,
    MonthsChartComponent,
    TeamMembersComponent,
    CustomersComponent,
  ],
  exports: [
    StateOrdersComponent,
    MonthsChartComponent,
    TeamMembersComponent,
    CustomersComponent,
  ],
  imports: [
    CommonModule,
    // primeng
    ChartModule,
    ProgressBarModule,
    RippleModule,
    ButtonModule,
  ],
})
export class ComponentsDashboardModule {}
