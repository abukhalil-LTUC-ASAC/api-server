# LAB 06 - API Server
A dynamic api service, with proper route structure and data contracts, covering concepts of ready mock servers, to building your own API server, and including all the proper middleware and testing files.

## Project Details
Author: Yahya Abu Khalil
Links and Resources
[submission PR](https://github.com/AbuKhalil95/api-server/1)
[Github actions](https://github.com/AbuKhalil95/api-server)

### Modules and Middlewares
- [`server.js`](lib/server.js)
- [`timestamp.js`](lib//middleware/timestamp.js)
- [`logger.js`](lib//middleware/logger.js)
- [`404.js`](lib//middleware/404.js)
- [`500.js`](lib//middleware/500.js)

### Setup
Clone the repo, and run the following commands to install the required dependencies and dev dependencies. 
- `npm install` to download all that exists in `package.json`.
- `sudo npm install -g json-server` to test the json-server mock server.

### Running the app
- `npm start` to test the server yourself using postman.
- `npm test` to run the thorough testing functions.
  
Unit testing with: npm test using supertest to test each route. 

### Unified Modeling Language (UML)
![UML image](resources/uml-api-server.PNG)
