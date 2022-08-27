import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from './model/utilisateur';
import { AuthentificationService } from './Service/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit {
  title = 'picom';

  currentUser: Utilisateur = new Utilisateur();

  constructor(private router: Router, private authentificationService: AuthentificationService) {
    this.authentificationService.currentUser.subscribe(x => this.currentUser ? x : null);
  }

  ngOnInit(): void {

  }

  logout() {
    this.authentificationService.logout();
    this.router.navigate(['/connexion']);
}

}
