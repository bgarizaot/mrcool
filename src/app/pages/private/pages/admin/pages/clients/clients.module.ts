import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { DetailsComponent } from './pages/details/details.component';
import { ListComponent } from './pages/list/list.component';


@NgModule({
  declarations: [
    DetailsComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
