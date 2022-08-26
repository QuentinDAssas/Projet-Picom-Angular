import { Component, OnInit } from '@angular/core';
import { AdministrationService } from '../Service/administration.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  trancheHoraires: any = [];
  zones: any = [];
  tarifs: any = [];

  constructor(
    public service: AdministrationService
  ){}

  ngOnInit(): void {
    this.loadTrancheHoraires()
    this.loadZones()
    this.loadTarifs()
  }

  loadTrancheHoraires() {
    return this.service.getTrancheHoraires().subscribe((data: {}) => { console.log(data);
      this.trancheHoraires = data;
    })
  }

  loadZones() {
    return this.service.getZones().subscribe((data: {}) => { console.log(data);
      this.zones = data;
    })
  }

  loadTarifs() {
    return this.service.getTarifs().subscribe((data: {}) => { console.log(data);
      this.tarifs = data;
    })
  }

}
