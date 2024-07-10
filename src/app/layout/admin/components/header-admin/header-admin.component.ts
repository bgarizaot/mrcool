import { Component } from '@angular/core';
import { MenuAdminService } from '../menu-admin/menu-admin.service';

@Component({
  selector: 'headerAdmin',
  templateUrl: './header-admin.component.html',
  styleUrl: './header-admin.component.scss',
})
export class HeaderAdminComponent {
  constructor(public menuAdminS: MenuAdminService) {}
}
