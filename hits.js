const fs = require("fs");
const {filterLogs, methodCount, agentHit} = require('./utils.js');

module.exports = (writeFile, date) => {

const file = fs.readFileSync(process.argv[3], 'utf-8');

const logs = JSON.parse(file);

const filteredLogs = filterLogs(logs);

const methods = methodCount(filteredLogs);

const methodHits = agentHit(methods);

console.log(methods, 'methods');
console.log(methodHits, 'methodHits')
};
