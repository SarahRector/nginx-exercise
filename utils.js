 function filterLogs(logs) {
    return logs.filter(log => log.requestDate === process.argv[4])
};

 function count(filteredLogs) {
     return filteredLogs.reduce(function(allLogs, {userAgent}) {
        if(userAgent in allLogs) {
            allLogs[userAgent]++
        } else {
            allLogs[userAgent] = 1
        }
        return allLogs
    }, {})
};

function mostHit(allLogs) {
    return Object.entries(allLogs).sort(
        ([,a],[,b]) => b-a)[0]
    };


    module.exports = {filterLogs, count, mostHit};