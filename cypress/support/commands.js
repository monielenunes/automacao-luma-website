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

    Cypress.Commands.add('loginSuccessfully', (emai, password, button) => {
        cy.visit('https://magento2-demo.magebit.com/');
        cy.contains('a', 'Sign In').should('be.visible').click()
        cy.contains('If you have an account, sign in with your email address').should('be.visible')
        cy.get('#email').type('roni_cost@example.com')
        cy.get('input[title="Password"]').type('roni_cost3@example.com')
        cy.get('button[class="action login primary"]').click()
        cy.wait(5000)
        cy.contains('Welcome, Veronica Costello!').should('be.visible')
    });


    Cypress.Commands.add('loginUnccessfully', (email, button, error) => {
        cy.visit('https://magento2-demo.magebit.com/');
        cy.contains('a', 'Sign In').should('be.visible').click()
        cy.contains('If you have an account, sign in with your email address').should('be.visible')
        cy.get('#email').type('roni_cost@example.com')
        cy.wait(5000)
        cy.get('button[class="action login primary"]').click()
        cy.contains('This is a required field.').should('be.visible')
    });

    Cypress.Commands.add('forgotPassword', (login, forgotPasswordLink) => {
        cy.visit('https://magento2-demo.magebit.com/');
        cy.contains('a', 'Sign In').should('be.visible').click()
        cy.contains('If you have an account, sign in with your email address').should('be.visible')
        cy.get('a[class="action remind"]').should('be.visible').click()
        cy.contains('Forgot Your Password?').should('be.visible')
        cy.contains('Please enter your email address below to receive a password reset link').should('exist')
    });

    import { faker } from '@faker-js/faker';
    Cypress.Commands.add('fakerUserInformation', () => {
        const userFaker = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        streetAddress: faker.location.streetAddress(),
        city: faker.location.city(),
        zipCode: faker.location.zipCode(),
        number: faker.phone.number(),
        };
    return userFaker;
    });
   
      
