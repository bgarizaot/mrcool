import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { DetailsComponent } from './pages/details/details.component';
import { ListComponent } from './pages/list/list.component';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [DetailsComponent, ListComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    // primeng
    TableModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    TagModule,
    ButtonGroupModule,
  ],
})
export class ClientsModule {}
