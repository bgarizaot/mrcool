import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { ComponentsModule } from './components/components.module';

import { ComponentsDashboardModule } from './pages/dashboard/components/components.module';
import { AdminComponent } from './admin.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { CalendarComponent } from './pages/calendar/calendar.component';

import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [
    DashboardComponent,
    AdminComponent,
    OrdersComponent,
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ComponentsModule,
    ComponentsDashboardModule,
    // primeng
    SidebarModule,
  ],
})
export class AdminModule {}
