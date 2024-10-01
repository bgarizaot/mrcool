import { Component, ViewChild } from '@angular/core';

import listClients from '../../data/listClient';

import { Table } from 'primeng/table';

import { GeneralService } from '../../../../../../../../core/services/general.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @ViewChild('dt') dt1!: Table;
  customers: any[] = listClients;
  loading: boolean = false;

  constructor(public generalS:GeneralService){}

  onFilter(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.dt1.filterGlobal(value, 'contains');
  }
}
