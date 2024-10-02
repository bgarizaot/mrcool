import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsComponent } from './pages/details/details.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'details/:id',
        component: DetailsComponent,
      },
      {
        path: '',
        redirectTo: '/admin/orders/list',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
