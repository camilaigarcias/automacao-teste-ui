/// <reference types="cypress" />

describe('Funcionalidade página de produtos', () => {
    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            // .first()
            // .last()
            ///eq(2)
            .contains('Argus All-Weather Tank')
            .click()
    });


    it('Deve adicionar um produto ao carrinho', () => {
        var qtd = 2
        cy.get(':nth-child(3) > .page-numbers').click()
        cy.get('[class="product-block grid"]')
            .contains('Cassius Sparring Tank').click()
        cy.get('.button-variable-item-S').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear().type(qtd)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', qtd)
        cy.get('.woocommerce-message').should('contain', qtd + ' × “Cassius Sparring Tank” foram adicionados no seu carrinho.')


    });

    it('Deve adicionar produtos ao carrinho usando comando customizado', () => {
        cy.addProdutos('Arcadio Gym Short', '33', 'Red', 3)

    });







});