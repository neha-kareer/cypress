describe('As a user, I want to validate Call Center DNC Manage add, search, update, delete phone numbers', () => {
  
  it('CRUD operation on DNC call center', () => {
    
    cy.validate_login()
    cy.click_call_center_DNC_menu()
    cy.add_phone_number()
    cy.search_all_phone_numbers('Global DNC')
    cy.get_phone_numbers_list()
    cy.verify_phone_numbers()
    cy.update_phone_number()
    cy.search_all_phone_numbers('Automation Campaign')
    cy.verify_updated_phone_number()
    
  })
})