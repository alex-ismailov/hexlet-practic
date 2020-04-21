/* Двоичное дерево поиска состоит из узлов, каждый из которых содержит значение ключа и два поддерева (левое и правое),
которые в свою очередь также являются двоичными деревьями. Правильное дерево не содержит повторяющихся ключей, и
для каждого узла гарантируется, что в левом поддереве все значения меньше текущего, а в правом — больше.

     9
    / \
   /   \
  4    17
 / \     \
3   6    22
   / \   /
  5   7 20

Реализуйте и экспортируйте по умолчанию класс, который реализует представление узла.
Конструктор класса принимает на вход значение ключа (число), и двух детей (необязательные аргументы),
которые в свою очередь также являются узлами.

Класс должен содержать методы:
Геттеры:
-> getKey() — возвращает ключ.
-> getLeft(), getRight() — возвращают соответственно левого и правого ребёнка.
Если ребёнок в узле отсутствует, геттер возвращает null.

-> search(key) — выполняет поиск узла в правильном двоичном дереве по ключу и возвращает узел.
Если узел не найден, возвращается null.
 */

class Node {
  constructor(key = null, leftBranch = null, rightBranch = null) {
    this.key = key;
    this.leftBranch = leftBranch;
    this.rightBranch = rightBranch;
  }

  getKey() {
    return this.key;
  }

  getLeft() {
    return this.leftBranch;
  }

  getRight() {
    return this.rightBranch;
  }

  search(key, currentNode = this) {
    if (!currentNode) {
      return null;
    }
    if (currentNode.getKey() === key) {
      return currentNode;
    }
    return key < currentNode.getKey()
      ? this.search(key, currentNode.getLeft())
      : this.search(key, currentNode.getRight());
  }
}

/* testing */
const tree0 = new Node(9, new Node(4), new Node(17));
console.log(tree0.getKey()); // toBe(9);
console.log(tree0.getLeft().getKey()); // toBe(4);
console.log(tree0.getRight().getKey()); // toBe(17);

const tree02 = new Node();
console.log(tree02.getKey()); // toBeNull();
console.log(tree02.getLeft()); // toBeNull();
console.log(tree02.getRight()); // toBeNull();
console.log('------------------\n');


console.log('search');
const expected1 = new Node(5);
const expected2 = new Node(22, null, new Node(20));
const tree = new Node(9,
  new Node(4,
    new Node(3),
    new Node(6,
      expected1,
      new Node(7))),
  new Node(17,
    null,
    expected2));

console.log(tree.search(5)); // toBe(expected1);
console.log(tree.search(22)); // toBe(expected2);
console.log(tree.search(35)); // toBeNull();
console.log(tree.search(2)); // toBeNull();
console.log('------------------\n');

console.log('test search algorithm');
const tree2 = new Node(9,
  new Node(4,
    new Node(6,
      new Node(5),
      new Node(7)),
    new Node(3)),
  new Node(17,
    null,
    new Node(22,
      null,
      new Node(20))));

console.log(tree2.search(5)); // toBeNull();
console.log(tree2.search(7)); // toBeNull();
console.log(tree2.search(6)); // toBeNull();
console.log(tree2.search(4).getKey()); // toBe(4);
console.log(tree2.search(22).getKey()); // toBe(22);
console.log('------------------\n');
