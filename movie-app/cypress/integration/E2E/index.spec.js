describe("End to end", () => {
  it("Enters home page", () => {
    cy.visit("/");
  });

  it("Search a movie", () => {
    cy.visit("/search");
    cy.get(".ant-input")
      .type("spider", { delay: 800 })
      .should("have.value", "spider");

    cy.get(".ant-card .ant-card-actions svg").first().click();

    cy.url().should("contain", "/movie");
  });
});
