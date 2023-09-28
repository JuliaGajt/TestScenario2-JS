Feature: Basic Web Page Example functionality

    Scenario:   On page: "Basic Web Page Example" 
                There should be: two paragraphs with text

        Given the browser is at "Home" page
        When user click link on "Basic Web Page Example" link
        Then there are 2 centered paragraphs 
        And first paragraph equals "A paragraph of text"
        And second paragraph equals "Another paragraph of text"
