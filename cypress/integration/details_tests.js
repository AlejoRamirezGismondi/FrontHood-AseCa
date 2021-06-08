describe('Details tests', () => {
    it('Access details from search', () => {
        cy.visit('http://localhost:3000')
        cy.get('#action-search')
            .type("AG8")
            .should("have.value", "AG8");
        cy.get('#search-button').click()
        cy.contains('AG8.FRK').click()
        cy.url().should('include', '/action_detail/Agilent%20Technologies/AG8.FRK')
        //check criteria
    })

    it('Validate stock history', () => {
        cy.visit('http://localhost:3000/action_detail/Agilent%20Technologies/AG8.FRK')
        //check criteria
    })

    it('api error message', () => {
        cy.visit('http://localhost:3000/action_detail/QWERTY')
        //error message
    })
})
