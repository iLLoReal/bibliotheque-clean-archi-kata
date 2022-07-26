import { Bibliotheque } from "../hexagon/Bibliotheque";

export class StaticBibliotheque implements Bibliotheque {
  contientUnExemplaireDe(titre: string) {
    return titre === 'livre existant'
  }
}
