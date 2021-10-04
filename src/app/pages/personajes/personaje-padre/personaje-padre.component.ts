import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/models/personaje.model';

@Component({
  selector: 'app-personaje-padre',
  templateUrl: './personaje-padre.component.html',
  styleUrls: ['./personaje-padre.component.css']
})
export class PersonajePadreComponent implements OnInit {

  public personajes: Personaje[];
  
  
  constructor() { 
    this.personajes = [
      new Personaje('Nuevo Personaje 1', 'Life', 'Human', 'Male', "Eart"),
      new Personaje('Nuevo Personaje 2', 'Unknow', 'Alien', 'Female', "Marte"),
      new Personaje('Nuevo Personaje 3', 'Dead', 'Human', 'Male', "Pluton"),
    ]
  }

  ngOnInit(): void {
  }

  cuadroNombre:string='';
  cuadroEstado:string='';
  cuadroEspecie:string='';
  cuadroGenero:string='';
  cuadroOrigen:string='';

 public agregarPersonaje():void{
    let miPersonaje=new Personaje(
      this.cuadroNombre,
      this.cuadroEstado,
      this.cuadroEspecie,
      this.cuadroGenero,
      this.cuadroOrigen
    );
    this.personajes.push(miPersonaje);
  }

}
