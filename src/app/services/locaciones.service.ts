import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocacionesService {

  urlFinalSpaceLocacion: string = "https://finalspaceapi.com/api/v0/location/";
  
  private urlLocation: string = `${this.urlFinalSpaceLocacion}`
  constructor(private _httpClient: HttpClient) { }

  public getAll(): Observable<Array<any>>{
    return this._httpClient.get<Array<any>>(this.urlLocation);
  }


}
