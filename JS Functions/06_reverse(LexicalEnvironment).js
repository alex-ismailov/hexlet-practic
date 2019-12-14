/* 
Реализуйте функцию reverse, переворачивающую строку. В этот раз, используя итеративный процесс.

Алгоритм:
Ваша задача — реализовать внутреннюю рекурсивную функцию iter, которая первым параметром принимает индекс 
текущего символа, а вторым — текущее значение аккумулятора. Начальный вызов инициализируется значениями 
0 для индекса и '' для аккумулятора. Алгоритм работы функции следующий:

Если текущий индекс выходит за границы строки (его значение превышает значение последнего индекса строки), то 
поиск закончился и, значит, нужно возвратить аккумулятор, содержащий перевёрнутую строку.
В остальных случаях рекурсивно вызывается iter с увеличением индекса на единицу и интерполяцией,
внутри которой к содержимому аккумулятора добавляется символ, взятый по текущему индексу.
*/
const reverse = (str) => {
  const lastIndex = str.length - 1;
  const iter = (currentIndex, acc) => {
    if (currentIndex > lastIndex) {
      return acc;
    }
    return iter(
      currentIndex + 1,
      `${str[currentIndex]}${acc}`,
    );
  };
  return iter(0, '');
};

// reverse testing
const args = [
  'abc',
  'qwerty',
  '12345'
];
args.forEach((str) => {
  console.log(`reverse('${str}') = ${reverse(str)}`);
});

