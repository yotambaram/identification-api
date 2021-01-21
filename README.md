# Client to APIs
<br /> <br /> 
## Description:

Input a CSV file, reads it and sends a request to the Product identification API.
Receives the results output from identificationAPI and prints them to a new CSV file.


## Getting Started: <br /> 


* For development, you will need Node.js installed in your environment 

```
Install Node.js

```
   * then, to install dependencies from "package.json" by run command line "npm install":
```
$ npm install 

```
 
   * Key and Id required, use .env file with:<br /> 
    X-APP-ID:your api ID<br /> 
    X-API-KEY:your api KEY

```
.env

```





## Executing program:

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
