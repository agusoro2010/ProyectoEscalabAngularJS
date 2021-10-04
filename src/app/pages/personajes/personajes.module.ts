import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { ListarPersonajesComponent } from './listar-personajes/listar-personajes.component';
import { PersonajesService } from '../../services/personajes.service';
import { PersonajesPipe } from 'src/app/pipes/personajes.pipe';
import { FormPersonajeComponent } from './form-personaje/form-personaje.component';
import { PersonajePadreComponent } from './personaje-padre/personaje-padre.component';
import { PersonajeHijoComponent } from './personaje-hijo/personaje-hijo.component';


@NgModule({
  declarations: [
    ListarPersonajesComponent,
    PersonajesPipe,
    FormPersonajeComponent,
    PersonajePadreComponent,
    PersonajeHijoComponent
  ],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[PersonajesService],
})
export class PersonajesModule { }
