import { AjouterLivre } from "../src/gestion-bibliotheque/AjouterLivre";
import { Livre } from "../src/gestion-bibliotheque/Livre";
import { PrixInvalide } from "../src/gestion-bibliotheque/PrixInvalide";

describe('Ajouter un livre', () => {
  describe(' avec un titre, auteur, age requis, prix/journée', () => {
    it(' ajoute le livre à la bibliothèque', () => {
      let resultatAjoutLivre = new AjouterLivre().ajouter('Rémi', 'clean code', 70, 200);
      expect(resultatAjoutLivre).toBeInstanceOf(Livre);
    })
  })
  describe(' avec un prix < à 5 euros', () => {
    it(' n\'ajoute pas le livre à la bibliothèque', () => {
      let resultatAjoutLivre = new AjouterLivre().ajouter('Rémi', 'clean code2', 70, 4);
      expect(resultatAjoutLivre).toBeInstanceOf(PrixInvalide);
    })
  })
})
