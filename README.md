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
2. Navagiate to the folder of where you saved it
![Step2]()
3. Run 'npm install' in your terminal
![Step3]()
4. Run node index.js to start the server. Check localhost:3000 (default port) and terminal to confirm that the app is up and running
![Step4]()
5. Use your preferred HTTP client, such as Postman or cURL, to make HTTP requests to the API.
    To retrieve a list of all items in the system, make a GET request to the /items endpoint.
    ![Step5a]()
    To create a new item, make a POST request to the /items endpoint. You must provide the following information in the request body:
    - patient: the patient's name
    - address: the patient's address
    - hospital: the patient's hospital 
    - date: date of service for the patient
    - amount: bill amount for the service
    ![Step5b]()

## Conclusion
This API provides a simple way to retrieve, create, item data. Please refer to the documentation above for information on how to use the API endpoints.


