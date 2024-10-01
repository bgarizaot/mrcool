import { Component, ViewChild } from '@angular/core';

import listClients from '../../data/listClient';

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

  customers: any[] = listClients;
  loading: boolean = false;

  constructor(public generalS: GeneralService) {}

  onFilter(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.dt1.filterGlobal(value, 'contains');
  }

  onImportExportExcel = () => {
    Swal.fire({
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: `
        Importar Excel
      `,
      cancelButtonText: `
        Exportar Excel
      `,
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('Importar');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log('Exportar');
      }
    });
  };
}
