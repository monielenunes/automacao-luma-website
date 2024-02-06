import { faker } from '@faker-js/faker';

describe('buy Produtcs ', () => {
    beforeEach(() => {
        cy.visit('https://magento2-demo.magebit.com/');
    });
    it('buy products through the mega menu', () => {
        cy.contains('Women').should('be.visible').trigger('mouseover')
        cy.get('#ui-id-4').should('be.visible').trigger('mouseover')
        cy.get('li a[id="ui-id-12"]').click({force: true})
        cy.get('.base').should('contain.text', 'Jackets');
        //configure Product
        cy.get('#product-item-info_1404').click()
        cy.contains('Olivia 1/4 Zip Light Jacket').should('be.visible')
        cy.get('#option-label-size-157-item-172').click();
        cy.get('#option-label-color-93-item-50').click();
        cy.get('#qty').should('be.visible').clear().type(10);
        cy.get('#product-addtocart-button').click();
        cy.contains('You added Olivia 1/4 Zip Light Jacket to your shopping cart.').should('exist')
        //buy product
        cy.contains('shopping cart').should('be.visible').click()
        cy.get('h1[class="page-title"]').should('be.visible')
        cy.wait(7000)
        cy.get('ul li button[class="action primary checkout"]').should('be.visible').click()
        cy.wait(7000)
            cy.fakerUserInformation().then(userFaker=>{
        cy.get('input[type="email"][data-bind*="email"]').type(userFaker.email)
        cy.get('input[name="firstname"]').type(userFaker.firstName)
        cy.get('input[name="lastname"]').type(userFaker.lastName)
        cy.get('input[name="company"]').type('webjump')
        cy.get('input[name="street[0]"]').type(userFaker.streetAddress)
        cy.get('select[name="region_id"]').select('Alaska')
        cy.get('input[name="city"]').type(userFaker.city)
        cy.get('input[name="postcode"]').type('12345-6789')
        cy.get('input[name="telephone"]').type(userFaker.number)
        cy.get('input[value="flatrate_flatrate"]').click()
        cy.get('.button.action.continue.primary').click()
            });
            //place order
        cy.get('button[title="Place Order"]').click()
        cy.contains('Thank you for your purchase!').should('be.visible')
    });
});


