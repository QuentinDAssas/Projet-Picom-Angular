export class Tarif {

  id: number = 0;
  prixEnEuros: number = 0;
  administrateur: Administrateur = new Administrateur();
  zone: Zone = new Zone();
  tranchesHoraire: TranchesHoraire = new TranchesHoraire();
}
