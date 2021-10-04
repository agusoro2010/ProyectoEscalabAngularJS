import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PersonajesModule } from './pages/personajes/personajes.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListarEpisodiosModule } from './pages/listar-episodios/listar-episodios.module';
import { ListarLocacionesModule } from './pages/listar-locaciones/listar-locaciones.module';
import { PaginaNoExisteModule } from './pagina-no-existe/pagina-no-existe.module';

import { AppComponent } from './app.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';



@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonajesModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ListarEpisodiosModule,
    ListarLocacionesModule,
    PaginaNoExisteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
