import { AjouterLivre } from "../src/gestion-bibliotheque/hexagon/AjouterLivre";
import { Livre } from "../src/gestion-bibliotheque/hexagon/Livre";
import { PrixInvalide } from "../src/gestion-bibliotheque/hexagon/PrixInvalide";
import { LivreExistant } from "../src/gestion-bibliotheque/hexagon/LivreExistant";
import { StaticBibliotheque } from "../src/gestion-bibliotheque/server-side/StaticBibliotheque";


describe('Ajouter un livre', () => {
  describe(' avec un titre, auteur, age requis, prix/journée', () => {
    it(' ajoute le livre à la bibliothèque', () => {
      let resultatAjoutLivre = new AjouterLivre(new StaticBibliotheque()).ajouter('Rémi', 'clean code', 70, 200);
      expect(resultatAjoutLivre).toBeInstanceOf(Livre);
    })
  })
  describe(' avec un prix < à 5 euros', () => {
    it(' n\'ajoute pas le livre à la bibliothèque', () => {
      let resultatAjoutLivre = new AjouterLivre(new StaticBibliotheque()).ajouter('Rémi', 'clean code2', 70, 4);
      expect(resultatAjoutLivre).toBeInstanceOf(PrixInvalide);
    })
  })
  describe(' avec un titre qui existe déjà dans la bibliothèque', () => {
    it(' n\'ajoute pas le livre à la bibliothèque', () => {
      let resultatAjoutLivre = new AjouterLivre(new StaticBibliotheque()).ajouter('Rémi', 'livre existant', 70, 5);
      expect(resultatAjoutLivre).toBeInstanceOf(LivreExistant);
    })
  })
})
