Feature: User Autheticate tests

Background:
Given user navigates to the application
And user clicks on login button

Scenario: Login should be successful
And user enter username: "ortoni"
And user enter password: "Pass1234"
When user clicks on the login button 
Then login should be successful

