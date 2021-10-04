import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { ListarEpisodiosRoutingModule } from './pages/listar-episodios/listar-episodios-routing.module';
import { ListarLocacionesRoutingModule } from './pages/listar-locaciones/listar-locaciones-routing.module';
import { PersonajesRoutingModule } from './pages/personajes/personajes-routing.module';

import { PaginaErrorComponent } from './pagina-no-existe/pagina-error/pagina-error.component';
//import { ListarPersonajesComponent } from './pages/personajes/listar-personajes/listar-personajes.component';


const routes: Routes = [
  {path: '', component: AppComponent},
  { path: 'listar-personajes',
          loadChildren: () => import('./pages/personajes/personajes.module').then(m => m.PersonajesModule) },
  { path: '**', component: PaginaErrorComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PersonajesRoutingModule,
    ListarEpisodiosRoutingModule,
    ListarLocacionesRoutingModule,

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
