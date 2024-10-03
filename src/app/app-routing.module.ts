import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/private/private-routing.module').then(
        (m) => m.PrivateRoutingModule
      ),
  },
  {
    path: '',
    redirectTo: '/admin/dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    useHash: true,
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
