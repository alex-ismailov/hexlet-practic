На Хекслете доступ к курсам оформляется через подписку. Подписка, это отдельная сущность, которая хранит в себе
информацию о самой подписке, когда она началась, сколько продолжается, оплачена ли и так далее.
Типичная проверка на наличие подписки (а значит доступ к платному контенту) выглядит так:

// Эти примеры сильно упрощены, к тому же Хекслет написан на Rails
// но для демонстрации идеи такая реализация подойдет

user.getCurrentSubscription().hasPremiumAccess();
user.getCurrentSubscription().hasProfessionalAccess();

Но не у всех пользователей есть подписка, на Хекслете есть и большая бесплатная часть.
Так как подписка может отсутствовать, в коде придется делать так:

if (user.getCurrentSubscription() && user.getCurrentSubscription().hasPremiumAccess()) {
   // есть премиум доступ, показываем что-то особенное
}
Чтобы избежать постоянных проверок на существование подписки, мы внедрили Null Object. Теперь подписка есть всегда и
достаточно написать:

if (user.getCurrentSubscription().hasProfessionalAccess()) {
   // есть профессиональный доступ, показываем что-то особенное
}
FakeSubscription.js
Реализуйте и экспортируйте по умолчанию класс FakeSubscription, который повторяет интерфейс класса Subscription
за исключением конструктора. В конструктор FakeSubscription принимает пользователя.
Если пользователь администратор user.isAdmin(), то все доступы разрешены, если нет – то запрещены.

User.js
Допишите конструктор пользователя, так, чтобы внутри устанавливалась реальная подписка если она передана снаружи и
создавалась фейковая в ином случае.

Примеры
import Subscription from '../Subscription.js';
import User from '../User.js';

const user1 = new User('vasya@email.com', new Subscription('premium'));
user1.getCurrentSubscription().hasPremiumAccess(); // true
user1.getCurrentSubscription().hasProfessionalAccess(); // false

const user2 = new User('vasya@email.com', new Subscription('professional'));
user2.getCurrentSubscription().hasPremiumAccess(); // false
user2.getCurrentSubscription().hasProfessionalAccess(); // true

// Внутри создается фейковая, потому что подписка не передается
const user3 = new User('vasya@email.com');
user3.getCurrentSubscription().hasPremiumAccess(); // false
user3.getCurrentSubscription().hasProfessionalAccess(); // false

const user4 = new User('rakhim@hexlet.io'); // администратор, проверяется по емейлу
user4.getCurrentSubscription().hasPremiumAccess(); // true
user4.getCurrentSubscription().hasProfessionalAccess(); // true