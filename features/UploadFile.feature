Feature: File Upload Example Page functionality

    Scenario:   On page: "File Upload Example Page"
                I should: be able to upload file

        Given the browser is at "File Upload Example Page" page
        When uploading file 
        Then title of page is equal Uploaded Results Page
        And my filename is visible