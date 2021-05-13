#!/usr/bin/env node

//10.0.1.7 - - [08/Nov/2020:00:00:00 -0700] "GET /about HTTP/1.1" 200 890 "-" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.3"

const fs = require("fs");

const file = fs.readFileSync(process.argv[3], 'utf-8');

const logs = JSON.parse(file);

const counts = logs.reduce(function(allLogs, userAgent) {
    if(userAgent in allLogs) {
        allLogs[userAgent]++
    } else {
        allLogs[userAgent] = 1
    }
    return allLogs
}, {})

console.log(counts, 'agent');
