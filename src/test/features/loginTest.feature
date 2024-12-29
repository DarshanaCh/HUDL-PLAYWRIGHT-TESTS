Feature: Login to Hudl

@invalid @browser=firefox
  Scenario Outline: Unsuccessful login with invalid username

    Given  I am on the Hudl login page
    When I enter Username as "<username>" 
    And I click the continue button
    Then I am not able to login to the application as "<message>"
    

    Examples: 
      | username                      | password      |   message             |
      | wrongUserName                 |               |  Enter a valid email  |
@invalid @browser=webkit

  Scenario Outline: Unsuccessful login with invalid password

    Given  I am on the Hudl login page
    When I enter Username as "<username>" 
    And I click the continue button
    And I enter  Password as "<password>"
    Then I am not able to login to the application as "<message>"
 
    Examples: 
      | username                                       | password      |   message                                       |
      | chandaranadarshana@yahoo.co.uk                 | wrongpass     |  Your email or password is incorrect. Try again.|
 @valid 
  Scenario: Valid Login
    Given  I am on the Hudl login page
    When I enter Username as "chandaranadarshana@yahoo.co.uk" 
    And I click the continue button
    And I enter  Password as "Xxxxxxxxxx"
    Then I am able to see the homepage



