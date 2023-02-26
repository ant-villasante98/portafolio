import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuButtonComponent } from './shared/components/menu-button/menu-button.component';
import { MenuButtonModule } from './shared/components/menu-button/menu-button.module';
import { MenuComponent } from './shared/components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
