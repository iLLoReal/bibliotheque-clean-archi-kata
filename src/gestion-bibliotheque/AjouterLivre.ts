import { Livre } from "./Livre";
import { PrixInvalide } from "./PrixInvalide";

export class AjouterLivre {
  ajouter(
    auteur: string,
    titre: string,
    ageRequis: number,
    prixALaJournee: number): Livre | PrixInvalide {
    if (prixALaJournee < 5)
      return new PrixInvalide();
    return new Livre(auteur, titre, ageRequis, prixALaJournee);
  }
}