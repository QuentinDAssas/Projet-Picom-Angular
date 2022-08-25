import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponentComponent } from './client-component/client-component.component';
import { AdministrateurComponentComponent } from './administrateur-component/administrateur-component.component';
import { InscriptionComponentComponent } from './inscription-component/inscription-component.component';
import { PaiementComponentComponent } from './paiement-component/paiement-component.component';
import { AccueilComponentComponent } from './accueil-component/accueil-component.component';
import { AnnonceComponentComponent } from './annonce-component/annonce-component.component';
import { DiffusionsComponentComponent } from './diffusions-component/diffusions-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponentComponent,
    AdministrateurComponentComponent,
    InscriptionComponentComponent,
    PaiementComponentComponent,
    AccueilComponentComponent,
    AnnonceComponentComponent,
    DiffusionsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
