describe("Pokedex", function () {
  it("front page can be opened", function () {
    cy.visit("http://localhost:5000");
    cy.contains("ivysaur");
    cy.contains(
      "Pokémon and Pokémon character names are trademarks of Nintendo."
    );
  });
  it("allows clicking on a single pokemon", () => {
    cy.visit("http://localhost:5000");
    cy.contains("ivysaur").click();
    cy.wait(1000);
    cy.contains("Chlorophyll", { matchCase: false });
  });
});
