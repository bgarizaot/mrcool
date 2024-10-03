import { Component, ViewChild } from '@angular/core';

import listOrders from '../../data/listOrders';

import { Table } from 'primeng/table';

import { GeneralService } from '../../../../../../../../core/services/general.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @ViewChild('dt') dt1!: Table;

  showNewClient: boolean = false;

  customers: any[] = listOrders;
  loading: boolean = false;

  constructor(public generalS: GeneralService) {}

  onFilter(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.dt1.filterGlobal(value, 'contains');
  }
  
  onStatus = (ev: any) => {
    Swal.fire({
      icon: 'question',
      title: '¿Estás seguro de cambiar el estado?',
      showCancelButton: true,
      confirmButtonText: `Si`,
      cancelButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('cambio el estado');
        ev.status == 'Activo'
          ? (ev.status = 'Inactivo')
          : (ev.status = 'Activo');
      }
    });
  };

  onPdfElement = (ev: any) => {
    console.log(ev);
  };
}
