// - operations 배열을 순회하면서 operations[i].split(' ')[0]의 값에 따라 priority queue에 연산 수행
// - 연산이 끝났을 때, priority queue의 rear, front 함수 반환값을 배열에 담아서 반환
// [입력]
// - operations: string[], 1 <= operations.length <= 10^6
// [출력]
// - listOfMaxAndMinOfPriorityQueue: number[], listOfMaxAndMinOfPriorityQueue.length === 2
class QElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  add(element, priority) {
    const qElement = new QElement(element, priority);
    let contain = false;

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > qElement.priority) {
        this.items.splice(i, 0, qElement);
        contain = true;
        break;
      }
    }

    if (!contain) {
      this.items.push(qElement);
    }
  }

  removeFront() {
    if (this.isEmpty()) return 'Underflow';
    return this.items.shift();
  }

  removeRear() {
    if (this.isEmpty()) return 'Underflow';
    return this.items.pop();
  }

  front() {
    if (this.isEmpty()) return 'No elements in Queue';
    return this.items[0];
  }

  rear() {
    if (this.isEmpty()) return 'No elements in Queue';
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printPQueue() {
    let str = '';
    for (let i = 0; i < this.items.length; i++)
      str += this.items[i].element + ' ';
    return str;
  }
}

function solution(operations) {
  const priorityQueue = new PriorityQueue();

  for (let i = 0; i < operations.length; i++) {
    const [operation, value] = operations[i].split(' ');

    if (operation === 'I') {
      priorityQueue.add(value, Number(value));
    } else {
      if (value === '1') {
        priorityQueue.removeRear();
      } else {
        priorityQueue.removeFront();
      }
    }
  }

  return [
    priorityQueue.rear().priority || 0,
    priorityQueue.front().priority || 0,
  ];
}

console.log(
  solution(['I 16', 'I -5643', 'D -1', 'D 1', 'D 1', 'I 123', 'D -1'])
);
console.log(
  solution([
    'I -45',
    'I 653',
    'D 1',
    'I -642',
    'I 45',
    'I 97',
    'D 1',
    'D -1',
    'I 333',
  ])
);
