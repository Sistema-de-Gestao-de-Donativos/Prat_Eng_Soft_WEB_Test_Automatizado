it("Deve consultar por pedido inexistente", () =>{
    cy.iniciarConsultaPedidos()
    cy.buscaConsultaPedidoInvalido()
})