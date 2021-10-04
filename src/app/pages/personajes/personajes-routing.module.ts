import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPersonajeComponent } from './form-personaje/form-personaje.component';
import { ListarPersonajesComponent } from './listar-personajes/listar-personajes.component';
import { PersonajePadreComponent } from './personaje-padre/personaje-padre.component';

const routes: Routes = [{
 /**  path: 'listar-personajes',
  component: ListarPersonajesComponent,
}, {
  path: 'form-personajes',
  component: FormPersonajeComponent,
},*/
    path:'',
    children:[
      { path:'listar-personajes', component: ListarPersonajesComponent },
      { path: 'form-personajes', component: FormPersonajeComponent },
      { path: 'pers-padre-hijo', component: PersonajePadreComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonajesRoutingModule { }
