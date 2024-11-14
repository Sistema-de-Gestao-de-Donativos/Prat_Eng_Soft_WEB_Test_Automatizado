it("Deve consultar por usuario", () =>{
    cy.iniciarBuscaUsuario()
    cy.buscaUsuario()
})