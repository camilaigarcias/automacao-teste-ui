///<reference types="cypress" />

context('Funcionalidade Login', () =>{

    it('Deve fazer login com sucesso', () =>{
       cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
       cy.get('#username').type('aluno_ebac@teste.com')
       cy.get('#password').type('teste@teste.com')
       cy.get('.woocommerce-form > .button').click()
       cy.get('.page-title').should('contain', 'Minha conta')
       cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, teste_aluno20')

    })
    
    it('Deve exibir mensagem de erro ao inserir usuario invalidos', () =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
       cy.get('#username').type('aluno_xxxc@teste.com')
       cy.get('#password').type('teste@teste.com')
       cy.get('.woocommerce-form > .button').click()
       cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')

    })
    
    
it('Deve exibir mensagem de erro ao inserir senha invalidos', () =>{
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
   cy.get('#username').type('aluno_teste@teste.com')
   cy.get('#password').type('teste@teste')
   cy.get('.woocommerce-form > .button').click()
   cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail')

})


})