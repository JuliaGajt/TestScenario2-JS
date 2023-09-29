Feature: HTML Form Page functionalisty 

    Scenario:   On Page: "Table Test Page"
                I should: see static table with data

        Given the browser is at "Home" page
        When user click link on "Table Test Page" link
        Then table with data is visible
