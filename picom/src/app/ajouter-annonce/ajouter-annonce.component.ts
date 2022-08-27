import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministrationService } from '../Service/administration.service';

@Component({
  selector: 'app-ajouter-annonce',
  templateUrl: './ajouter-annonce.component.html',
  styleUrls: ['./ajouter-annonce.component.css']
})
export class AjouterAnnonceComponent implements OnInit {

  zonesList: any = [];
  arretsList: any = [];
  tranchesHorairesList: any = [];


  addZones: EventEmitter<any> = new EventEmitter();

  constructor(private service: AdministrationService, private activatedRoute: ActivatedRoute, private router: Router) { }


  loadZones(){
    return this.service.getZones().subscribe((data: {}) => {
      console.log(data);
      this.zonesList = data;
    })
  }

  loadArrets(){
    return this.service.getArrets().subscribe((data: {}) => {
      console.log(data);
      this.arretsList = data;
    })
  }

  loadTranchesHoraires(){
    return this.service.getTrancheHoraires().subscribe((data: {}) => {
      console.log(data);
      this.tranchesHorairesList = data;
    })
  }

    ngOnInit(): void {
     this.loadZones();
     this.loadArrets()
     this.loadTranchesHoraires();

    }

    addHours(){
      window.alert("addHours clicked");
    }

}
function Outpout() {
  throw new Error('Function not implemented.');
}

