import { Component, Input, OnInit } from '@angular/core';
import { AnnoncesService } from '../Service/annonces.service';
import { Router } from '@angular/router';
import { AnnonceDto } from '../model/annonce-dto';
import tinymce from 'tinymce';
import { NavbarService } from '../service/navbar.service';
@Component({
  selector: 'app-ajouter-annonce',
  templateUrl: './ajouter-annonce.component.html',
  styleUrls: ['./ajouter-annonce.component.css'],
})
export class AjouterAnnonceComponent implements OnInit {
  @Input()
  AnnonceForm = new AnnonceDto();

  ListTrancheHoraires: any = [];
  ListTrancheHorairesCheckedZone1: any = {};
  ListTrancheHorairesCheckedZone2: any = [];
  ListTrancheHorairesCheckedZone3: any = [];
  ListTrancheHorairesCheckedZone4: any = [];
  ListTrancheHorairesCheckedZone5: any = [];
  TrancheHorairesId: any = [];

  ListZones: any = [];
  ListZonesChecked: any = [];
  timeIntevalSeconds = 1;

  contentZone1: boolean = false;
  contentZone2: boolean = false;
  contentZone3: boolean = false;
  contentZone4: boolean = false;
  contentZone5: boolean = false;

  constructor(
    public service: AnnoncesService,
    public router: Router,
    public nav: NavbarService
  ) {}

  ngOnInit(): void {
    this.nav.show();
    this.loadTrancheHoraires();
    this.loadZones();
    this.calcultMontant();
    setInterval(() => {
      this.calcultMontant();
    }, this.timeIntevalSeconds * 3000);
  }

  loadTrancheHoraires() {
    return this.service.getTrancheHoraires().subscribe((data: {}) => {
      console.log(data);
      this.ListTrancheHoraires = data;
    });
  }

  loadZones() {
    return this.service.getZones().subscribe((data: {}) => {
      console.log(data);
      this.ListZones = data;
    });
  }

  get selectedCheckboxListTrancheHorairesZone1() {
    this.ListTrancheHorairesCheckedZone1 = this.ListTrancheHoraires.filter(
      (item: { checked: any }) => item.checked
    );
    return this.ListTrancheHorairesCheckedZone1;
  }

  get selectedCheckboxListTrancheHorairesZone2() {
    this.ListTrancheHorairesCheckedZone2 = this.ListTrancheHoraires.filter(
      (item: { checked: any }) => item.checked
    );
    return this.ListTrancheHorairesCheckedZone2;
  }

  get selectedCheckboxListTrancheHorairesZone3() {
    this.ListTrancheHorairesCheckedZone3 = this.ListTrancheHoraires.filter(
      (item: { checked: any }) => item.checked
    );
    return this.ListTrancheHorairesCheckedZone3;
  }

  get selectedCheckboxListTrancheHorairesZone4() {
    this.ListTrancheHorairesCheckedZone4 = this.ListTrancheHoraires.filter(
      (item: { checked: any }) => item.checked
    );
    return this.ListTrancheHorairesCheckedZone4;
  }

  get selectedCheckboxListTrancheHorairesZone5() {
    this.ListTrancheHorairesCheckedZone5 = this.ListTrancheHoraires.filter(
      (item: { checked: any }) => item.checked
    );
    return this.ListTrancheHorairesCheckedZone5;
  }

  toggleZone1(event: any) {
    if (event.target.checked) {
      this.contentZone1 = true;
      this.ListZonesChecked[0] = 1;
    }
  }

  toggleZone2(event: any) {
    if (event.target.checked) {
      this.contentZone2 = true;
      this.ListZonesChecked[1] = 2;
    }
  }
  toggleZone3(event: any) {
    if (event.target.checked) {
      this.contentZone3 = true;
      this.ListZonesChecked[2] = 3;
    }
  }
  toggleZone4(event: any) {
    if (event.target.checked) {
      this.contentZone4 = true;
      this.ListZonesChecked[3] = 4;
    }
  }
  toggleZone5(event: any) {
    if (event.target.checked) {
      this.contentZone5 = true;
      this.ListZonesChecked[4] = 5;
    }
  }

  calcultMontant() {
    for (let y = 0; y < this.ListTrancheHorairesCheckedZone1.length; y++) {
      this.TrancheHorairesId[y] = this.ListTrancheHorairesCheckedZone1[y].id;
    }
  }

  onSubmit() {
    this.AnnonceForm.contenu = tinymce.activeEditor.getContent();
    this.AnnonceForm.idClient = 1;
    this.AnnonceForm.idZoneAnnonce = this.ListZonesChecked;
    this.AnnonceForm.idTrancheHoraireAnnonce = this.TrancheHorairesId;
    this.service.addAnnonce(this.AnnonceForm).subscribe((data: {}) => {
      console.log(data);
    });
    window.location.reload();
  }
}
