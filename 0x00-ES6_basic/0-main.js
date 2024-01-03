// 0
// import { taskFirst, taskNext } from './0-constants.js';
// console.log(`${taskFirst()} ${taskNext()}`);

// 1
// import taskBlock from './1-block-scoped.js';

// console.log(taskBlock(true));
// console.log(taskBlock(false));

// 2
// import getNeighborhoodsList from './2-arrow.js';

// const neighborhoodsList = new getNeighborhoodsList();
// const res = neighborhoodsList.addNeighborhood('Noe Valley');
// console.log(res);

// 3
// import getSumOfHoods from './3-default-parameter.js';

// console.log(getSumOfHoods(34));
// console.log(getSumOfHoods(34, 3));
// console.log(getSumOfHoods(34, 3, 4));

// 4
// import returnHowManyArguments from './4-rest-parameter.js';

// console.log(returnHowManyArguments("one"));
// console.log(returnHowManyArguments("one", "two", 3, "4th"));

// 5
// import concatArrays from './5-spread-operator.js';

// console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));

// 6
// import getSanFranciscoDescription from './6-string-interpolation.js';

// console.log(getSanFranciscoDescription());

// 7
// import getBudgetObject from './7-getBudgetObject.js';

// console.log(getBudgetObject(400, 700, 900));

// 8
// import getBudgetForCurrentYear from './8-getBudgetCurrentYear.js';

// console.log(getBudgetForCurrentYear(2100, 5200, 1090));

// 9
// import getFullBudgetObject from './9-getFullBudget.js';

// const fullBudget = getFullBudgetObject(20, 50, 10);

// console.log(fullBudget.getIncomeInDollars(fullBudget.income));
// console.log(fullBudget.getIncomeInEuros(fullBudget.income));

// 10
// import appendToEachArrayValue from './10-loops.js';

// console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));

// 11
// import createEmployeesObject from './11-createEmployeesObject.js';

// console.log(createEmployeesObject("Software", [ "Bob", "Sylvie" ]));

// 12
// import createEmployeesObject from './11-createEmployeesObject.js';
// import createReportObject from './12-createReportObject.js';

// const employees = {
//     ...createEmployeesObject('engineering', ['Bob', 'Jane']),
//     ...createEmployeesObject('marketing', ['Sylvie'])
// };      

// const report = createReportObject(employees);
// console.log(report.allEmployees);
// console.log(report.getNumberOfDepartments(report.allEmployees));

// 100
// import createIteratorObject from "./100-createIteratorObject.js";

// import createEmployeesObject from './11-createEmployeesObject.js';
// import createReportObject from './12-createReportObject.js';

// const employees = {
//     ...createEmployeesObject('engineering', ['Bob', 'Jane']),
//     ...createEmployeesObject('marketing', ['Sylvie'])
// };

// const report = createReportObject(employees);

// const reportWithIterator = createIteratorObject(report);

// for (const item of reportWithIterator) {
//     console.log(item);
// }

// 101
import createEmployeesObject from "./11-createEmployeesObject.js";
import createReportObject from './12-createReportObject.js';
import createIteratorObject from './100-createIteratorObject.js';
import iterateThroughObject from './101-iterateThroughObject.js';


const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);
const reportWithIterator = createIteratorObject(report);

console.log(iterateThroughObject(reportWithIterator));