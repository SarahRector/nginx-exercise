const fs = require("fs");
const {filterLogs, count, mostHit} = require('./utils.js');

module.exports = (writeFile, date) => {

const file = fs.readFileSync(process.argv[3], 'utf-8');

const logs = JSON.parse(file);

const filteredLogs = filterLogs(logs);

const counts = count(filteredLogs);

const mostHits = mostHit(counts);


console.log(counts, 'count');
console.log(mostHits, 'agentHits')};
