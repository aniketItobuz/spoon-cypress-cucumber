/// <reference types = 'cypress'/>
import Coupon from "../../pages/coupon/coupon"
import Login from "../../pages/login/login"
import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";
const l = new Login();
const c = new Coupon();

Given("Coupon page open", () => {
  l.openURL();
  l.loginToApplication();
  c.openAddCouponForm();
});

When("Add coupon form fill with all the mandatory field", () => {
  c.addCouponFormFillUP();
});

Then("Save the add coupon form", () => {
  c.addCouponFormSubmit();
});


Given("Coupon list", () => {
  l.openURL();
  l.loginToApplication();
  l.loginVerify();
  c.couponList();
})

When("Click on the delete button", ()=> {
  c.deleteCoupon();
})

Then("Coupon is deleted", ()=>{
  c.verifyAfterDeletion();
})