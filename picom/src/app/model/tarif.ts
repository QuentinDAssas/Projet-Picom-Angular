import { Administrateur } from "./administrateur";
import { Zone } from "./zone";
import { TrancheHoraire } from './tranche-horaire';

export class Tarif {

  id: number = 0;
  prixEnEuros: number = 0;
  //administrateur: Administrateur = new Administrateur();
  zone: Zone = {
    id : 0,
    nom :'',
    arrets: [],
    annonces : [],
  };
  tranchesHoraire: TrancheHoraire = {
    id : 0,
    debut: 0,
    annonces : [],
  };

  constructor(prixEnEuros: number, zone: Zone, tranchesHoraire: TrancheHoraire ) {
  }

  
}
