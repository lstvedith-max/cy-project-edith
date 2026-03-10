export const DashboardPage = {
openNavigation(){
    cy.get(':nth-child(4) > .applist_gradient').click() // Navigate to Masterfile
    cy.wait(2000) // Wait for 2 Seconds
},
openMenu(){
      // Selecting Menu button
    cy.get('#toggle').click() // Menu Toggle
    cy.get('#sidebar').should('be.visible')
    cy.get('#\\33 89').click().wait(2000) 
    cy.get('#men_28').click() // Click on Department Masterfile
    cy.wait(3000) // Wait for 3 Seconds
    
}


};