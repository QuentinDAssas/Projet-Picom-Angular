import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-annonce',
  templateUrl: './ajouter-annonce.component.html',
  styleUrls: ['./ajouter-annonce.component.css']
})
export class AjouterAnnonceComponent implements OnInit {

  zonesDetails: any = [];
  arretsDetails: any = [];
  horairesDetails: any = [];

  // = this.activatedRoute.snapshot.params['id'];

  // constructor(public service: , private activatedRoute: ActivatedRoute, private router: Router) { }


  // loadAnnonces(){
  //   return this.service.getAllAnnonces().subscribe((data: {}) => {
  //     console.log(data);
  //     this.annoncesDetails = data;
  //   })
  // }

    ngOnInit(): void {
     // this.loadAnnonces();
    }


}
