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
    
    // Navigate to Masterfile
    cy.get(':nth-child(4) > .applist_gradient').click() // Navigate to Masterfile
    cy.wait(2000) // Wait for 2 Seconds

    // Selecting Menu button
    cy.get('#toggle').click() // Menu Toggle
    cy.get('#sidebar').should('be.visible')
    cy.get('#\\33 89').click().wait(2000) 
    cy.get('#men_28').click() // Click on Employee Masterfile
    cy.wait(3000) // Wait for 3 Seconds
    
    // Add data
    cy.get('#pager_default_add').click() // Click on Add button
    cy.get('[name="modalField[deptdescription]"]').click().clear().type('Test dept1') //Department Description
    cy.get('#btn_diag_save').click() // Click on Save button
    cy.wait(3000) // Wait for 3 Seconds
    cy.get('.ajs-content').should('contain', 'Successfully Added New Department File entry.')
    cy.get('.ajs-button').click() //Close the success message

    // Edit data
    cy.get('.pager_action_btn_container > .save').click() // Click on Edit button
    cy.get('[name="modalField[deptdescription]"]').click().clear().type('Test Department Edited') //Edit Department Description
    cy.get('#btn_diag_save').click() // Click on Save button
    cy.wait(3000) // Wait for 3 Seconds
    cy.get('.ajs-body').should('contain', 'Successfully updated the record(s) in the ff. subsidiaries ( QA TEAM )') //Verify update success message
    cy.get('.ajs-button').click() //Close the success message
    
    // Delete data
    cy.get('.pager_action_btn_container > .exit').click() // Click on Delete button
    cy.get('.ajs-content').should('contain', 'Delete "Department File (Department : Test Department Edited)" Record ?') //Verify delete confirmation message
    cy.get('.ajs-primary > .print').click() // Click on Yes button to confirm deletion
    cy.wait(3000) // Wait for 3 Seconds
    cy.get(':nth-child(16) > .ajs-modal > .ajs-dialog > .ajs-body > .ajs-content').should('contain', 'Successfully deleted Department File entry. (Department : Test Department Edited).') //Verify delete success message
    cy.get(':nth-child(16) > .ajs-modal > .ajs-dialog > .ajs-footer > .ajs-primary > .ajs-button').click() // Click on Close button of success message
  })
})