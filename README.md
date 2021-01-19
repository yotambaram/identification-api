# Client to APIs

## Description

Input a CSV file, reads it and sends a request to the Product identification API.
Receives the results output from identificationAPI and prints them to a new CSV file.


### Getting Started: <br /> 


* For development, you will need Node.js installed in your environement 

```
Install Node.js

```
   then, to install dependencies from "package.json" by run command line "npm install":
```
$ npm install 

```
 
libraries using: 
    axios 0.21.1<br /> 
    csvtojson ^2.0.10<br /> 
    dotenv 8.2.0<br /> 
    json2csv 5.0.5<br /> <br /> 



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
