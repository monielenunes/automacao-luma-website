import { faker } from '@faker-js/faker';

describe('User registration', () => {
    it('User registration successfully', () => {
        cy.visit('https://magento2-demo.magebit.com/');
        cy.contains('Create an Account').should('be.visible').click()
            cy.fakerUserInformation().then(userFaker=>{
        cy.get('#firstname').type(userFaker.firstName)
        cy.get('#lastname').type(userFaker.lastName)
        cy.get('#is_subscribed').check()
        cy.get('#email_address').type(userFaker.email)
        cy.get('#password').type('12345678S!')
        cy.get('#password-confirmation').type('12345678S!')
        cy.get('button[title="Create an Account"]').click()
        cy.contains('Thank you for registering with Main Website Store.').should('be.visible')
            });
    });
});