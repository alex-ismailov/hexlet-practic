/* Реализуйте и экспортируйте функцию getMutualFriends, которая принимает на вход двух пользователей и
возвращает массив состоящий из общих друзей.

Интерфейс абстракции User:

user.id – возвращает идентификатор пользователя, по которому можно его отличить от остальных.
user.getFriends() – возвращает список друзей.

// Подробнее смотрите в тестах
const mutualFriends = getMutualFriends(user1, user2); */

/* решение для себя */
import _ from 'lodash';
/* *** */

/* constructor */
const makeUser = ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends;
  },
});
/* ************************************************* */

// BEGIN (write your solution here)
const getMutualFriends = (friend1, friend2) => {
  const firstFriends = friend1.getFriends();
  const secondFriends = friend2.getFriends();
  const secondFriendsIDs = secondFriends.map((friend) => friend.id);

  return firstFriends.filter((friendOfFirst) => secondFriendsIDs.includes(friendOfFirst.id));
};

/* the esiest way to do it is using intersection function from lodash */
// const getMutualFriends = (friend1, friend2) => {
//   const firstFriends = friend1.getFriends();
//   const secondFriends = friend2.getFriends();
  
//   return _.intersectionBy(firstFriends, secondFriends, 'id');
// };

/* teacher solution */
// const getMutualFriends = (friend1, friend2) => {
//   const user1Friends= friend1.getFriends();
//   const secondFriends = friend2.getFriends();
  
//   const mutualFriends = user1Friends.filter((friendOfUser1) => 
//     secondFriends.some((friendOfUser2) => friendOfUser2.id === friendOfUser1.id));
  
//     return mutualFriends;
// };
// END

/* testing */
// Users's creation
const users = [
  makeUser({ id: 2 }),
  makeUser({ id: 8 }),
  makeUser({ id: 7 }),
  makeUser({ id: 100 }),
];

const user1 = makeUser({ friends: [users[0], users[1], users[3]] });
const user2 = makeUser({ friends: [users[0], makeUser({ id: 100 }), users[2]] });
const comparator = (a, b) => Math.sign(a.id - b.id);
const mutualFriendsIds = getMutualFriends(user1, user2)
  .sort(comparator)
  .map((friend) => friend.id);

const expected = [users[0], users[3]]
  .sort(comparator)
  .map((friend) => friend.id);

console.log(mutualFriendsIds); // toEqual(expected);
console.log(expected); // => [ 2, 100 ]

// console.log('*****');
// // console.log(user1);
// // console.log(user2);

// console.log(getMutualFriends(user1, user2));
