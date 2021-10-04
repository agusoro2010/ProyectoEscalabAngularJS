import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaNoExisteRoutingModule } from './pagina-no-existe-routing.module';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';


@NgModule({
  declarations: [
    PaginaErrorComponent
  ],
  imports: [
    CommonModule,
    PaginaNoExisteRoutingModule
  ]
})
export class PaginaNoExisteModule { }
