import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Annonce } from '../model/annonce';
import { TrancheHoraire } from '../model/tranche-horaire';

@Injectable({
  providedIn: 'root'
})

export class AnnoncesService {

  endpoint = 'http://localhost:8180/';

  constructor(private client: HttpClient) { }

   httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
      })
  }

  getAnnonce(): Observable<any>{
    return this.client.get<Annonce>(this.endpoint+'api/annonces/'+1);
  }

  getAllAnnonces(): Observable<Annonce[]> {
    return this.client.get<Annonce[]>(this.endpoint+'api/annonces');
  }

  getTrancheHoraire(): Observable<any> {
    return this.client.get<TrancheHoraire>(this.endpoint+'api/annonces/1/tranchesHoraires');
  }



}
