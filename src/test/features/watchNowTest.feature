Feature: Watch Now Test
@watchNow
Scenario: Watch Now 
 Given I have successfully Logged in 
 And I should see Watch Now link
 When I click watch Now link
 Then I am redirected to search Hudl Fan page
 And I should see the search option
 And I should able to type 'Ronaldo Ronaldo' 
 And I should see record in the list