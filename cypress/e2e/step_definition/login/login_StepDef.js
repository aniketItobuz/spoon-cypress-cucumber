/// <reference types = 'cypress'/>
import Login from "../../pages/login/login";
import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";
const l = new Login();

Given("Home page is opened", () => {
  l.openURL();
});

When("Write username and password", () => {
  l.loginToApplication();
});

Then("Open the dashboard menu", () => {
  l.loginVerify();
});
