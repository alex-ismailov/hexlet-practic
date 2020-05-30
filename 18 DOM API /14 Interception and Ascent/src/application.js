/* Игра в 15 или пятнашки — популярная головоломка, придуманная в 1878 году Ноем Чепмэном.
Представляет собой набор одинаковых квадратных костяшек с нанесёнными числами, заключённых в квадратную коробку.
Длина стороны коробки в четыре раза больше длины стороны костяшек для набора из 15 элементов,
соответственно в коробке остаётся незаполненным одно квадратное поле. Цель игры — перемещая костяшки по коробке,
добиться упорядочивания их по номерам, желательно сделав как можно меньше перемещений.

| 9  | 2  | 12 | 7  |
|----|----|----|----|
| 6  | 15 | 10 | 1  |
|----|----|----|----|
| 13 | 14 | 5  | 3  |
|----|----|----|----|
| 11 | 8  | 4  |    |

src/application.js
Реализуйте эту игру внутри функции экспортируемой по-умолчанию, учитывая следующие моменты:

Перемещение происходит по клику. Если номер, на котором был клик, находится рядом с пустой областью,
то он перемещается на эту область. Если пустой области рядом нет, то ничего не происходит.
При перемещении числа, из текущей ячейки удаляется класс table-active и добавляется на ту,
откуда происходит перемещение(та что становится пустой).
В файле уже заданы values, в том порядке в котором они должны появляться в выводе.
Для упрощения тестирования, этот порядок всегда один и тот же.
В файле index.html находится div с классом gem-puzzle, именно к нему нужно привязывать игру.
html первой позиции должен получиться таким:

<div class="gem-puzzle">
  <table class="table-bordered">
    <tbody>
      <tr>
        <td class="p-3">9</td>
        <td class="p-3">2</td>
        <td class="p-3">12</td>
        <td class="p-3">7</td>
      </tr>
      <tr>
        <td class="p-3">6</td>
        <td class="p-3">15</td>
        <td class="p-3">10</td>
        <td class="p-3">1</td>
      </tr>
      <tr>
        <td class="p-3">13</td>
        <td class="p-3">14</td>
        <td class="p-3">5</td>
        <td class="p-3">3</td>
      </tr>
      <tr>
        <td class="p-3">11</td>
        <td class="p-3">8</td>
        <td class="p-3">4</td>
        <td class="p-3 table-active"></td>
      </tr>
    </tbody>
  </table>
</div>

Теги и классы должны совпадать.

Подсказки
Используйте дополнительную навигацию доступную в таблицах: rows, cells.
Достаточно повесить событие на всю таблицу и использовать возможности всплытия
У cell есть свойство cellIndex у row есть свойство rowIndex
Вычисление расстояний между соседними клетками
Формулу Расстояний городских кварталов можно проще описать следующим образом:
Math.abs(a.x - b.x) + Math.abs(a.y - b.y), где a — точка текущий позиции, а b — точка новой позиции. */

const values = [9, 6, 13, 11, 2, 15, 14, 8, 12, 10, 5, 4, 7, 1, 3];

const generatePlayingField = () => {
  const tableEl = document.createElement('table');

  tableEl.className = 'table-bordered';
  for (let i = 0; i < 4; i += 1) {
    const row = tableEl.insertRow();
    for (let j = 0; j < 4; j += 1) {
      const cell = row.insertCell();
      cell.className = 'p-3';
      if (i === 3 && j === 3) {
        cell.classList.add('table-active');
      } else {
        cell.textContent = values[i + (j * 4)];
      }
    }
  }
  return tableEl;
};

// BEGIN (write your solution here)
export default () => {
  const calculateDistance = (a, b) => (
    Math.abs(a.x - b.x) + Math.abs(a.y - b.y)
  );

  const gameField = document.querySelector('.gem-puzzle');
  gameField.append(generatePlayingField());

  const tableBordered = document.querySelector('.table-bordered');

  tableBordered.addEventListener('click', (e) => {
    const { target } = e;
    const activeTable = document.querySelector('.table-active');
    const currentPoint = { x: target.parentNode.rowIndex, y: target.cellIndex };
    const currentActivePoint = { x: activeTable.parentNode.rowIndex, y: activeTable.cellIndex };

    const distance = calculateDistance(currentPoint, currentActivePoint);

    if (distance === 1) {
      activeTable.classList.remove('table-active');
      activeTable.textContent = target.textContent;
      target.classList.add('table-active');
      target.textContent = '';
    }
  });
};
// END

/* teacher solution */
// const getDistance = (a, b) => Math.abs(a.x - b.x) + Math.abs(a.y - b.y);

// export default () => {
//   let currentPosition = { x: 3, y: 3 };
//   const tableEl = generatePlayingField();

//   tableEl.addEventListener('click', (e) => {
//     const cell = e.target;
//     const { cellIndex, parentElement: { rowIndex } } = cell;
//     const newPosition = { y: rowIndex, x: cellIndex };
//     const distance = getDistance(currentPosition, newPosition);
//     if (distance !== 1) {
//       return;
//     }
//     const point = tableEl.rows[currentPosition.y].cells[currentPosition.x];
//     point.textContent = cell.textContent;
//     point.classList.remove('table-active');
//     cell.textContent = '';
//     cell.classList.add('table-active');
//     currentPosition = { x: cellIndex, y: rowIndex };
//   });

//   const root = document.querySelector('.gem-puzzle');
//   root.append(tableEl);
// };
