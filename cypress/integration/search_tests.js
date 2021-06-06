describe('Search tests', () => {
    it('Search existing stock', () => {
        cy.visit('http://localhost:3000')
        cy.get("#test-div")
        cy.get('#action-search')
            .type("apple")
            .should("have.value", "apple");
        cy.get('#search-button').click()
        cy.contains('APLE').should("exist")
    })

    it('Search non existing stock', () => {
        cy.visit('http://localhost:3000')
        cy.get("#test-div")
        cy.get('#action-search')
            .type("lalala")
            .should("have.value", "lalala");
        cy.get('#search-button').click()
        cy.contains('Unable to find the action you were looking for').should("exist")
    })

    it('non search', () => {
        cy.visit('http://localhost:3000')
        cy.get("#test-div")
        cy.get('.action-card').should("exist")
    })
})
