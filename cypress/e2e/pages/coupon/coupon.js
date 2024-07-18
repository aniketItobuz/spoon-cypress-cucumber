/// <reference types = 'cypress'/>
import { format } from 'date-fns';
class Coupon {
  openAddCouponForm() {
    cy.get('[data-test-id="navbar-link-to-coupons"]').click();
    cy.wait(3000);
    cy.get('[data-test-id="add-coupon-button"]').click();
  };
  addCouponFormFillUP() {
    cy.get('[data-test-id="input-discountPercentage"]').type('20');
    cy.get('[data-test-id="input-coupon-start-date"]').type(format(new Date(), 'yyyy-MM-dd'))
    cy.get('[data-test-id="input-couponCode"]').click();
    cy.wait(3000);
  }
  addCouponFormSubmit() {
    cy.get('[data-test-id="submit-button"]').click();
    cy.wait(3000);
  }
}

export default Coupon;
