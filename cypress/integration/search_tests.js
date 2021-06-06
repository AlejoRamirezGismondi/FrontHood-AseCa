describe('Search tests', () => {
    it('Search existing stock', () => {
        cy.visit('http://localhost:3000')
        cy.get("#test-div")
        cy.get('#action-search')
            .type("ABC")
            .should("have.value", "ABC");
        cy.get('#search-button').click()
        cy.contains('ABC').should("exist")
    })

    it('Search non existing stock', () => {
        cy.visit('http://localhost:3000')
        cy.get("#test-div")
        cy.get('#action-search')
            .type("QWER(T)Y")
            .should("have.value", "QWER(T)Y");
        cy.get('#search-button').click()
        cy.contains('Unable to find the action you were looking for').should("exist")
    })

    it('non search', () => {
        cy.visit('http://localhost:3000')
        cy.get("#test-div")
        cy.get('.action-card').should("exist")
    })
})
