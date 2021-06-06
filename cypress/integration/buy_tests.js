describe('Buying tests', () => {
    it('Successful purchase', () => {
        cy.visit('http://localhost:3000')
        cy.get('#action-search')
            .type("ABC")
            .should("have.value", "ABC");
        cy.get('#search-button').click()
        cy.contains('ABC').click()
        cy.url().should('include', '/action_detail/ABC')
        cy.get('[data-testid="buying-button"]').click({ force: true})
        cy.get('[data-testid=stock-input-id]').type('1')
            .should("have.value", '01');
        // cy.get('[data-testid=total-to-buy-id]').should('include', ) --> verificar subtotal
        cy.get('form > .MuiButtonBase-root').click()
        cy.contains('Compra exitosa').should('exist')
    })

    it('Unsuccessful purchase', () => {
        cy.visit('http://localhost:3000/action_detail/ABC')
        cy.get('[data-testid="buying-button"]').click({ force: true})
        cy.get('[data-testid=stock-input-id]').type('1000')
            .should("have.value", '01000');
        // cy.get('[data-testid=total-to-buy-id]').should('include', ) --> verificar subtotal

        cy.get('form > .MuiButtonBase-root').click()
        cy.contains('Not enough funds').should('exist')
        cy.url().should('include', '/deposit')
    })
})
