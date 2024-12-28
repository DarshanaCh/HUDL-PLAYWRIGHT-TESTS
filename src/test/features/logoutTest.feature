Feature: Logout from Hudl

@logout
Scenario: Logout from Hudl
 Given I have successfully Logged in 
 #And I am able to see the homepage
 And I should see my profile name
 And I should see Logout option
 And I should click Logout
 And I should redirect to homepage
