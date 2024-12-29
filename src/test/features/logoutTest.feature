Feature: Logout from Hudl

@logout
Scenario: Logout from Hudl
 Given I have successfully Logged in 
 And I should click Logout
 And I should redirect to homepage
