/* Управление зависимостями - это очень важная задача при разработке программного обеспечения.
Обычно в приложениях задействовано множество сторонних компонентов, которые, в свою очередь,
тоже могут полагаться на сторонние компоненты.
Одной из задач менеджера зависимостей является подключение зависимостей в правильном порядке.
Библиотеки, от которых зависят другие, должны подключаться раньше.
Определение этой последовательности сводится к задаче сортировки графа.

sortDeps.js
Реализуйте и экспортируйте по умолчанию функцию sortDeps, которая принимает на вход список зависимостей и
возвращает список (массив) отсортированных узлов.

Независимые библиотеки и цепочки библиотек должны быть в порядке, соответствующему порядку элементов в
графе зависимостей. */

/* mongo - нет зависимостей, записываем.
tzinfo - есть зависимость thread_safe, пропускаем
thread_safe - нет зависимостей, записываем и возвращаемся к tzinfo
tzinfo - зависимость thread_safe записана, поэтому можно записать текущую.
uglifier - есть зависимость execjs, пропускаем
execjs - есть зависимости thread_safe и json, пропускаем
thread_safe - уже есть, пропускаем
json - нет зависимостей, записываем и возвращаемся к execjs
execjs - зависимости thread_safe и json есть, поэтому можно записать и возвращаемся к uglifier
uglifier - зависимость execjs записана, добавляем
execjs - уже есть, пропускаем
redis - нет зависимостей, записываем.

В итоге получится [mongo, thread_safe, tzinfo, json, execjs, uglifier, redis] */

const deps1 = {
  mongo: [],
  tzinfo: ['thread_safe'],
  uglifier: ['execjs'],
  execjs: ['thread_safe', 'json'],
  redis: [],
};


/* good */
// const sortDeps = (deps) => {
//   const mainLibs = Object.keys(deps);
//   const iter = (currentDep, acc) => {
//     const subDeps = deps[currentDep];
//     if (_.isEmpty(subDeps)) {
//       return [...acc, currentDep]
//     }

//     return [...acc, subDeps.reduce((acc, c) => iter(c, acc), acc), currentDep];
//   };

//   return _.uniq(_.flattenDeep(mainLibs.map((c) => iter(c, []))));
// };

const sortDeps = (deps) => {
  const iter = (currentDep, acc) => {
    if (acc.includes(currentDep)) {
      return acc;
    }
    const subDeps = deps[currentDep] || [];

    return [...subDeps.reduce((iAcc, c) => iter(c, iAcc), acc), currentDep];
  };

  return Object.keys(deps).reduce((acc, c) => iter(c, acc), []);
};

/* teacher solution */
export default (deps) => {
  const add = (acc, node) => {
    const subDeps = deps[node] || [];
    const subAcc = subDeps.reduce(add, []);
    return { ...acc, ...subAcc, [node]: true };
  };
  const set = Object.keys(deps).reduce(add, {});
  return Object.keys(set);
};

const res = sortDeps(deps1);
console.log('***');
console.log(res);

// console.log(sortDeps(deps1));
// console.log(JSON.stringify(sortDeps(deps1)));

// const sortDeps = (deps) => {
//   const libs = Object.keys(deps);
//   const res = libs.reduce((acc, cKey) => {
//     const subDeps = deps[cKey];
//     if (!subDeps) {
//       return [...acc, cKey];
//     }
//     return [...acc, ...subDeps.map((c) => sortDeps(c))];
//   }, []);
//   return res;
//   // return libs;
// };

// console.log(sortDeps(deps1));
// => ['mongo', 'thread_safe', 'tzinfo', 'json', 'execjs', 'uglifier', 'redis'];
