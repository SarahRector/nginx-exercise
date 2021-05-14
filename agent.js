const fs = require("fs");
const {filterLogs, agentCount, agentHit} = require('./utils.js');

module.exports = () => {

const file = fs.readFileSync(process.argv[3], 'utf-8');

const logs = JSON.parse(file);

const filteredLogs = filterLogs(logs);

const agents = agentCount(filteredLogs);

const agentHits = agentHit(agents);

console.log(agentHits, 'most popular userAgent, times used')};
