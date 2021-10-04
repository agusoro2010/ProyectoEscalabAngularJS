import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';

const routes: Routes = [{
  path: "error-pagina",
  component: PaginaErrorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaNoExisteRoutingModule { }
