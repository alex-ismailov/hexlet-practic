/* 
В этой практике мы реализуем упрощённую версию, имитирующую работу условной конструкции if.

Экспортируйте тройку True, False, If, используя только функции, внутри которых только функции ;) 
То есть нельзя пользоваться встроенными в язык if, а также true и false. Сами функции должны быть каррированы.

Пример использования:
import { If, True, False } from './logic';

If(True)('one')('two');  // one
If(False)('one')('two'); // two 
*/

// ***** solution *****
const True = (x) => () => x;
const False = () => (y) => y;
const If = (fn) => fn;

// Этот код рабочий, но не проходит проверку на Хекслете.
// const True = (a, b) => a;
// const False = (a, b) => b; 
// const If = (fn) => (a) => (b) => fn(a, b);

// Разбор
console.log('-------------------------------');
// Передаём в функцию If функцию True, возвращается так же функция: True = (x) => () => x
const IfWithTrue = If(True);
const IfWithTrueArg1 = IfWithTrue('first');
const IfWithTrueArg1Arg2 = IfWithTrueArg1('anything, it still won`t come back');
console.log('IfWithTrueArg1Arg2 = ' + IfWithTrueArg1Arg2);

const IfWithFalse = If(False);
const IfWithFalseArg1 = IfWithFalse('anything, it still won`t come back');
const IfWithFalseArg1Arg2 = IfWithFalseArg1('second');
console.log('IfWithTrueArg1Arg2 = ' + IfWithTrueArg1Arg2);

console.log('-------------------------------');
console.log(`IfWithTrue('first')('second') = ${IfWithTrue('first')('second')}`);
console.log(`IfWithFalse('first')('second') = ${IfWithFalse('first')('second')}`);

console.log('-------------------------------');
console.log(`If(True)('one')('two') = ${If(True)('one')('two')}`);  // one
console.log(`If(False)('one')('two') = ${If(False)('one')('two')}`); // two
console.log('-------------------------------');

