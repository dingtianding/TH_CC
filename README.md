## API Endpoints
This is a RESTful API that provides several endpoints for interacting with the server.

Getting Started
To use this API, you will need to make HTTP requests to the server. You can use any HTTP client to interact with the API.

The API supports the following HTTP methods:

GET: retrieve data
POST: create data

Note there is no authentication for the request to the API.

Endpoints
The following endpoints are available in the API:

/utenss
This endpoint allows you to retrieve, create, update, and delete item data.

GET /users
Returns a list of all users in the system.

POST /users
Creates a new user in the system. You must provide the following information in the request body:
 - patient: the patient's name
 - address: the patient's address
 - hospital: the patient's hospital 
 - date: date of service for the patient
 - amount: bill amount for the service


Conclusion
This API provides a simple way to retrieve, create, item data. Please refer to the documentation above for information on how to use the API endpoints.

Assessment Tasks
Implement assignment using:
Language: Node, Framework: Express
Two endpoints are required
    GET /items: returns a list of medical bills
    POST /items: creates a new medical bill

A medical bill has the following properties:


- Both endpoints should accept and return JSON.
- You do not need to persist the bills to a database. Keep them in memory.
- Provide API tests for both endpoints.
- Provide instructions on how to run your assignment in a README.

