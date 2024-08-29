Cypress.Commands.add("iniciarSitePUC", () => {
    cy.visit("/");
    cy.get('[data-front-page="home"].m-link').click()
});