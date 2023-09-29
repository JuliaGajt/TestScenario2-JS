Feature: HTML Form Page functionalisty 

    Scenario:   On Page: "HTML5 Element Form Test Page"
                I should: be able to fill the form and submit it

        Given the browser is at "HTML5 Element Form Test Page" page
        When user fill HTML5 form with data and submit it
        Then all submitted information appears
        And title change to "Processed Form Details"

