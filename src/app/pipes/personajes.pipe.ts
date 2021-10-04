import { Pipe, PipeTransform } from '@angular/core';
import { Estados } from '../enums/estados';

@Pipe({
  name: 'personajesFS'
})
export class PersonajesPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case ("Alive"):
        return Estados.Vivo;
      break;
      case ("Deceased"):
        return Estados.Muerto;
      break;
      case ("Unknown(presumably dead)"):
        return Estados.Desconocido2;
      break;
      case ("Unknown"):
        return Estados.Desconocido;
      break;
      case ("Destroyed"):
        return Estados.Destruido;
      break;
      case ("Deceased (Possessed)"):
        return Estados.Muerto2;
      break;
      case ("Operational"):
        return Estados.Operativo;
      break;
      case ("Imprisoned"):
        return Estados.Prisionero;
      break;
      default:
        return `Estado ${value}, no conocido.`;
      break;
    }
  }

}
