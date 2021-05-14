const {filterLogs} = require('./utils.js');

test('returns logs with a request date of 08/Nov/2020', () => {
  expect(filterLogs([{requestDate: "08/Nov/2020"}])).toBe(3);
});