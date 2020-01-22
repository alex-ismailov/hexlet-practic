const partialApply = (fn, arg1) => (arg2) => fn(arg1, arg2);

const getAverageSalary = (profession, country) => {
  if (profession === 'programmer' && country === 'spain') {
    return '100$';
  }
  if (profession === 'programmer' && country === 'russia') {
    return '150$';
  }
  if (profession === 'programmer' && country === 'usa') {
    return '200$';
  }
  return 'Uncorrect args';
};

const getProgrammersSalaryByCountry = partialApply(getAverageSalary, 'programmer');
const salarySpain = getProgrammersSalaryByCountry('spain');
const salaryRissia = getProgrammersSalaryByCountry('russia');
const salaryUSA = getProgrammersSalaryByCountry('usa');

console.log('salarySpain = ' + salarySpain);
console.log('salaryRissia = ' + salaryRissia);
console.log('salaryUSA = ' + salaryUSA);