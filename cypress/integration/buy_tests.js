describe('Buying tests', () => {
    it('Successful purchase', () => {
        cy.visit('http://localhost:3000')
        cy.get('#action-search')
            .type("AG8")
            .should("have.value", "AG8");
        cy.get('#search-button').click()
        cy.contains('AG8.FRK').click()
        cy.url().should('include', '/action_detail/Agilent%20Technologies/AG8.FRK')
        cy.get('[data-testid="buying-button"]').click({ force: true})
        cy.get('[data-testid=stock-input-id]').type('1')
            .should("have.value", '01');
        cy.get('form > :nth-child(3)').should('include.text','SubTotal: 32.46' )
        cy.get('form > .MuiButtonBase-root').click()
        cy.contains('Compra exitosa').should('exist')
    })

    it('Unsuccessful purchase', () => {
        cy.visit('http://localhost:3000/action_detail/Agilent%20Technologies/AG8.FRK')
        cy.get('[data-testid="buying-button"]').click({ force: true})
        cy.get('[data-testid=stock-input-id]').type('1000')
            .should("have.value", '01000');
        cy.get('form > :nth-child(3)').should('include.text','SubTotal: 32460' )
        cy.get('form > .MuiButtonBase-root').click()
        cy.contains('Not enough funds').should('exist')
        cy.url().should('include', '/deposit')
        cy.get('.App > div > :nth-child(1)').should('include.text','Not enough funds' )
    })
})
