import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateClientComponent } from './create-client/create-client.component';
import { CreateEmployeesComponent } from './create-employees/create-employees.component';

import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { CrearProductsComponent } from './crear-products/crear-products.component';

@NgModule({
  declarations: [
    CreateClientComponent,
    CreateEmployeesComponent,
    CrearProductsComponent,
  ],
  exports: [
    CreateClientComponent,
    CreateEmployeesComponent,
    CrearProductsComponent,
  ],
  imports: [
    CommonModule,
    // primeng
    DialogModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    CalendarModule,
    InputNumberModule,
  ],
})
export class ComponentsDialogModule {}
