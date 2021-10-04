import { Component, Input, OnInit, Output } from '@angular/core';
import { Personaje } from 'src/app/models/personaje.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-personaje-hijo',
  templateUrl: './personaje-hijo.component.html',
  styleUrls: ['./personaje-hijo.component.css']
})
export class PersonajeHijoComponent implements OnInit {

  @Input() personajeDeLista: Personaje[];
  @Input() indice:number; 

  @Output() newitemEvent= new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }



}
