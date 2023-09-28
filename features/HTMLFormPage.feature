Feature: HTML Form Page functionalisty 

    Scenario:   On Page: "HTML Form Example"
                I should: be able to fill the form and submit it

        Given the browser is at "HTML Form Example" page
        When user fill form with data
        And submit form
        Then title change to "Processed Form Details"
        And all submitted information from data appears
