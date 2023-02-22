import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SobreMiRoutingModule } from './sobre-mi-routing.module';
import { SobreMiComponent } from './sobre-mi.component';


@NgModule({
  declarations: [
    SobreMiComponent
  ],
  imports: [
    CommonModule,
    SobreMiRoutingModule
  ]
})
export class SobreMiModule { }
