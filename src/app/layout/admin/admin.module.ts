import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { ComponentsModule } from './components/components.module';

import { ComponentsDashboardModule } from './pages/dashboard/components/components.module';
import { AdminComponent } from './admin.component';

import { SidebarModule } from 'primeng/sidebar';
import { OrdersComponent } from './pages/orders/orders.component';

@NgModule({
  declarations: [DashboardComponent, AdminComponent, OrdersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ComponentsModule,
    ComponentsDashboardModule,
    SidebarModule,
  ],
})
export class AdminModule {}
