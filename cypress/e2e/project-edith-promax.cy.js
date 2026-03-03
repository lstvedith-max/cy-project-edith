describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('[name="gl_comcde"]').click().clear().type('QATEAM') //Company Code
    cy.get('[name="txtusrcde"]').click().clear().type('EDITH') //Username
    cy.get('[name="txtusrpwd"]').click().clear().type('Ayi0429@') //Password
    cy.get('.loginbtn > input').click() //Login button
    cy.wait(2000) // Wait for 2 Seconds
    cy.get('.ajs-content').should('contain', 'Successfully logged in') //Verify login success message
    cy.get('.ajs-button').click() //Close the success message
    cy.url().should('include', '/login_applist.php') //Varification of URL after login
    
    
  })
})