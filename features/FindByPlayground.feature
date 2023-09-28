Feature: Find By playroud functionality 

    Scenario:   On page: "Locators - Find By Playground Test Page" 
                I should: be able to find paragraphs by different locators
    
        Given the browser is at "Home" page
        When user click link on "Locators - Find By Playground Test Page" link
        Then paragraphs with alphabetical letters can be found
        And nested paragraphs can be found 
        And paragraphs with links can be found 
        And paragraphs with ID that starts with "a" can be found
        And paragraphs with ID that starts with "p" can be found
        And paragraps with <a> that have class "normal"

