import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from '../Service/authentification.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {


  constructor(private service: AuthentificationService, private activatedRoute: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {

  }


}
