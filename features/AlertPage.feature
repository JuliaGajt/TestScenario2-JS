Feature: Alert Box Page functionality

    Scenario:   On page: "Alerts (JavaScript)"
                I should: be able to triger and handle alert box

        Given the browser is at "Alerts (JavaScript)" page
        When user click button "Show alert box"
        And handle alert box 
        Then "alert handled" messeage appears



    Scenario Outline:   On page: "Alerts (JavaScript)"
                        I should: be able to triger and handle confirm box

        Given the browser is at "Alerts (JavaScript)" page
        When user click button "Show confirm box"
        And "<accept>" confirm box 
        Then alert "<accept>" messeage appears

        Examples:
            |accept     |
            |accept     |
            |disimiss   |


    Scenario Outline:   On page: "Alerts (JavaScript)"
                        I should: be able to trigger and handle prompt box

        Given the browser is at "Alerts (JavaScript)" page
        When user click button "Show prompt box"
        And send "<text>" to prompt box
        And "<accept>" confirm box
        Then alert "<accept>" messeage appears with "<text>"

        Examples:
            |accept     |text       |
            |accept     |prompt     |
            |accept     |           |
            |disimiss   |sample     |


