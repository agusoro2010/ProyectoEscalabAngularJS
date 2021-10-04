import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarLocacionesRoutingModule } from './listar-locaciones-routing.module';
import { LocacionesComponent } from './locaciones/locaciones.component';
import { LocacionesService } from 'src/app/services/locaciones.service';
import { DetallePersonajeService } from 'src/app/services/detalle-personaje.service';


@NgModule({
  declarations: [
    LocacionesComponent,
  ],
  imports: [
    CommonModule,
    ListarLocacionesRoutingModule
  ],
  providers: [LocacionesService, DetallePersonajeService],
})
export class ListarLocacionesModule { }
