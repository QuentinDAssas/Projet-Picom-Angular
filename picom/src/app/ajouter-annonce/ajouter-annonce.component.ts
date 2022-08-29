import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarService } from '../service/navbar.service';

@Component({
  selector: 'app-ajouter-annonce',
  templateUrl: './ajouter-annonce.component.html',
  styleUrls: ['./ajouter-annonce.component.css']
})
export class AjouterAnnonceComponent implements OnInit {

  zonesDetails: any = [];
  arretsDetails: any = [];
  horairesDetails: any = [];


  constructor(private activatedRoute: ActivatedRoute, private router: Router, public nav : NavbarService) { }



    ngOnInit(): void {
      this.nav.show();
    }


}
