Feature: User Agent Redirect Page Page functionality

    Scenario:   On page: "User Agent Redirect Page"
                There should be: 3 coloured  paragraphs with different attributes

        Given the browser is at "Home" page
        When user click link on "User Agent Redirect Page" link
        Then mobile page loads