import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  constructor(private _http: HttpClient) { }

  addSport(data: any) {
    return this._http.post('http://localhost:3000/sport', data);
  }
  getSport() {
    return this._http.get('http://localhost:3000/sport');
  }
}
