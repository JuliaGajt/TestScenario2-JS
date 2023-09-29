Feature: Nested Frame Test Page functionality 

    Scenario:

        Given the browser is at "Frames Test Page" page 
        When switch to Left Frame
        Then list of 30 elements from frame is accesible 

    Scenario:

        Given the browser is at "Frames Test Page" page 
        When switch to Right Frame
        Then list of 50 elements from frame is accesible 

    Scenario:

        Given the browser is at "Frames Test Page" page 
        When switch to Middle Frame
        Then list of 40 elements from frame is accesible 
