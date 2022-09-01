/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereços- Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
        cy.login(dados.usuario, dados.senha)
        })

    });


    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Ana Beatriz', 'De Castro Guimarães', 'AG Assessoria Contábil', 'Brasil', 'Rua Hermilo Alves', '235', 'Belo Horizonte','Minas Gerais', '31070010','31993372697', 'anabcguimaraes@gmail.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

    });

    it('Deve fazer cadastro de faturamento com sucesso- usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[3].nome,
            dadosEndereco[3].sobrenome,
            dadosEndereco[3].empresa,
            dadosEndereco[3].pais,
            dadosEndereco[3].endereco,
            dadosEndereco[3].numero,
            dadosEndereco[3].cidade,
            dadosEndereco[3].estado,
            dadosEndereco[3].cep,
            dadosEndereco[3].telefone,
            dadosEndereco[3].email
        )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

    });    





});