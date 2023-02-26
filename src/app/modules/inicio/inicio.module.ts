import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { MenuButtonComponent } from 'src/app/shared/components/menu-button/menu-button.component';
import { MenuButtonModule } from 'src/app/shared/components/menu-button/menu-button.module';


@NgModule({
  declarations: [
    InicioComponent,
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
