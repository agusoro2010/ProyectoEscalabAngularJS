import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-listar-personajes',
  templateUrl: './listar-personajes.component.html',
  styleUrls: ['./listar-personajes.component.css']
})
export class ListarPersonajesComponent implements OnInit, OnDestroy {

  public personajes: Array<any> = [];
  private suscripcion: Subscription = new Subscription();


  constructor(private _personajesFS: PersonajesService) { }

  ngOnInit(): void {
    this.getPersonajes();
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  private getPersonajes(): void {
      this.suscripcion = this._personajesFS.getAll().subscribe(
        (personajes) => { this.personajes = personajes},
        (error) => alert(`Ha sucedido un error ${error}`));
  }

}
