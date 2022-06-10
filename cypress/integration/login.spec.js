/// <reference types="cypress" />

describe('Login', () => {
    it('Logar com sucesso', () => {
        cy.visit('http://localhost:3000/usuarios/login')
        cy.get(':nth-child(1) > input').type('teste@gmail.com')
        cy.get(':nth-child(2) > input').type('123456')
        cy.get('.btn').click()
        cy.get('h1').should('be.visible').and('contain', 'Dashboard')
    })

    it('Logout', () => {
        cy.visit('http://localhost:3000/usuarios/login')
        cy.get(':nth-child(1) > input').type('teste@gmail.com')
        cy.get(':nth-child(2) > input').type('123456')
        cy.get('.btn').click()
        cy.get('h1').should('be.visible').and('contain', 'Dashboard')
        cy.get('a').click()
        cy.get('h1').should('be.visible').and('contain', 'Login')
        cy.get('p').should('be.visible').and('contain', 'Logout realizado.')
    })

    it('Logar com senha errada', () => {
        cy.visit('http://localhost:3000/usuarios/login')
        cy.get(':nth-child(1) > input').type('teste@gmail.com')
        cy.get(':nth-child(2) > input').type('1234567')
        cy.get('.btn').click()
        cy.get('body').should('be.visible').and('contain', 'Senha incorreta')
    })

    it('Logar com usuario não existente', () => {
        cy.visit('http://localhost:3000/usuarios/login')
        cy.get(':nth-child(1) > input').type('teste@gmail2.com')
        cy.get(':nth-child(2) > input').type('1234567')
        cy.get('.btn').click()
        cy.get('body').should('be.visible').and('contain', 'Email não existe!')
    })

    it('Testar input de senha', () => {
        cy.visit('http://localhost:3000/usuarios/login')
        cy.get(':nth-child(2) > input').type('123456').and('not.contain', '123456')
    })
})
