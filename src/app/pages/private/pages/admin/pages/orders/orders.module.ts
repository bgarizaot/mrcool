import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { ComponentsDialogModule } from '../../componentsDialog/components-dialog.module';

import { DetailsComponent } from './pages/details/details.component';
import { ListComponent } from './pages/list/list.component';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [DetailsComponent, ListComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    ComponentsDialogModule,
    // primeng
    TableModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    TagModule,
    ButtonGroupModule,
    CalendarModule,
  ],
})
export class OrdersModule {}
