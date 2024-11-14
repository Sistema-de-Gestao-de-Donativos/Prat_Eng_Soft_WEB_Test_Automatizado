it("Deve cadastrar um novo usuario", () =>{
    cy.iniciarCadastroUsuario()
    cy.cadastraUsuario()
})