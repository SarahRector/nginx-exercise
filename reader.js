#!/usr/bin/env node

const fs = require("fs");

const readFile = process.argv[2];

const file = fs.readFileSync(readFile, "utf-8");

console.log(file.split('\n'));