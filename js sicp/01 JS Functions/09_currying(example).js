const originalSum = (a, b, c) => a + b + c;
const sum = a => b => c => originalSum(a, b, c);

const sum1 = sum(10);
const sum2 = sum1(3);
const result = sum2(0);

const result2 = sum(10)(3)(0);

console.log(result);
console.log(result2);

const greeting = () => () => () => () => console.log('Hey!')
greeting()()()();

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

const carriedGetAverageSalary = (profession) => (country) => getAverageSalary(profession, country);
const getProgrammersSalaryByCountry = carriedGetAverageSalary('programmer');
const spainSalary = getProgrammersSalaryByCountry('spain');
const russiaSalary = getProgrammersSalaryByCountry('russia');
const USASalary = getProgrammersSalaryByCountry('USA');
const usaSalary = getProgrammersSalaryByCountry('usa');

console.log('spainSalary = ' + spainSalary);
console.log('russiaSalary = ' + russiaSalary);
console.log('USASalary = ' + USASalary);
console.log('usaSalary = ' + usaSalary);

