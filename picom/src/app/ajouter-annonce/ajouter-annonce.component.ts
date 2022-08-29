import { Component, Input, OnInit } from '@angular/core';
import { AnnoncesService } from '../Service/annonces.service';
import { TarifDto } from '../model/tarif-dto';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
export interface Cartoon {
  id: number;
  name: string;
}
@Component({
  selector: 'app-ajouter-annonce',
  templateUrl: './ajouter-annonce.component.html',
  styleUrls: ['./ajouter-annonce.component.css']
})
export class AjouterAnnonceComponent implements OnInit {
  form!: FormGroup;
  cartoonsData: Cartoon[] = [
    { id: 0, name: 'Tom and Jerry' },
    { id: 1, name: 'Rick and Morty' },
    { id: 2, name: 'Ben 10' },
    { id: 3, name: 'Batman: The Animated Series' }
  ];

  @Input()
  addAnnonceForm = new TarifDto();


  ListTrancheHoraires: any = [];
  ListZones: any = [];


  constructor(
    public service: AnnoncesService,
    public router: Router,
    public fb: FormBuilder
  ){}

    ngOnInit(): void {
      this.loadTrancheHoraires()
      this.loadZones()
      this.form = this.fb.group({
        name: this.fb.array([])
      });
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

    onChange(name: string, isChecked: boolean) {
      const cartoons = (this.form.controls.name as FormArray);

      if (isChecked) {
        cartoons.push(new FormControl(name));
      } else {
        const index = cartoons.controls.findIndex(x => x.value === name);
        cartoons.removeAt(index);
      }
    }

    calcultMontant(){

    }


    onSubmit() {
      // this.service.addAnnonce(this.addAnnonceForm).subscribe((data: {}) => {
        console.log(this.form.value.name);
      // });
    }

}
