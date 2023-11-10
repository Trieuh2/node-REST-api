# restAPI-example
This is a basic REST API project built with Node.js, Express &amp; MongoDB. Using this project allows you to perform basic CRUD operations via REST API calls against a local MongoDB database.
The model used in this example is the ['subscriber' model](https://github.com/Trieuh2/node-REST-api/blob/main/models/subscriber.js).

## Installation
Dependencies:
- [npm](https://www.npmjs.com/package/npm) (Required)
- [Node.js](https://nodejs.org/en/download/current)
- [Express](https://expressjs.com/en/starter/installing.html)
- [MongoDB](https://www.mongodb.com/try/download/community) (Required)
- [nodemon](https://www.npmjs.com/package/nodemon)

Any of the dependencies that are not listed as "Required" will be installed via npm.

Installing dependency modules:
1. Install npm (or install Node.js, as npm is bundled with Node.js)
2. Clone this repository and open it in a terminal
3. Run 'npm install' to install the dependencies defined from the pre-existing package.json file

## Usage
1. Open your terminal with the repository opened
2. Run 'nodemon server.js' to quickly restart your local server if you are making changes
3. Wait for 'Server Started' and 'Connected to Database' to appear in the console log
4. Perform REST API calls against your local server using an API platform or local extension.
5. Example usage is found in the ["route.rest" file](https://github.com/Trieuh2/node-REST-api/blob/main/route.rest)

**Recommended**: The [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) is convenient for testing API calls directly within VSCode. 
This can be used with the example usage in the ["route.rest" file](https://github.com/Trieuh2/node-REST-api/blob/main/route.rest).

## Authors and Acknowledgement
This project was built using the [tutorial](https://www.youtube.com/watch?v=fgTGADljAeg&list=PLZlA0Gpn_vH_uZs4vJMIhcinABSTUH2bY) provided by Web Dev Simplified.
