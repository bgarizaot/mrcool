import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PrivateModule } from './pages/private/private.module';
import { AdminModule as privateAdminModule } from './pages/private/pages/admin/admin.module';
import { ClientsModule as privateClientsModule } from './pages/private/pages/admin/pages/clients/clients.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrivateModule,
    privateAdminModule,
    privateClientsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
