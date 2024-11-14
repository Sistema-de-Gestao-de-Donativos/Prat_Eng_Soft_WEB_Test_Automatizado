Cypress.Commands.add("iniciarSite", () => {
    cy.visit("/");
    cy.get('.menu-button').should('contain.text', "Cadastrar CD")
});

Cypress.Commands.add("iniciarConsultaPedidos", () => {
    cy.visit("/home2");
});

Cypress.Commands.add("iniciarCadastroUsuario", () => {
    cy.visit("/home7");
});

Cypress.Commands.add("iniciarCadastroAdmin", () => {
    cy.visit("/home8");
});

Cypress.Commands.add("iniciarBuscaFuncaoAbrigo", () => {
    cy.visit("/home9");
});

Cypress.Commands.add("iniciarBuscaUsuario", () => {
    cy.visit("/home10");
});

Cypress.Commands.add("iniciarCadastroAbrigo", () => {
    cy.visit("/cadastraAbrigo");
});

Cypress.Commands.add("buscaConsultaPedidoInvalido", () => {
    cy.get("#order-id").type('1');
    cy.get('.menu-button').click();
});

Cypress.Commands.add("buscaFuncaoAbrigo", () => {
    cy.get("#search-query").type('1');
    cy.get('.search-button').click();
    cy.get('#user-list tbody tr:first-child td:first-child').should('have.text', 'Gabriel');

});

Cypress.Commands.add("buscaUsuario", () => {
    cy.get("#search-query").type('Gabriel');
    cy.get('.search-button').click();
    cy.get('#user-list tbody tr:first-child td:first-child').should('have.text', 'Gabriel');

});

Cypress.Commands.add("cadastraAbrigo", () => {
    cy.get('#name').type('Abrigo de Teste')
    cy.get('#country').type('Brasil')
    cy.get('#state').type('Rio Grande do Sul')
    cy.get('#city').type('Porto Alegre')
    cy.get('#neighborhood').type('Partenon')
    cy.get('#street').type('Avenida Ipiranga')
    cy.get('#number').type('6681')
    cy.get('#phone').type('5133203500')
    cy.get('#email').type('puc@edu.pucrs.br')

});

Cypress.Commands.add("cadastraUsuario", () => {
    cy.get('#name').type('Zézinho do Teste')
    cy.get('#email').type('zeteste@gmail.com')
    cy.get('#password').type('zeca123')
    cy.get('.register-button').click()
});

Cypress.Commands.add("cadastraAdmin", () => {
    cy.get('#name').type('Zézinho do Teste')
    cy.get('#email').type('zeteste@gmail.com')
    cy.get('#password').type('zeca123')
    cy.get('select#shelter').select('Abrigo 1')
    cy.get('.register-button').click()
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