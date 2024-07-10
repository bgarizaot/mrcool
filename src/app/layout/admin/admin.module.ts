import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { ComponentsModule } from './components/components.module';

import { ComponentsDashboardModule } from './pages/dashboard/components/components.module';
import { AdminComponent } from './admin.component';

import { SidebarModule } from 'primeng/sidebar';
import { OrdersComponent } from './pages/orders/orders.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { CalendarComponent } from './pages/calendar/calendar.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AdminComponent,
    OrdersComponent,
    ClientsComponent,
    EmployeesComponent,
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ComponentsModule,
    ComponentsDashboardModule,
    SidebarModule,
  ],
})
export class AdminModule {}
