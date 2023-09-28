Feature: Menu navigation functionality

    Scenario Outline:   On page: "Home"
                        I should: be able to naigate to different pages
                            
        Given the browser is at "Home" page
        When user click link on "<page>" link
        Then title of page is equal <title>

        Examples:
            |page                                       |title                              |
            |Basic Web Page Example                     |Basic Web Page Title               |
            |Element Attributes Examples                |Test Page For Element Attributes   |
            |Locators - Find By Playground Test Page    |Welcome to the Find By Playground  |
            |Table Test Page                            |Table HTML Tag                     |
            |Dynamic Table Test Page                    |Table HTML Tag - JavaScript Created|
            |Alerts (JavaScript)                        |Test Page For JavaScript Alerts    |
            |Fake Alerts                                |Fake Alerts                        |
            |Frames Test Page                           |Nested Frames Simple Example       |
            |iFrames Test Page                          |iFrames Example                    |
            |HTML Form Example                          | HTML Form Elements                |
            |HTML5 Element Form Test Page               |HTML5 Form Elements Test Page      |
            |Windows Link Test Page                     |Windows Example Test               |
            |Hover Test Page                            |Test Page For Element Attributes   |
            |User Agent Redirect Page                   |User Agent Based Redirection Test  |
            |Expanding Div via CSS                      |Expanding Div                      |
            |File Upload Example Page                   |Upload a File                      |
