describe('User login', () => {
    
    it('user correctly filling in email and password', () => {
        cy.loginSuccessfully()
    });

    it('user filling only with email', () => {
        cy.loginUnccessfully()
    });

    it('user forgot the Password', () => {
        cy.forgotPassword()
    });
});