// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const array = [
  { name: 'Melyssa Balistreri', phone: '(542) 486-4238' },
  { name: 'Tyler Krajcik', phone: '775.087.9078' },
  { name: 'Julio Gutkowski', phone: '199.194.1248' },
  { name: 'Kamren Crooks I', phone: '1-262-928-5538' },
  { name: 'Loyal Okuneva Jr.', phone: '(575) 112-5494' },
  { name: 'Katharina Berge', phone: '308-913-3567' },
  { name: 'Caleb Goldner', phone: '(635) 284-1360' },
  { name: 'Kathleen Donnelly', phone: '1-969-860-3876' },
  { name: 'Manuel Dibbert', phone: '(667) 041-8259' },
  { name: 'Lawson Franecki', phone: '427-931-6702' },
  { name: 'Lenna Farrell', phone: '(407) 621-5078' },
  { name: 'Catalina Nicolas', phone: '(118) 229-4331' },
  { name: 'Glen Heller', phone: '803-732-5506' },
  { name: 'Devan Berge', phone: '(679) 950-1779' },
  { name: 'Derick Hayes', phone: '1-471-238-3438' },
];

const CHUNK_SIZE = 2;

const chunks = array.reduce((acc, item, i) => {
  if (acc[acc.length - 1].length === CHUNK_SIZE) {
    acc.push([]);
  }
  acc[acc.length - 1].push(item);
  return acc;
}, [[]]);

console.log(chunks);

const splitToChunks = (coll, chunkSize) => coll
  .reduce((acc, item) => {
    if (acc[acc.length - 1].length === chunkSize) {
      acc.push([]);
    }
    acc[acc.length - 1].push(item);
    return acc;
  }, [[]]);

  console.log(splitToChunks(array, CHUNK_SIZE));


const users = {
  1: {
    name: 'user1',
    phone: 123,
  },
  2: {
    name: 'user2',
    phone: 456,
  },
  3: {
    name: 'user3',
    phone: 456,
  },
};
const perPage = 2;
const usersPages = Object.values(users)
.reduce((acc, item) => {
  if (acc[acc.length - 1].length === perPage) {
    acc.push([]);
  }
  acc[acc.length - 1].push(item);
  return acc;
}, [[]]);

console.log(usersPages);
