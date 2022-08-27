import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { TrancheHoraire } from '../model/tranche-horaire';
import { Tarif } from '../model/tarif';
import { Arret } from '../model/arret';

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {

  endpoint = 'http://localhost:8180/';

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
         'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*'
    })
}

getTrancheHoraires():Observable<any>{
  return this.http.get<TrancheHoraire[]>(this.endpoint + 'api/trancheHoraires', this.httpOptions)
  // .pipe(
  //     catchError(this.handleError)
  // )
}

getZones():Observable<any>{
  return this.http.get<Zone[]>(this.endpoint + 'api/zones', this.httpOptions)
  // .pipe(
  //     catchError(this.handleError)
  // )
}

getTarifs():Observable<any>{
  return this.http.get<Tarif[]>(this.endpoint + 'api/listeTarifs', this.httpOptions)
  // .pipe(
  //     catchError(this.handleError)
  // )
}

getArrets():Observable<any>{
  return this.http.get<Arret[]>(this.endpoint + 'api/arrets', this.httpOptions)
  // .pipe(
  //     catchError(this.handleError)
  // )
}

handleError(error:any) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
  } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(() => new Error(errorMessage));
}
}
