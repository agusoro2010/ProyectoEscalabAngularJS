import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarEpisodiosRoutingModule } from './listar-episodios-routing.module';
import { EpisodiosComponent } from './episodios/episodios.component';
import { EpisodiosService } from 'src/app/services/episodios.service';
import { ImagenPersonajesPipe } from 'src/app/pipes/imagen-personajes.pipe';
import { DetallePersonajeService } from 'src/app/services/detalle-personaje.service';


@NgModule({
  declarations: [
    EpisodiosComponent,
    ImagenPersonajesPipe
  ],
  imports: [
    CommonModule,
    ListarEpisodiosRoutingModule
  ],
  providers:[
    EpisodiosService,
    DetallePersonajeService
  ]
})
export class ListarEpisodiosModule { }
