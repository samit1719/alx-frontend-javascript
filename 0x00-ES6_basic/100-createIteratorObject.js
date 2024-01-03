export default function createIteratorObject(report) {
  const emps = [];
  // a
  for (const dep of Object.keys(report.allEmployees)) {
    // b
    for (const emp of report.allEmployees[dep]) {
      emps.push(emp);
    }
  }

  return emps;
}
