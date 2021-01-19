# Client to APIs

Simple overview of use/purpose.

## Description

Receives a CSV file, reads it and sends a request to the Product identification API.
Receives the results and prints them to a new CSV file.


## Getting Started

### Dependencies

* For development, you will need Node.js installed in your environement 

```
Install Node.js

```
   then, to install dependencies by run "npm install" command:
```
$ npm install 

```
libraries using: 
    axios": "^0.21.1"
    csvtojson": "^2.0.10"
    dotenv": "^8.2.0"
    json2csv ^5.0.5



### Executing program

* Open the program and run node command:
```
$ node index.js

```
* To change the input file path, go to -> ./services/GetFile ->
```
.fromFile("#PUT HERE YOUR NEW PATH")

```
* To change the output file path go to -> ./services/csvWriter -> 
```
.writeFile("#PUT HERE YOUR NEW PATH", csv,) 

```
