import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeadermobileComponent } from './headermobile/headermobile.component';
import { UserpanelComponent } from './userpanel/userpanel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeadermobileComponent,
    UserpanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
