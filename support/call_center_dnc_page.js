const p_numbers= ['8884568889','8884568888','8884568887','8884568886','8884568885','8884568884',
        '8884568883','8884568882','8884568881','8884568880']
const upd_number='8884567777'        
var phone_list=[]        

Cypress.Commands.add('add_phone_number',()=>{
    cy.get(".fa-upload").click()
    
    cy.wait(3000)
        for(var i=0; i<10; i++){
            cy.get("#number").clear().type(p_numbers[i])
            cy.get('select').eq(3).select('+1 United States').should('have.value', 'number:1')
            cy.get(".btn-success").eq(2).click()
        }
              
})

Cypress.Commands.add('get_phone_numbers_list',()=>{
    cy.get(".table-striped tbody").find('tr>td:nth-of-type(2)').each((ele)=>{
        phone_list.push(ele[0].innerText)
    }) 
})

Cypress.Commands.add('verify_phone_numbers',()=>{
    expect(phone_list).to.include.members(p_numbers)
})

Cypress.Commands.add('update_phone_number',()=>{
    cy.get(".ng-scope:nth-of-type(9) .fa-cog").click()
    cy.get("tr:nth-of-type(9) .dropdown-menu.dropdown-menu-right .fa.fa-pencil").click({force:true})
    cy.get("[type='text']").clear().type(upd_number)
    cy.get('select').eq(1).select('Automation Campaign')
    cy.get("button#send-email").click()
})

Cypress.Commands.add('verify_updated_phone_number',()=>{
    cy.get(".ng-scope > td:nth-of-type(2)").invoke('innerText').then((val)=>{
        expect(val).to.equal(upd_number)
    })
    cy.get("td:nth-of-type(3) .ng-binding").invoke('innerText').then((val)=>{
        expect(val).to.equal('Automation Campaign')
    })
})

Cypress.Commands.add('delete_phone_numbers_via_API',()=>{
    
})