describe('Details tests', () => {
    it('Access details from search', () => {
        cy.visit('http://localhost:3000')
        cy.get('#action-search')
            .type("ABC")
            .should("have.value", "ABC");
        cy.get('#search-button').click()
        cy.contains('ABC').click()
        cy.url().should('include', '/action_detail/ABC')
        //check criteria
    })

    it('Validate stock history', () => {
        cy.visit('http://localhost:3000/action_detail/ABC')
        //check criteria
    })

    it('api error message', () => {
        cy.visit('http://localhost:3000/action_detail/QWERTY')
        //error message
    })
})
