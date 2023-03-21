# Data Structure

* [Array](#array)
* [Stack](#stack)
* [Queue](#queue)
* [Linked List](#linked-list)
* [Hash Table](#hash-table)
* [Graph](#graph)
* [Tree](#tree)
* [Heap](#heap)

## Array
- [선형 구조] 배열은 연속된 메모리 공간에 데이터가 순차적으로 저장된 구조
- 특징
    1. 대부분의 프로그래밍 언어에서 같은 타입의 데이터를 저장 (JavaScript의 경우 다른 타입도 가능. JavaScript의 배열은 Hash Table로 구현된 객체이기 때문)
    1. 배열의 첫번째 요소의 메모리 위치에 오프셋을 추가하여 각 요소의 위치를 쉽게 계산할 수 있음
- 시간 복잡도
    |Data Structure|접근|검색|삽입|제거|
    |:---:|:---:|:---:|:---:|:---:|
    |Array|O(1)|O(n)|O(n)|O(n)|
    ```javascript
        const array = [];
        console.time('[Array] Insertion Time Complexity is O(n)');
        for (let i = 0; i < 50000; i++) {
            array.splice(i, 0, i);
        }
        console.timeEnd('[Array] Insertion Time Complexity is O(n)');
        console.time('[Array] Search Time Complexity is O(n)');
        for (let i = 0; i < 50000; i++) {
            if (array.includes(i)) { }
        }
        console.timeEnd('[Array] Search Time Complexity is O(n)');
        console.time('[Array] Deletion Time Complexity is O(n)');
        for (let i = 0; i < 50000; i++) {
            array.splice(0, 1);
        }
        console.timeEnd('[Array] Deletion Time Complexity is O(n)');
    ```

[메인으로 가기](https://github.com/sekhyuni/computer-science)</br>
[맨 위로 가기](#data-structure)
## Stack
- [선형 구조] 후입선출되는 방식의 자료구조이며, Array 또는 Linked List를 통해서 구현 가능
- 구현 (Array 기반)
    ```javascript
    // 무엇을 구현할 것인가? push(item), pop(), peek(), isEmpty(), printStack()
    class Stack {
        constructor() {
            this.items = [];
        }

        push(element) {
            this.items.push(element);
        }

        pop() {
            if (this.items.length === 0) {
                return 'underflow';
            }
            return this.items.pop();
        }

        peek() {
            if (this.items.length === 0) {
                return 'No Elements in Stack';
            }
            return this.items[this.items.length - 1];
        }

        isEmpty() {
            return this.items.length === 0;
        }

        printStack() {
            let str = '';
            for (let i = 0; i < this.items.length; i++) {
                str += this.items[i] + ' ';
            }
            return str;
        }
    }
    ```
- 시간 복잡도
    |Data Structure|접근|검색|삽입|제거|
    |:---:|:---:|:---:|:---:|:---:|
    |Stack|O(1)|O(n)|O(1)|O(1)|
    ```javascript
        const stack = [];
        console.time('[Stack] Insertion Time Complexity is O(1)');
        for (let i = 0; i < 50000; i++) {
            stack.push(i);
        }
        console.timeEnd('[Stack] Insertion Time Complexity is O(1)');
        console.time('[Stack] Search Time Complexity is O(n)');
        for (let i = 0; i < 50000; i++) {
            if (stack.includes(i)) { }
        }
        console.timeEnd('[Stack] Search Time Complexity is O(n)');
        console.time('[Stack] Deletion Time Complexity is O(1)');
        for (let i = 0; i < 50000; i++) {
            stack.pop();
        }
        console.timeEnd('[Stack] Deletion Time Complexity is O(1)');
    ```

[메인으로 가기](https://github.com/sekhyuni/computer-science)</br>
[맨 위로 가기](#data-structure)
## Queue
- [선형 구조] 선입선출되는 방식의 자료구조이며, Array 또는 Linked List를 통해서 구현 가능
- 구현 (Array 기반)
    ```javascript
    // 무엇을 구현할 것인가? enqueue(item), dequeue(), peek(), isEmpty(), printQueue()
    class Queue {
        constructor() {
            this.items = [];
        }

        enqueue(element) {
            this.items.push(element);
        }

        dequeue() {
            if (this.items.length === 0) {
                return 'underflow';
            }
            return this.items.shift();
        }

        peek() {
            if (this.items.length === 0) {
                return 'No Elements in Queue';
            }
            return this.items[0];
        }

        isEmpty() {
            return this.items.length === 0;
        }

        printQueue() {
            let str = '';
            for (let i = 0; i < this.items.length; i++) {
                str += this.items[i] + ' ';
            }
            return str;
        }
    }
    ```
- 시간 복잡도
    |Data Structure|접근|검색|삽입|제거|
    |:---:|:---:|:---:|:---:|:---:|
    |Queue|O(1)|O(n)|O(1)|O(1)|
    ```javascript
        const queue = [];
        console.time('[Queue] Insertion Time Complexity is O(1)');
        for (let i = 0; i < 50000; i++) {
            queue.push(i); // equal enqueue
        }
        console.timeEnd('[Queue] Insertion Time Complexity is O(1)');
        console.time('[Queue] Search Time Complexity is O(n)');
        for (let i = 0; i < 50000; i++) {
            if (queue.includes(i)) { }
        }
        console.timeEnd('[Queue] Search Time Complexity is O(n)');
        console.time('[Queue] Deletion Time Complexity is O(1)');
        for (let i = 0; i < 50000; i++) {
            queue.shift(); // Actually, Time Complexity of shift is not O(1), but O(n). However, Time Complexity: dequeue < shift < splice. So, sometimes using shift is no problem
        }
        console.timeEnd('[Queue] Deletion Time Complexity is O(1)');
    ```

[메인으로 가기](https://github.com/sekhyuni/computer-science)</br>
[맨 위로 가기](#data-structure)
## Linked List
- [선형 구조]
- Update later..

[메인으로 가기](https://github.com/sekhyuni/computer-science)</br>
[맨 위로 가기](#data-structure)
## Hash Table
- [비선형 구조] key/value 쌍으로 데이터가 저장되는 자료구조이며, key를 입력받는 Hash 함수를 통해 index 값을 얻어와서 bucket에 저장함
- 해시 충돌
    1. 서로 다른 key가 동일한 index로 해시되는 것을 말하며, bucket의 크기가 N인 경우 1/N의 확률로 해시 충돌이 발생함
- 해시 충돌 해결 방법
    1. 분리 연결 방식
        - key/value 쌍이 bucket의 동일한 index로 해시되는 방식이며, Linked List 형식으로 저장하는 방식
        - 단점: Linked List 크기가 커지면 시간 복잡도가 그만큼 증가
    1. 개방 주소 방식
        - 데이터를 삽입하려는 bucket이 이미 사용중인 경우 다른 bucket을 정해서 그 bucket에 데이터를 저장하는 방식
        - 선형 탐색, 제곱 탐색, 이중 해시와 같은 방법으로 해결
        - 단점: 2차 충돌 발생 가능성 존재
- HashTable vs HashMap
    - HashTable은 Thread-Safe하고, HashMap은 그렇지 않음. 따라서, Multi-Thread 환경이 아니라면, HashTable은 HashMap보다 성능이 떨어진다는 단점이 있음
- 구현
    ```javascript
    // 무엇을 구현할 것인가? hash(key), setItem(key, value), getItem(key)
    class HashTable {
        constructor(size = 50) {
            this.buckets = new Array(size);
            this.size = size;
        }

        hash(key) {
            return key.toString().length % this.size;
        }

        setItem(key, value) {
            const index = this.hash(key);

            if (!this.buckets[index]) {
                this.buckets[index] = [];
            }

            this.buckets[index].push([key, value]);

            return index;
        }

        getItem(key) {
            const index = this.hash(key);

            if (!this.buckets[index]) return null;

            for (const bucket of this.buckets[index]) {
                if (bucket[0] === key) {
                    return bucket[1];
                }
            }
        }
    }
    ```
- 시간 복잡도
    |Data Structure|접근|검색|삽입|제거|
    |:---:|:---:|:---:|:---:|:---:|
    |Hash Table|N/A|O(1)|O(1)|O(1)|
    ```javascript
        const hashTableByObject = {};
        console.time('[Hash Table By Object] Insertion Time Complexity is O(1)');
        for (let i = 0; i < 50000; i++) {
            hashTableByObject[i] = i;
        }
        console.timeEnd('[Hash Table By Object] Insertion Time Complexity is O(1)');
        console.time('[Hash Table By Object] Search Time Complexity is O(1)');
        for (let i = 0; i < 50000; i++) {
            if (hashTableByObject.hasOwnProperty(i)) { }
        }
        console.timeEnd('[Hash Table By Object] Search Time Complexity is O(1)');
        console.time('[Hash Table By Object] Deletion Time Complexity is O(1)');
        for (let i = 0; i < 50000; i++) {
            delete hashTableByObject[i];
        }
        console.timeEnd('[Hash Table By Object] Deletion Time Complexity is O(1)');

        const hashTableByMap = new Map();
        console.time('[Hash Table By Map] Insertion Time Complexity is O(1)');
        for (let i = 0; i < 50000; i++) {
            hashTableByMap.set(i, i);
        }
        console.timeEnd('[Hash Table By Map] Insertion Time Complexity is O(1)');
        console.time('[Hash Table By Map] Search Time Complexity is O(1)');
        for (let i = 0; i < 50000; i++) {
            if (hashTableByMap.has(i)) { }
        }
        console.timeEnd('[Hash Table By Map] Search Time Complexity is O(1)');
        console.time('[Hash Table By Map] Deletion Time Complexity is O(1)');
        for (let i = 0; i < 50000; i++) {
            hashTableByMap.delete(i);
        }
        console.timeEnd('[Hash Table By Map] Deletion Time Complexity is O(1)');
    ```

[메인으로 가기](https://github.com/sekhyuni/computer-science)</br>
[맨 위로 가기](#data-structure)
## Graph
- [비선형 구조]
- Update later..

[메인으로 가기](https://github.com/sekhyuni/computer-science)</br>
[맨 위로 가기](#data-structure)
## Tree
- [비선형 구조]
- Update later..

[메인으로 가기](https://github.com/sekhyuni/computer-science)</br>
[맨 위로 가기](#data-structure)
## Heap
- [비선형 구조]
- Update later..

[메인으로 가기](https://github.com/sekhyuni/computer-science)</br>
[맨 위로 가기](#data-structure)