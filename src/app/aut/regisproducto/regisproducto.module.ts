import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisproductoRoutingModule } from './regisproducto-routing.module';
import { RegisproductoComponent } from './regisproducto.component';


@NgModule({
  declarations: [
    RegisproductoComponent
  ],
  imports: [
    CommonModule,
    RegisproductoRoutingModule
  ]
})
export class RegisproductoModule { }
