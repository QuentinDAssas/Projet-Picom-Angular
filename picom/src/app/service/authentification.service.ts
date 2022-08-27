  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { BehaviorSubject, Observable } from 'rxjs';
  import { map } from 'rxjs/operators';

  import { Utilisateur } from '../model/utilisateur';

  @Injectable({
    providedIn: 'root'
  })
  export class AuthentificationService {

    private currentUserSubject: BehaviorSubject<Utilisateur | null>;
    public currentUser: Observable<Utilisateur | null>;

    endpoint = 'http://localhost:8280/';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
        })
    }

    constructor(private client: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<Utilisateur | null>(JSON.parse(localStorage.getItem('currentUser')|| '{}'));
      this.currentUser = this.currentUserSubject.asObservable();
    }

    public currentUserValue(): Utilisateur |null {
      return this.currentUserSubject.value;
    }

    login(email: any, motDePasse: any){
      return this.client.post<any>(this.endpoint+'api/login', { email, motDePasse })
      .pipe(map(user => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
      }));
    }

    logout() {
      // remove user from local storage and set current user to null
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
    }

  }


