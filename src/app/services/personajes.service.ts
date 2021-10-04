import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class PersonajesService {

  urlFinalSpace:string = "https://finalspaceapi.com/api/v0/character";

  private API: string = `${this.urlFinalSpace}`;

  constructor(private _httpClient: HttpClient) { }

  public getAll(): Observable<Array<any>>{
    return this._httpClient.get<Array<any>>(this.API);
  }
}
