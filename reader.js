const fs = require("fs");

module.exports = (readFile, writeFile) => {

const file = fs.readFileSync(readFile, "utf-8");

const logs = file.split('\n').map(log => ({
    ipAddress: log.split(' ')[0],
    requestDate: log.replace(/[\[\]]+/,'').slice(13, 24),
    requestTimestamp: log.slice(26, 33),
    requestMethod: log.split(' ')[5],
    requestPath: log.replace(/["]+/g, '').split(' ')[6],
    requestStatus: Number(log.split(' ')[8]),
    userAgent: log.split('"')[5]
}));

fs.writeFileSync(writeFile, JSON.stringify(logs, null, 2))};
