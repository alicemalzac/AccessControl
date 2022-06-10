/// <reference types="cypress" />

describe('Registros', () => {
    it('Realizar cadastro de usuario valido', () => {
        cy.visit('http://localhost:3000/usuarios/registro')
        cy.get(':nth-child(1) > input').type('Maduan')
        cy.get(':nth-child(2) > input').type('teste@gmail.com')
        cy.get(':nth-child(3) > input').type('123456')
        cy.get(':nth-child(4) > input').type('123456')
        cy.get('.btn').click()
        cy.get('p').should('be.visible').and('contain', 'Cadastro realizado com sucesso!')
    })

    it('Realizar cadastro de usuario duplicado', () => {
        cy.visit('http://localhost:3000/usuarios/registro')
        cy.get(':nth-child(1) > input').type('Maduan')
        cy.get(':nth-child(2) > input').type('teste@gmail.com')
        cy.get(':nth-child(3) > input').type('123456')
        cy.get(':nth-child(4) > input').type('123456')
        cy.get('.btn').click()
        cy.get('p').should('be.visible').and('contain', 'Email já existe')
    })

    it('Testar input de senha', () => {
        cy.visit('http://localhost:3000/usuarios/registro')
        cy.get(':nth-child(3) > input').type('123456').and('not.contain', '123456')
        cy.get(':nth-child(4) > input').type('123456').and('not.contain', '123456')
    })

    it('Testar senhas diferentes', () => {
        cy.visit('http://localhost:3000/usuarios/registro')
        cy.get(':nth-child(1) > input').type('Maduan')
        cy.get(':nth-child(2) > input').type('teste@gmail.com')
        cy.get(':nth-child(3) > input').type('123457')
        cy.get(':nth-child(4) > input').type('123455')
        cy.get('.btn').click()
        cy.get('p').should('be.visible').and('contain', 'As senhas não são iguais')        
    })
})
