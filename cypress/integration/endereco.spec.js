/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'

describe('Funcionalidade Endereços- Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
        cy.login(dados.usuario, dados.senha)
        })

    });


    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Ana Beatriz', 'De Castro Guimarães', 'AG Assessoria Contábil', 'Brasil', 'Rua Hermilo Alves', '235', 'Belo Horizonte','Minas Gerais', '31070010','31993372697', 'anabcguimaraes@gmail.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

    });





});