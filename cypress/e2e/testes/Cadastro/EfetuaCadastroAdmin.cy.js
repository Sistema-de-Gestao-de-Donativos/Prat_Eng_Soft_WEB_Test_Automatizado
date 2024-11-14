it("Deve cadastrar um novo admin", () =>{
    cy.iniciarCadastroAdmin()
    cy.cadastraAdmin()
})