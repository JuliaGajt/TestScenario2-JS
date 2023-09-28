Feature: Fake Alert Page functionality

    Scenario:   On page: "Fake Alerts"
                I should: be able to open fake Alert

        Given the browser is at "Fake Alerts" page
        When click on "Show fake alert box" button
        Then Alert with text "I am a fake alert box!" appears 

    Scenario:   On page: "Fake Alerts" with fake alert visible
                I should: be able to close fake Alert

        Given the "alert box" is visible 
        When clik "OK" button
        Then alert close

    Scenario:   On page: "Fake Alerts"
                I should: be able to open modal dialog Alert

        Given the browser is at "Fake Alerts" page
        When click on "Show modal dialog" button
        Then Alert with text "I am a modal div!" appears 

    Scenario:   On page: "Fake Alerts" with fake alert visible
                I should: be able to close fake Alert

        Given the "alert box" is visible 
        When clik "OK" button
        Then alert close