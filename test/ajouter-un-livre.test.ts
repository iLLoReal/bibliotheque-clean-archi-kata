class Livre {
  constructor(
    private readonly auteur: string,
    private readonly titre: string,
    private readonly ageRequis: number,
    private readonly prixALaJournee: number) {

  }
}


describe('Ajouter un livre', () => {
  describe(' avec un titre, auteur, age requis, prix/journée', () => {
    it(' ajoute le livre à la bibliothèque', () => {
      let livre = new Livre('Rémi', 'clean code', 70, 200);
      expect(livre instanceof Livre).toBe(true);
    })
  })
})