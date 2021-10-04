import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DetallePersonajeService } from 'src/app/services/detalle-personaje.service';
import { LocacionesService } from 'src/app/services/locaciones.service';

@Component({
  selector: 'app-locaciones',
  templateUrl: './locaciones.component.html',
  styleUrls: ['./locaciones.component.css']
})
export class LocacionesComponent implements OnInit {

  public locaciones: Array<any> = [];
  public personajeDetalle : Array<any>=[];
  private suscripcion: Subscription = new Subscription();
  private suscripcion2: Subscription = new Subscription();

  constructor(private _serviceLocacion: LocacionesService,
    private _personajesFS: DetallePersonajeService) { }

  ngOnInit(): void {
    this.getLocaciones();
    this.getPersonajes();
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
    this.suscripcion2.unsubscribe();
  }

  private getLocaciones(): void {
      this.suscripcion = this._serviceLocacion.getAll().subscribe(
        (locaciones) => { this.locaciones = locaciones},
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
    let resultado: any;
    resultado = imagen.split('/');
    let dataImage = localStorage.getItem(resultado[6]);
    return dataImage;
  }

}
