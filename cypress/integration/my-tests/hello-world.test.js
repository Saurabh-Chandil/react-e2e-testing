/// <reference types="cypress" />

describe("e2e test", () => {
    it('test one', () => {
        // throw new Error('error occurred')
        cy.visit('https://www.nodejs.org')
        cy.contains('Download for Windows (x64')
        // cy.contains('Node.js® is a JavaScript runtime built').should('exist')
        
        // cy.get('h2#home-downloadhead').contains('Download for Windows (x64)')
        //cy.get('div#home-downloadhead') // not found

        cy.get('h2#home-downloadhead')
        .should('have.text', 'Download for Windows (x64)')        
        
        //cy.viewport(500, 400)
        //cy.viewport('iphone-xr')

        cy.get('div#home-intro p:first>a')
        .should('have.text', "Chrome's V8 JavaScript engine")
        .click()
    })
})