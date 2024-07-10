import { Component } from '@angular/core';
import { MenuAdminService } from './components/menu-admin/menu-admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  constructor(public menuAdminS: MenuAdminService) {}
}
