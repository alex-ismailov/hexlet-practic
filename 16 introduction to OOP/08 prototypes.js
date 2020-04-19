/* В программировании иногда приходится иметь дело с деньгами. В отличие от большинства других значений,
деньги могут существовать в разных валютах, которые конвертируются друг в друга по
определенным ставкам (они меняются со временем!). Из-за этого, часто, недостаточно просто хранить количество денег,
нужно хранить и их валюту.

Достаточно давно разработчики заметили, что работа с деньгами происходит во всех проектах примерно одинаково.
Это привело к созданию определенного подхода (шаблона проектирования) при работе с деньгами.
В этом задании мы частично реализуем его.

Money.js
Реализуйте абстракцию "Деньги". Она знает о валюте денег, позволяет их конвертировать в другие валюты,
выполнять арифметические операции и форматировать вывод. Список методов:

Money(value, currency = 'usd') – создает объект-деньги.
Money.prototype.getValue() – возвращает стоимость в виде числа
Money.prototype.exchangeTo(currency) – возвращает новый объект-деньги, где значение конвертировано вуказанную валюту
Money.prototype.add(money) – возвращает новый объект-деньги, который представляет из себя сумму исходных денег и
переданных в валюте исходных денег (внутри возможна конвертация если валюты не совпадают)
Money.proconsole.log(totype.format()) – возвращает локализованное представление денег удобное для вывода
const money1 = new Money(100);

// Возвращает значение
money1.getValue(); // 100

// Конвертирует в указанную валюту и возвращает новое значение
money1.exchangeTo('eur').getValue(); // 70

const money2 = new Money(200, 'eur');
money2.getValue(); // 200
const money3 = money2.add(money1);
money3.getValue(); // 270
const money4 = money1.add(money2);
money4.getValue(); // 340

console.log(money1.format()); // "$100"
console.log(money2.format()); // "€200"

const money5 = new Money(10000);
console.log(money5.format()); // "$10,000"

Наша реализация поддерживает только две валюты: usd и eur без возможности расширения. Коэффициенты конверсии:

usd -> eur = 0.7
eur -> usd = 1.2
Подсказки
Number.prototype.toLocaleString() – умеет форматировать вывод денег в нужной локали.
Если передать undefined первым параметром, то установится текущая локаль.
Пример реализации денег на js */

const ratios = {
  usd: {
    eur: 0.7,
  },
  eur: {
    usd: 1.2,
  },
};

function Money(value, currency = 'usd') {
  this.value = value;
  this.currency = currency;
}

Money.prototype.getValue = function getValue() {
  return this.value;
};

Money.prototype.getCurrency = function getCurrency() {
  return this.currency;
};

Money.prototype.exchangeTo = function exchangeTo(newCurrency) {
  const currentCurrency = this.getCurrency();
  if (currentCurrency === newCurrency) {
    return new Money(this.getValue(), currentCurrency);
  }
  return new Money(this.getValue() * ratios[currentCurrency][newCurrency]);
};

Money.prototype.add = function add(money) {
  const currentCurrency = this.getCurrency();
  const moneyCurrency = money.getCurrency();

  if (currentCurrency === moneyCurrency) {
    const newValue = this.getValue() + money.getValue();
    return new Money(newValue, currentCurrency);
  }

  const convertedValue = money.exchangeTo(currentCurrency).getValue();
  const newValue = this.getValue() + convertedValue;
  return new Money(newValue, currentCurrency);
};

Money.prototype.format = function format() {
  return this.getValue().toLocaleString(undefined, { style: 'currency', currency: this.currency });
};

/* testing */
const money1 = new Money(100);
console.log(money1);
// Возвращает значение
console.log(money1.getValue()); // 100

// Конвертирует в указанную валюту и возвращает новое значение
console.log(money1.exchangeTo('eur').getValue()); // 70

const money2 = new Money(200, 'eur');
console.log(money2.getValue()); // 200
console.log(money2.exchangeTo('usd').getValue()); // 240

const money3 = money2.add(money1);
console.log(money3.getValue()); // 270
const money4 = money1.add(money2);
console.log(money4.getValue()); // 340

console.log(money1.format()); // "$100"
console.log(money2.format()); // "€200"

const money5 = new Money(10000);
console.log(money5.format()); // "$10,000"
