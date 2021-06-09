describe('Details tests', () => {
    it('Access details from search', () => {
        cy.visit('http://localhost:3000')
        cy.get('#action-search')
            .type("AG8")
            .should("have.value", "AG8");
        cy.get('#search-button').click()
        cy.contains('AG8.FRK').click()
        cy.url().should('include', '/action_detail/Agilent%20Technologies/AG8.FRK')
        cy.get('[data-testid=actual-price-id]').should('include.text','Precio Actual: 1' )
        cy.get(':nth-child(3) > .MuiPaper-root > .MuiTable-root > .MuiTableBody-root > :nth-child(1) > :nth-child(2)')
            .should('include.text', '1')
        cy.get(':nth-child(3) > .MuiPaper-root > .MuiTable-root > .MuiTableBody-root > :nth-child(2) > :nth-child(2)')
            .should('include.text', '1')
        cy.get(':nth-child(3) > .MuiPaper-root > .MuiTable-root > .MuiTableBody-root > :nth-child(3) > :nth-child(2)')
            .should('include.text', '2')
        cy.get(':nth-child(3) > .MuiPaper-root > .MuiTable-root > .MuiTableBody-root > :nth-child(4) > :nth-child(2)')
            .should('include.text', '2')
        cy.get(':nth-child(3) > .MuiPaper-root > .MuiTable-root > .MuiTableBody-root > :nth-child(5) > :nth-child(2)')
            .should('include.text', '2')
        cy.get(':nth-child(3) > .MuiPaper-root > .MuiTable-root > .MuiTableBody-root > :nth-child(6) > :nth-child(2)')
            .should('include.text', '2')
        cy.get(':nth-child(3) > .MuiPaper-root > .MuiTable-root > .MuiTableBody-root > :nth-child(7) > :nth-child(2)')
            .should('include.text', '2')
        cy.get(':nth-child(3) > .makeStyles-paper-7 > .MuiPaper-root > .MuiTable-root > .MuiTableBody-root > .MuiTableRow-root > :nth-child(2)')
            .should('include.text', '1')
        cy.get(':nth-child(3) > .makeStyles-paper-7 > .MuiPaper-root > .MuiTable-root > .MuiTableBody-root > .MuiTableRow-root > :nth-child(3)')
            .should('include.text', '2')
        cy.get(':nth-child(3) > .makeStyles-paper-7 > .MuiPaper-root > .MuiTable-root > .MuiTableBody-root > .MuiTableRow-root > :nth-child(4)')
            .should('include.text', '3')
    })

    it('Validate stock history', () => {
        cy.visit('http://localhost:3000/action_detail/Armor%20Minerals%20Inc/A.TRV')
        cy.get('[data-testid=canvas]').should('be.visible').find('g.dataset-0 line')
    })

    it('api error message', () => {
        cy.visit('http://localhost:3000/action_detail/QWERTY')
        //error message
    })
})
