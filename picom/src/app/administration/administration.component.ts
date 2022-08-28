
import { Component, Input, OnInit } from '@angular/core';
import { Tarif } from '../model/tarif';
import { Zone } from '../model/zone';
import { TrancheHoraire } from '../model/tranche-horaire';
import { AdministrationService } from '../Service/administration.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  // @Input()
  // tarifForm = new Tarif();

  // formTarif : NgForm = new NgForm();

  ListTrancheHoraires: any = [];
  ListZones: any = [];
  ListTarifs: any = [];

  tarif = new Tarif(12, new Zone(), new TrancheHoraire());

  constructor(
    public service: AdministrationService,
    public router: Router
  ){
    // this.tarifForm.zone = new Zone();
    // this.tarifForm.tranchesHoraire = new TrancheHoraire();
   }


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

  onSubmit(formTarif : NgForm) {

    console.log(formTarif.value);

    let tarifsDetails = formTarif.value;

    let id = tarifsDetails.id;
    let zone = tarifsDetails.zones;
    let prixEnEuros = tarifsDetails.prixEnEuros;
    let trancheHoraires = tarifsDetails.trancheHoraires;

    this.tarif = new Tarif(prixEnEuros, zone, trancheHoraires );

    this.service.addTarif(this.tarif).subscribe((data: {}) => { console.log(data);
    this.router.navigate(['/administration']);
    });
      // this.service.addTarif(this.tarifForm).subscribe((data: {}) => { console.log(data);
      // this.router.navigate(['/administration']);
    //};
  }

  //submitTarif(formTarif : NgForm) {
    // console.log(formTarif.value)
    // let tarifDetail = formTarif.value
    // console.log(tarifDetail.zones)
    // console.log(tarifDetail.trancheHoraires)
    // tarifDetail = new Tarif();
    // console.log(tarifDetail)
    // tarifDetail.zones = new Zone();
    // console.log(tarifDetail.zones)
    // tarifDetail.trancheHoraires = new TrancheHoraire();
    // console.log(tarifDetail.trancheHoraires)
    // console.log(tarifDetail)

  //   let tarifDetail : Tarif = form.controls['formTarif'].value;

  //   this.service.addTarif(formTarif.value).subscribe((data: {}) => { console.log(data);
  //   this.router.navigate(['/administration']);


  // }
}

