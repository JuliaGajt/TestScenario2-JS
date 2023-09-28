Feature: Dynamic Table Test Page functionality

    Scenario:   On page: "Dynamic Table Test Page"
                I should: be able to change content of table

        Given the browser is at "Dynamic Table Test Page" page
        When filling inputs with <dataId>
        And refreshing table
        Then table should be updated with <dataId>

        Examples:
            |dataId            |
            |example1          |
            |example2          |