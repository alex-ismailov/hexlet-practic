/* Реализуйте и экспортируйте по умолчанию функцию getFreeDomainsCount,
которая принимает на вход список емейлов, а возвращает количество емейлов,
расположенных на каждом бесплатном домене. Список бесплатных доменов хранится в
константе freeEmailDomains. */
import { get } from 'lodash';

const emails = [
    'info@gmail.com',
    'info@yandex.ru',
    'info@hotmail.com',
    'mk@host.com',
    'support@hexlet.io',
    'key@yandex.ru',
    'sergey@gmail.com',
    'vovan@gmail.com',
    'vovan@hotmail.com',
];

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
];

/* my solution
1. сначала отфильтруем все email с бесплатным доменом
2. отобразим только доменные части 
3. свернем список домейнов к соответсвующему виду, согласно требованию по задаче
*/
const getDomain = (email) => {
  const [, domain] = email.split('@');
  return domain;
};

// const getFreeDomainsCount = (emails) => emails
//   .filter((email) => freeEmailDomains.includes(getDomain(email)))
//   .map((email) => getDomain(email))
//   .reduce((acc, domain) => {
//     const count = get(acc, domain, 0) + 1;
//     return { ...acc, [domain]: count };
//   }, {});

/* teacher solution 
1. отобразим только доменные части
2. отфильтруем бесплатные домены
3. свернем список домейнов к соответсвующему виду, согласно требованию по задаче
*/
const getFreeDomainsCount = (emails) => emails
  .map((email) => {
    const [, domain] = email.split('@');
    return domain;
  })
  .filter((domain) => freeEmailDomains.includes(domain))
  .reduce((acc, domain) => {
    const count = get(acc, domain, 0) + 1;
    return { ...acc, [domain]: count};
  }, {});


/* testing */
console.log(getFreeDomainsCount(emails));
// {
//   'gmail.com': 3,
//   'yandex.ru': 2,
//   'hotmail.com': 2,
// };
