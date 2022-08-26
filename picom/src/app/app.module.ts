import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PaiementComponent } from './paiement/paiement.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { DiffusionsComponent } from './diffusions/diffusions.component';
import { AjouterAnnonceComponent } from './ajouter-annonce/ajouter-annonce.component';
import { AdministrationComponent } from './administration/administration.component';
import { ModifierAnnonceComponent } from './modifier-annonce/modifier-annonce.component';


@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    InscriptionComponent,
    PaiementComponent,
    AccueilComponent,
    AnnonceComponent,
    DiffusionsComponent,
    AjouterAnnonceComponent,
    AdministrationComponent,
    ModifierAnnonceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
