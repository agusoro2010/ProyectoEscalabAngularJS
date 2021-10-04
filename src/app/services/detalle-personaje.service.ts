import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetallePersonajeService {

  urlFinalSpace:string = "https://finalspaceapi.com/api/v0/character";
  

  private APIPERSONAJE: string = `${this.urlFinalSpace}`;

  constructor( private _httpClientEpisodios: HttpClient) { }

  public getDetalle(): Observable<Array<any>>{
    return this._httpClientEpisodios.get<Array<any>>(this.APIPERSONAJE);
  }
}
