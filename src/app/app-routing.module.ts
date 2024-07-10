import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./layout/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'maintenance',
    loadChildren: () =>
      import('./layout/maintenance/maintenance.module').then(
        (m) => m.MaintenanceModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
