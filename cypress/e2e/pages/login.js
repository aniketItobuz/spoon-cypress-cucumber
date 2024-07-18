/// <reference types = 'cypress'/>
class Login {
  openURL() {
    cy.visit(Cypress.env('baseURL'));
    cy.wait(2000);
  }
  loginToApplication() {
    cy.get('[data-test-id="email-address"]').type(Cypress.env('username'));
    cy.get('[data-test-id="password-input"]').type(Cypress.env('password'));
    cy.get('[data-test-id="submit-button"]').click();
  }
  loginVerify() {
    cy.url().should("include", "/dashboard");
    cy.get('[data-test-id="navbar-link-to-dashboard"]').should("be.visible");
  }
}

export default Login;
