Feature: Element Attributes Page functionality

    Scenario:   On page: "Element Attributes Examples"
                There should be: 3 coloured  paragraphs with different attributes

        Given the browser is at "Home" page
        When user click link on "Element Attributes Examples" link
        Then there are 3 coloured paragraphs
        And first paragraph has dom attributes
        And first paragraph has custom attributes
        And first paragraph has js added attributes
        And third paragraph has dynamically changing attributes

    Scenario Outline:   Using: button "Add another Attribute"
                        I should: be able to change number and value of attributes in second paragraph

        Given the browser is at "Element Attributes Examples" page
        And second paragraph has nextid="1" attribute
        When user click button "Add another Attribute" <n> times
        Then value of nextid attribute increments <n> times
        And <n> new attributes is added to second paragraph 

        Examples:
            |n      |
            |1      |
            |4      |
            |14     |
