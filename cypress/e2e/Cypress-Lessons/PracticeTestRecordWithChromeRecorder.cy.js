describe("PracticeTestRecordWithChromeRecorder", () => {
  it("tests PracticeTestRecordWithChromeRecorder", () => {
    cy.viewport(922, 779);
    cy.visit("https://practice.expandtesting.com/");
    cy.get("#search-input").click();
    cy.get("#search-input").click();
    cy.get("#search-input").click();
    cy.get("#search-input").type("ww");
    cy.get("#search-input").click();
    cy.get("#search-input").type("web input");
    cy.type("{enter}");
    cy.get("#examples-sections a").click();
    cy.location("href").should(
      "eq",
      "https://practice.expandtesting.com/inputs"
    );
    cy.get("#input-number").click();
    cy.get("#input-number").type("5");
    cy.type("{enter}");
    cy.get("#input-text").click();
    cy.get("#input-text").type("5");
    cy.get("#input-password").type("5");
    cy.get("#input-password").click();
    cy.get("#input-date").click();
    cy.get("#input-date").type("2024-07-16");
  });
});
//# recorderSourceMap=BCBDBEBFBGBHBIBJBKBLALCNBOBPBQAQBRBSBTBUBVB
