import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DetallePersonajeService } from 'src/app/services/detalle-personaje.service';
import { EpisodiosService } from 'src/app/services/episodios.service';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.css']
})
export class EpisodiosComponent implements OnInit, OnDestroy {

  public episodios: Array<any> = [];
  public personajeDetalle : Array<any>=[];
  private suscripcion: Subscription = new Subscription();
  private suscripcion2: Subscription = new Subscription();

  constructor(
    private _episodiosFS: EpisodiosService,
    private _personajesFS: DetallePersonajeService
    ) { }

  ngOnInit(): void {
    this.getEpisodios();
    this.getPersonajes();
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
    this.suscripcion2.unsubscribe();
  }

  private getEpisodios(): void {
    this.suscripcion = this._episodiosFS.getAll().subscribe(
      (episodios) => { this.episodios = episodios;},
      (error) => alert(`Ha sucedido un error ${error}`));
  }


  private getPersonajes(): void {
    this.suscripcion2 = this._personajesFS.getDetalle().subscribe(
    (personajeD) => { 
      this.personajeDetalle = personajeD;
      this.personajeDetalle.map(registro => this.guardaLocalStorage(registro.id, registro.img_url));},
    (error) => alert(`Ha sucedido un error ${error}`));
  };

  private guardaLocalStorage(id: string, imagen: string): void{
    let imgData: string = imagen;
    let idPersonaje: string = id;
    localStorage.setItem(idPersonaje, imgData);
  }

  public muestroImagenPersonaje(imagen: any): any {
    let dataImage = localStorage.getItem(imagen);
    return dataImage;
  }
  

}
