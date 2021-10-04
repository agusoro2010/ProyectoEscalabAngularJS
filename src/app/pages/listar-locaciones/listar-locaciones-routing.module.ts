import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocacionesComponent } from './locaciones/locaciones.component';

const routes: Routes = [{
  path: 'listar-locaciones',
  component: LocacionesComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarLocacionesRoutingModule { }
