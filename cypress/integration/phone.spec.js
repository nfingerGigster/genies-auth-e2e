describe("The Home Page", () => {
  beforeEach(() => {
    cy.request("POST", "https://cognito-idp.us-east-1.amazonaws.com/", {
      user: {},
    })
      .its("body")
      .as("user");
  });
  it("successfully loads", () => {
    cy.visit("/");

    cy.get("#country-code").type("US").should("have.value", "US");
    cy.get("button[data-testid=submit-button]").should("be.disabled");
    cy.get("input[data-testid=phone-number]").type("7139624036");
    cy.get("button[data-testid=submit-button]").click();
  });
});
