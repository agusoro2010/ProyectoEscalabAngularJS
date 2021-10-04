import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodiosService {

  urlFinalSpaceEpisodio: string = "https://finalspaceapi.com/api/v0/episode/";
 

  private APIEPISODIO: string = `${this.urlFinalSpaceEpisodio}`;

  constructor(private _httpClientEpisodios: HttpClient) { }

  public getAll(): Observable<Array<any>>{
    return this._httpClientEpisodios.get<Array<any>>(this.APIEPISODIO);
  }


}
