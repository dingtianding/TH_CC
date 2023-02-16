# Truffle Health API Endpoints 
This is a RESTful API that provides several endpoints for interacting with the server.

## Getting Started
To use this API, you will need to make HTTP requests to the server. You can use any HTTP client to interact with the API.

The API supports the following HTTP methods:
GET: retrieve data
POST: create data

Note that there is no authentication implement in the current version.

## Technology
Language: Node, Framework: Express

## Endpoints
The following endpoints are available in the API:
- /items
This endpoint allows you to retrieve, create, update, and delete item data.

- GET /items
Returns a list of all medical bills in the system.

- POST /items
Creates a new medical bill in the system.

## Instruction
1. Clone the repository to your local machine.
![Step1](https://user-images.githubusercontent.com/83096156/219266621-5c267917-744c-4f4f-92e8-3471a69397e7.gif)
2. Navagiate to the folder of where you saved it and Run 'npm install' in your terminal
![step2](https://user-images.githubusercontent.com/83096156/219267186-fcf9e852-b731-4f15-bf41-11d648c48b65.gif)
4. Run node index.js to start the server. Check localhost:3000 (default port) and terminal to confirm that the app is up and running
![step3](https://user-images.githubusercontent.com/83096156/219267405-a4fa7225-428d-4ead-a5fa-bd74020495c3.gif)
5. Use your preferred HTTP client, such as Postman or cURL, to make HTTP requests to the API.
    
    To retrieve a list of all items in the system, make a GET request to the /items endpoint.
    ![step4a](https://user-images.githubusercontent.com/83096156/219267744-963403db-33e3-49dc-b171-7071f0fedc59.gif)
    
    To create a new item, make a POST request to the /items endpoint. You must provide the following information in the request body:
    - patient: the patient's name
    - address: the patient's address
    - hospital: the patient's hospital 
    - date: date of service for the patient
    - amount: bill amount for the service
    ![step4b](https://user-images.githubusercontent.com/83096156/219268692-8b2ba63e-c7d8-4d25-a6b8-76effc50fa28.gif)

## Conclusion
This API provides a simple way to retrieve, create, item data. Please refer to the documentation above for information on how to use the API endpoints.


