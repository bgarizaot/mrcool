import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class MenuAdminService {
  showNav: boolean = false;

  items: MenuItem[] | undefined;

  constructor(private router: Router, private location: Location) {}

  onRenderMenu = () => {
    this.items = [
      {
        label: '',
        items: [
          {
            id: '1',
            label: 'Panel',
            icon: 'pi pi-objects-column',
            styleClass: 'menuActive',
            routerLink: '/admin/dashboard',
          },
          {
            id: '2',
            label: 'Calendario',
            icon: 'pi pi-calendar',
            routerLink: '/admin/calendar',
          },
        ],
      },
      {
        label: 'Documentos',
        items: [
          {
            id: '3',
            label: 'Ordenes',
            icon: 'pi pi-book',
            routerLink: '/admin/orders',
          },
        ],
      },
      {
        label: 'Perfiles',
        items: [
          {
            id: '4',
            label: 'Clientes',
            icon: 'pi pi-user',
            routerLink: '/admin/clients',
          },
          {
            id: '5',
            label: 'Empleados',
            icon: 'pi pi-briefcase',
            routerLink: '/admin/employees',
          },
        ],
      },
      {
        separator: true,
      },
    ];

    this.onRefreshMenu();
  };

  onRefreshMenu = () => {
    this.items?.map((item) => {
      item.items?.map((subItem) => {
        if (this.location.path() === subItem.routerLink) {
          subItem.styleClass = 'menuActive';
        } else {
          subItem.styleClass = '';
        }
        return subItem;
      });
      return item;
    });
  };

  onSelectedMenu = (event: any) => {
    this.items?.map((item) => {
      item.items?.map((subItem) => {
        subItem.styleClass = '';
        if (subItem.id === event.id) {
          subItem.styleClass = 'menuActive';
        }
        return subItem;
      });
      return item;
    });

    event.routerLink && this.router.navigate([event.routerLink]);
  };
}
