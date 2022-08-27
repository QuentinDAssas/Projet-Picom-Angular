import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AdministrationComponent } from './administration/administration.component';
import { AjouterAnnonceComponent } from './ajouter-annonce/ajouter-annonce.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ModifierAnnonceComponent } from './modifier-annonce/modifier-annonce.component';
import { PaiementComponent } from './paiement/paiement.component';
import { ErrorPageComponent } from './vue/error-page/error-page.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo: 'connexion'},
  {path:'connexion', component: AccueilComponent},
  {path:'deconnexion', pathMatch:'full', redirectTo: 'connexion'},
  {path:'client/inscription', pathMatch:'full', component: InscriptionComponent},
  {path:'client/annonces-liste', pathMatch:'full', component: AnnonceComponent},
  {path:'client/ajouter-annonce', pathMatch:'full', component: AjouterAnnonceComponent},
  {path:'client/modifier-annonce/id', pathMatch:'full',  component: ModifierAnnonceComponent},
  {path:'client/paiement', pathMatch:'full', component: PaiementComponent},
  {path:'admin/administration', component: AdministrationComponent},
  {path:'**', pathMatch: 'full', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
