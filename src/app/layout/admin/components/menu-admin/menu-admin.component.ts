import { Component } from '@angular/core';
import { MenuAdminService } from './menu-admin.service';

@Component({
  selector: 'menuAdmin',
  templateUrl: './menu-admin.component.html',
  styleUrl: './menu-admin.component.scss',
})
export class MenuAdminComponent {
  constructor(public menuAdminS: MenuAdminService) {}

  ngOnInit() {
    this.menuAdminS.onRenderMenu();
  }
}
