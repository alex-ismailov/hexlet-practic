/*
  Реализуйте и экспортируйте по умолчанию функцию compareVersion,
  которая сравнивает переданные версии version1 и version2.
  Если version1 > version2, то функция должна вернуть 1,
  если version1 < version2, то - -1,
  если же version1 = version2, то - 0.

  Версия - это строка, в которой два числа (мажорная и минорные версии) разделены точкой,
  например: 12.11. Важно понимать, что версия - это не число с плавающей точкой,
  а несколько чисел не связанных между собой.
  Проверка на больше/меньше производится сравнением каждого числа независимо.
  Поэтому версия 0.12 больше версии 0.2.

  Пример порядка версий:

  0.1 < 1.1 < 1.2 < 1.11 < 13.37
  compareVersion("0.1", "0.2"); // -1
  compareVersion("0.2", "0.1"); // 1
  compareVersion("4.2", "4.2"); // 0
*/

const compareVersion = (ver1, ver2) => {
  const splitedVer1 = ver1.split('.');
  const splitedVer2 = ver2.split('.');
  for (let i = 0; i < 2; i += 1) {
    if (Number(splitedVer1[i]) > Number(splitedVer2[i])) {
      return 1;
    }
    if (Number(splitedVer1[i]) < Number(splitedVer2[i])) {
      return -1;
    }
  }
  return 0;
};

// teacher solution
// const compareVersion = (ver1, ver2) => {
//   const [a1, b1] = ver1.split('.');
//   const [a2, b2] = ver2.split('.');
//   const major = Math.sign(a1 - a2);
//   const minor = Math.sign(b1 - b2);
//   return major === 0 ? minor : major;
// };
 
// testing
console.log(compareVersion("0.1", "0.2")); // -1
console.log(compareVersion("0.2", "0.1")); // 1
console.log(compareVersion("4.2", "4.2")); // 0
console.log(compareVersion("3.2", "2.12")); // 1
console.log(compareVersion('0.2', '0.12')); // -1
