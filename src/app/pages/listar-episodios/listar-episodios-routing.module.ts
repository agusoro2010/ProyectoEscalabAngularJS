import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodiosComponent } from './episodios/episodios.component';

const routes: Routes = [
  { path: 'listar-episodios', component: EpisodiosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarEpisodiosRoutingModule { }
