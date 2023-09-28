Feature: Expanding Div via CSS Page functionality

    Scenario:   On page: "Expanding Div via CSS"
                I should: be able to click hovered link

        Given the browser is at "Expanding Div via CSS" page
        When I hover Div
        And click the link
        Then title of page is equal Expanded Div