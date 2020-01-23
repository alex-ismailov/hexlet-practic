/* Реализуйте функцию pick, которая извлекает из переданного объекта
все элементы по указанным ключам и возвращает новый объект. Аргументы:
Исходный объект,
Массив ключей, по которым должны быть выбраны элементы (ключ и значение)
из исходного объекта, и на основе выбранных данных сформирован новый объект */

// Примеры
const data = {
  user: 'ubuntu',
  cores: 4,
  os: 'linux',
};

// const pick = (data, keys) => {
//   const resObj = {};
//   for (const key of keys) {
//     if (data.hasOwnProperty(key)) {
//       resObj[key] = data[key];
//     }
//   }
//   return resObj;
// };

/* teacher solution */
const pick = (data, keys) => {
  const resObj = {};
  const dataKeys = Object.keys(data);
  for (const key of keys) {
    if (dataKeys.includes(key)) {
      resObj[key] = data[key];
    }
  }
  return resObj;
};

/* tetsing */
console.log(pick(data, ['user']));       // { user: 'ubuntu' }
console.log(pick(data, ['user', 'os'])); // { user: 'ubuntu', os: 'linux' }
console.log(pick(data, []));             // {}
console.log(pick(data, ['none']));       // {}
