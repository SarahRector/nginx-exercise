function filterLogs(logs) {
    return logs.filter(log => log.requestDate === process.argv[4])
};

function agentCount(filteredLogs) {
    return filteredLogs.reduce(function(allLogs, {userAgent}) {
        if(userAgent in allLogs) {
            allLogs[userAgent]++
        } else {
            allLogs[userAgent] = 1
        }
        return allLogs
    }, {})
};

function agentHit(allLogs) {
    return Object.entries(allLogs).sort(
        ([,a],[,b]) => b-a)[0]
    };

function methodCount(filteredLogs) {
    return filteredLogs.reduce(function(allLogs, {requestMethod, requestPath}) {
        if(allLogs[requestMethod + requestPath]) {
            allLogs[requestMethod + requestPath]++
        } else {
            allLogs[requestMethod + requestPath] = 1
        }
        return allLogs
    }, {})
};


    module.exports = {filterLogs, agentCount, agentHit, methodCount};