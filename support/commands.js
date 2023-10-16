// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//---------------login method  
Cypress.Commands.add('validate_login',()=>{
    cy.visit('')
    cy.url().then((url)=>{
        expect(url).to.include('/login')
    })
    cy.get('.signin-info').should('be.visible')
    cy.get('.signin-form').should('be.visible')
    cy.get("#username").clear().type('')
    cy.get('#password').clear().type('')
    cy.get('.signin-btn').click()
    cy.get("#warningModal .modal-header").find("[data-dismiss='modal']").click({force:true})
    cy.url().then((url)=>{
        expect(url).to.include('/dashboard#/Index') 
    }) 
    cy.get(".dropdown-toggle.pointer.user-menu > span").should('contain','admin.auto@cluster13.ss')
})

//--------------call center DNC menu
Cypress.Commands.add('click_call_center_DNC_menu',()=>{
    cy.get('.fa.fa-phone').eq(1).click()
    cy.get("[role='menu']").contains('DNC').click({force:true})
})

//-------------search phone number by type of campaign
Cypress.Commands.add('search_all_phone_numbers',(type)=>{
    cy.click_call_center_DNC_menu()
    cy.get('select').eq(0).select('Campaign').should('have.value', 'string:campaign_id')
    cy.get(".selectize-input").click()
    cy.get('.selectize-dropdown-content').contains(type).click({force:true})
    cy.get(".btn-success").eq(1).click()
})

