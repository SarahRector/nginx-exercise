#!/usr/bin/env node

//10.0.1.7 - - [08/Nov/2020:00:00:00 -0700] "GET /about HTTP/1.1" 200 890 "-" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.3"

const fs = require("fs");

const readFile = process.argv[2];
const writeFile = process.argv[3];

const file = fs.readFileSync(readFile, "utf-8");

const logs = file.split('\n').map(log => ({
    ipAddress: log.split(' ')[0],
    requestTimestamp: log.split(' ')[3],
    requestMethod: log.split(' ')[5],
    requestPath: log.split(' ')[6],
    requestStatus: Number(log.split(' ')[9]),
    userAgent: log.split(' ')[11]
}));

fs.writeFileSync(writeFile, JSON.stringify(logs, null, 2));

console.log(logs);