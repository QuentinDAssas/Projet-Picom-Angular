import { Component, Input, OnInit } from '@angular/core';
import { AnnoncesService } from '../Service/annonces.service';
import { TarifDto } from '../model/tarif-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-annonce',
  templateUrl: './ajouter-annonce.component.html',
  styleUrls: ['./ajouter-annonce.component.css']
})
export class AjouterAnnonceComponent implements OnInit {

  @Input()
  addAnnonceForm = new TarifDto();


  ListTrancheHoraires: any = [];
  ListZones: any = [];
  ListTarifs: any = [];

  constructor(
    public service: AnnoncesService,
    public router: Router,
  ){ }

    ngOnInit(): void {
      this.loadTrancheHoraires()
      this.loadZones()
      // this.loadTarifs()
    }

    loadTrancheHoraires() {
      return this.service.getTrancheHoraires().subscribe((data: {}) => { console.log(data);
        this.ListTrancheHoraires = data;
      })
    }

    loadZones() {
      return this.service.getZones().subscribe((data: {}) => { console.log(data);
        this.ListZones = data;
      })
    }

    onSubmit() {
      // this.service.addAnnonce(this.addAnnonceForm).subscribe((data: {}) => {
        window.location.reload();
      // });
    }

}
