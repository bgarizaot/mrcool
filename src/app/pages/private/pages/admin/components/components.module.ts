import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardInfoDashboardComponent } from './card-info-dashboard/card-info-dashboard.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';

import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';

@NgModule({
  declarations: [
    CardInfoDashboardComponent,
    MenuAdminComponent,
    HeaderAdminComponent,
  ],
  exports: [
    CardInfoDashboardComponent,
    MenuAdminComponent,
    HeaderAdminComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    MenuModule,
    MenubarModule,
    BadgeModule,
    RippleModule,
    AvatarModule,
  ],
})
export class ComponentsModule {}
