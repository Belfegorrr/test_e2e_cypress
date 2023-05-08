/// <reference types="cypress" />

describe('Testes para a home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve renderizar a home', () => {        
        cy.get('h1')
    })
    it('Deve renderizar os 3 input', () => {        
        cy.get('input').should('have.length', 3)
    })
    it('Deve renderizar os 3 contatos', () => {        
        cy.get('.sc-iAEyYk > :nth-child(2)')
        cy.get('.sc-iAEyYk > :nth-child(3)')
        cy.get('.sc-iAEyYk > :nth-child(4)')
    })
    it('Deve renderizar os botoes', () => {        
        cy.get('.adicionar')
        cy.get(':nth-child(2) > .sc-gueYoa > .delete')
        cy.get(':nth-child(2) > .sc-gueYoa > .edit')
                
    })
    it('Deve levar usuario ao modo editar', () =>{
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('.alterar')
        cy.get('.cancelar')
    })
    it('Deve preencher novo usuario', () =>{
        cy.get('input[type="text"]').type('Iago')
        cy.get('input[type="email"]').type('iago@gmail.com')
        cy.get('input[type="tel"]').type('54981316')
        cy.get('.adicionar').click()
    })
})