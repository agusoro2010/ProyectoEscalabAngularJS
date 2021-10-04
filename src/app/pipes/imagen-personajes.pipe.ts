import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenPersonajes'
})

export class ImagenPersonajesPipe implements PipeTransform {
  

  transform(value: string): any {
    let resultado: any;
    resultado = value.split('/');
    return resultado[6];
  }

  /**
   * Este pipe se usa en la interfaz de Episodios, la API devuelve una lista de personajes que están incluidos
   * en ese episodio, pero devuelve la URL de ese personaje, como es estandar y solo cambia el dígito final, por lo 
   * cual este filtro obtiene ese string url y captura el número identificador del personaje.
   * Formato de la url que recibe: https://finalspaceapi.com/api/v0/character/1
   */

}
