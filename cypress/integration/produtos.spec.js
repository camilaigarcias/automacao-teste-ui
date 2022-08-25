/// <reference types="cypress" />

describe('Funcionalidade página de produtos', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            // .first()
            // .last()
            ///eq(3)
            .contains('Apollo Running Short')
            .click()
    });


    it.only('Deve adicionar um produto ao carrinho', () => {
        var qtd = 5
        cy.get('[class="product-block grid"]')
            .contains('Ajax Full-Zip Sweatshirt')
            .click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(qtd)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', qtd)
        cy.get('.woocommerce-message').should('contain', qtd + ' × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')


    });







});