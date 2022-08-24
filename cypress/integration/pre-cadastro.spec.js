///<reference types="cypress" />


describe('Funcionalidade Pre-Cadastro', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve completar o pré-cadastro com sucesso', () => {
        cy.get('#reg_email').type('teste_auto @teste.com')
        cy.get('#reg_password').type('auto@teste1234')
        cy.get(':nth-child(4) > .button').click()

    });




});





