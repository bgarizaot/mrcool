import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { ComponentsModule } from './components/components.module';

import { ComponentsDashboardModule } from './pages/dashboard/components/components.module';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [DashboardComponent, AdminComponent],
  imports: [CommonModule, AdminRoutingModule, ComponentsModule,ComponentsDashboardModule],
})
export class AdminModule {}
