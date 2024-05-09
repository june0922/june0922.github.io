const fs = require('fs');
const path = require('path');
const express = require('express');

// for now, we will get our data by reading the provided json file
const file = 'stocks-simple.json';
const jsonPath = path.join(__dirname, 'data', file);
// read file contents synchronously
const jsonData = fs.readFileSync(jsonPath, 'utf8');
// convert string data into JSON object
const stocks = JSON.parse(jsonData);
// create an express app
const app = express();