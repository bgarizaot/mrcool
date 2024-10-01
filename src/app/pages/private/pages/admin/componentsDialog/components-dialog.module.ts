import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateClientComponent } from './create-client/create-client.component';

import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [CreateClientComponent],
  exports: [CreateClientComponent],
  imports: [
    CommonModule,
    // primeng
    DialogModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
  ],
})
export class ComponentsDialogModule {}
