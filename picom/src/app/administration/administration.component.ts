
import { Component, Input, OnInit } from '@angular/core';
import { AdministrationService } from '../Service/administration.service';
import { NavigationEnd, Router } from '@angular/router';
import { TarifDto } from '../model/tarif-dto';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  @Input()
  tarifForm = new TarifDto();

  ListTrancheHoraires: any = [];
  ListZones: any = [];
  ListTarifs: any = [];

  constructor(
    public service: AdministrationService,
    public router: Router,
  ){ }

  ngOnInit(): void {
    this.loadTrancheHoraires()
    this.loadZones()
    this.loadTarifs()
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

  loadTarifs() {
    return this.service.getTarifs().subscribe((data: {}) => { console.log(data);
      this.ListTarifs = data;
    })
  }

  deleteTarif(id:number) {
    if (window.confirm('Voulez vous supprimer le tarif ?')){
      this.service.deleteTarif(id).subscribe(data => {
        this.loadTarifs()
      })
    }
  }

  onSubmit() {
    this.service.addTarif(this.tarifForm).subscribe((data: {}) => {
      window.location.reload();
    });
  }

}
