Cypress.Commands.add("iniciarSite", () => {
    cy.visit("/");
    cy.get('.menu-button').should('contain.text', "Cadastrar CD")
});

Cypress.Commands.add("cadastraCD", () => {
    cy.get('.menu-button').first().click()
    cy.get('#name').type('Centro de Teste')
    cy.get('#country').type('Brasil')
    cy.get('select#state').select('Rio Grande do Sul')
    cy.get('#city').type('Porto Alegre')
    cy.get('#neighborhood').type('Partenon')
    cy.get('#street').type('Avenida Ipiranga')
    cy.get('#number').type('6681')
    cy.get('#phone').type('5133203500')
    cy.get('#email').type('puc@edu.pucrs.br')
    cy.get('button[type="submit"]').contains('Enviar').click();
});