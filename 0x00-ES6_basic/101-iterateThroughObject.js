import createEmployeesObject from './11-createEmployeesObject';
import createReportObject from './12-createReportObject';
import createIteratorObject from './100-createIteratorObject';
// eslint-disable-next-line import/no-self-import
import iterateThroughObject from './101-iterateThroughObject';

const employees = {
  ...createEmployeesObject('engineering', ['Bob', 'Jane']),
  ...createEmployeesObject('marketing', ['Sylvie']),
};

const report = createReportObject(employees);
const reportWithIterator = createIteratorObject(report);

console.log(iterateThroughObject(reportWithIterator));
