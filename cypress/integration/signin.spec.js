/// <reference types="cypress" />
import userData from '../fixtures/userData.json';

describe('sign in', () => {
	beforeEach(() => {
		cy.visit(`${userData.base_url}/sign-in`);
	});

	it('Should fail if there is no form, inputs fields and button (Email and password)', () => {
		cy.get('#email').should('be.visible');
		cy.get('#password').should('be.visible');
		cy.get('#signIn').should('be.visible');
		cy.get('#signMeUp').should('be.visible');
		cy.get('.button-primary').should('be.visible');
	});

	context('Form Submission', () => {
		it('Should not enable the submit button when invalid email and password are entered', () => {
			cy.get('#email').type('example@gmail.com');
			cy.get('#password').type('password');
			cy.get('.button-primary').should('have.css', 'background-color', 'rgb(64, 98, 209)').should('be.disabled');
		});

		it('Should be enable the submit button When valid email and password are entered', () => {
			cy.get('#email').type('example@gmail.com');
			cy.get('#password').type('Password@1');
			cy.get('.button-primary')
				.should('have.css', 'background-color', 'rgb(64, 98, 209)')
				.should('be.not.disabled');
		});

		it('Should fail to login when invalid email and password are entered and form submitted', () => {
			cy.get('#email').type('email@gmai.com');
			cy.get('#password').type('Password@1');
			cy.get('.button-primary').click();
			cy.get('.toast-container').should('be.visible').contains('Authentication was not successful');
		});

		it('Should successfully login when valid email and password are entered and form submitted', () => {
			cy.get('#email').type('temibami@gmail.com');
			cy.get('#password').type('Password@1');
			cy.get('.button-primary').click();
			cy.location('pathname').should('include', '/');
			cy.get('.navbar').should('be.visible');
		});
	});
});
