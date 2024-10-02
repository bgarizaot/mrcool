import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateClientComponent } from './create-client/create-client.component';
import { CreateEmployeesComponent } from './create-employees/create-employees.component';

import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
@NgModule({
  declarations: [CreateClientComponent, CreateEmployeesComponent],
  exports: [CreateClientComponent, CreateEmployeesComponent],
  imports: [
    CommonModule,
    // primeng
    DialogModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
  ],
})
export class ComponentsDialogModule {}
