Feature: Hover Page functionality

    Scenario:    When: hovering Paragraph Button 
                I should: see paragraphs below this Button

        Given the browser is at "Hover Test Page" page
        When hover button "Hover Para"
        Then text "You can see this paragraph now that you hovered on the above 'button'." apears below 

    Scenario:    When: hovering Div Button 
                I should: see paragraphs below this Button

        Given the browser is at "Hover Test Page" page
        When hover button "Hover Div"
        Then text "You can see this child div content now that you hovered on the above 'button'." apears below 
