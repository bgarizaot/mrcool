import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'menuAdmin',
  templateUrl: './menu-admin.component.html',
  styleUrl: './menu-admin.component.scss',
})
export class MenuAdminComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: '',
        items: [
          {
            label: 'Panel',
            icon: 'pi pi-objects-column',
            styleClass: 'menuActive',
          },
          {
            label: 'Calendario',
            icon: 'pi pi-calendar',
          },
        ],
      },
      {
        label: 'Documentos',
        items: [
          {
            label: 'Ordenes',
            icon: 'pi pi-book',
          },
        ],
      },
      {
        label: 'Perfiles',
        items: [
          {
            label: 'Clientes',
            icon: 'pi pi-user',
          },
          {
            label: 'Empleados',
            icon: 'pi pi-briefcase',
          },
        ],
      },
      {
        separator: true,
      },
    ];
  }
}
