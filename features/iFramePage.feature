Feature: iFrame Test Page functionality 

    Scenario:

        Given the browser is at "iFrames Test Page" page 
        When switch to List Frame
        Then elements from list are accesible 


    Scenario:

        Given the browser is at "iFrames Test Page" page 
        When switch to Header Frame
        Then paragraph from iframe is accesible 
    
