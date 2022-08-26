import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnoncesService } from '../Service/annonces.service';


@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {

  annoncesList: any = [];
  annonce: any = {};


  id = this.activatedRoute.snapshot.params['id'];

  constructor(private service: AnnoncesService, private activatedRoute: ActivatedRoute, private router: Router) { }

  loadAnnonces(){
    return this.service.getAllAnnonces().subscribe((data: {}) => {
      console.log(data);
      this.annoncesList = data;
    })
  }

  loadAnnonce(){
    return this.service.getAnnonce().subscribe((data: {}) => {
      console.log(data);
      this.annonce = data;
    })
  }

  ngOnInit(): void {
    this.loadAnnonces();
  }

}
