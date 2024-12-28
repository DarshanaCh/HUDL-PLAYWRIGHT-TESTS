Feature: video List from Hudl
@video
 Scenario: Video Page loads
    Given I have successfully Logged in 
    And I should see my profile name	
    When I select video link
    Then I should see the list of videos
