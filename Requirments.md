# Overview
## SkimoMeetsConnector
This repository has the connector to connect to Google Meets service provider

The connector extends the SkimoConnectorTemplate, which utilizes Springboot and Thymeleaf

(refer to the template README for more info)

The connector uses the Google REST API to obtain data.

Visit the  [Skimo Website](https://skimo.tv/)  to test functionality.
## Functionality
1. Using the Skimo Connector Template, add a button called "Google Meet"
2. When user presses this button the user will login into their google account and we should be able to get an access token.
3. Then the Google Meet API is used to get the list of all the mp4's in the drive.
4. The user will select one file and the URL along with the access token will be given to the REST API call.
5. The Spring boot controller now gets the url and saves the recording in the server. 
6. The url will then go to the Skimo website and submit itself.
  
```

> Written with [StackEdit](https://stackedit.io/).
