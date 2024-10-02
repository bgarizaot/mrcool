import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CalendarComponent } from './pages/calendar/calendar.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'calendar',
        component: CalendarComponent,
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('./pages/orders/orders-routing.module').then(
            (m) => m.OrdersRoutingModule
          ),
      },
      {
        path: 'clients',
        loadChildren: () =>
          import('./pages/clients/clients-routing.module').then(
            (m) => m.ClientsRoutingModule
          ),
      },
      {
        path: 'employees',
        loadChildren: () =>
          import('./pages/employees/employees-routing.module').then(
            (m) => m.EmployeesRoutingModule
          ),
      },
      {
        path: '',
        redirectTo: '/admin/dashboard',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
