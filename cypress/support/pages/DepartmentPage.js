export const DepartmentPage = {
    addData(){
        cy.get('#pager_default_add').click() // Click on Add button
        cy.get('[name="modalField[deptdescription]"]').type('DPT001') // Department Code
        cy.get('#btn_diag_save').click() // Click on Save button
        cy.get('.ajs-content').should('contain', 'Successfully Added New Department File entry.') // Verify success message
        cy.get('.ajs-button').click() // Click on OK button
        cy.wait(2000) // Wait for 2 Seconds
    },

    editData(){
        cy.get('.pager_action_btn_container > .save').click() // Click on Edit button
        cy.get('[name="modalField[deptdescription]"]').clear().type('DPT1') // Edit Department 
        cy.get('#btn_diag_save').click() // Click on Save button
        cy.wait(2000) // Wait for 2 Seconds
        cy.get('.ajs-content').should('contain', 'Successfully updated the record(s) in the ff. subsidiaries ( QA TEAM )') // Verify success message
        cy.get('.ajs-button').click() // Click on OK button
    }   ,

    deleteData(){
        cy.get('.pager_action_btn_container > .exit').click() // Click on Delete button
        cy.get('.ajs-content').should('contain', 'Delete "Department File (Department : DPT1)" Record ?') // Verify delete confirmation message
        cy.get('.ajs-primary > .print').click() // Click on OK button to confirm deletion
        cy.wait(2000) // Wait for 2 Seconds
        cy.get(':nth-child(16) > .ajs-modal > .ajs-dialog > .ajs-body > .ajs-content').should('contain', 'Successfully deleted Department File entry. (Department : DPT1).') // Verify success message
        cy.get(':nth-child(16) > .ajs-modal > .ajs-dialog > .ajs-footer > .ajs-primary > .ajs-button').click() // Click on OK button
    } 
}