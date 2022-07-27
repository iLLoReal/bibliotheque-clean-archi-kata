import { StaticBibliotheque } from "../server-side/StaticBibliotheque";
import { Bibliotheque } from "./Bibliotheque";
import { Livre } from "./Livre";
import { LivreExistant } from "./LivreExistant";
import { PrixInvalide } from "./PrixInvalide";

export class AjouterLivre {
  constructor(private readonly maBibliotheque: Bibliotheque) {
  }
  ajouter(
    auteur: string,
    titre: string,
    ageRequis: number,
    prixALaJournee: number): Livre | PrixInvalide | LivreExistant {

    if (this.maBibliotheque.contientUnExemplaireDe(titre))
      return new LivreExistant();
    if (prixALaJournee < 5)
      return new PrixInvalide();
    return new Livre(auteur, titre, ageRequis, prixALaJournee);
  }
}