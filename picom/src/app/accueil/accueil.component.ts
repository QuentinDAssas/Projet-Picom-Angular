import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from '../model/utilisateur';
import { AuthentificationService } from '../Service/authentification.service';
import { UtilisateurDto } from '../model/utilisateur-dto';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  @Input()
  connexionForm = new UtilisateurDto ();

  constructor(private service: AuthentificationService, private activatedRoute: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {

  }

  onSubmit() {

    this.service.getUtilisateur(this.connexionForm).subscribe((data: {}) => { console.log(data);

    });
  }

}
