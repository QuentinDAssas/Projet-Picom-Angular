import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../model/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  endpoint = 'http://localhost:8180/';

  constructor(private client: HttpClient) { }

   httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
      })
  }

  getUtilisateur(email: string, motDePasse: string): Observable<Utilisateur> {
    return this.client.get<Utilisateur>(this.endpoint+'api/utilisateurs');
  }
}
