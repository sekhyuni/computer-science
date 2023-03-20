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
- [선형 구조] Stack is a linear data structure that follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).
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
- [선형 구조] A Queue is defined as a linear data structure that is open at both ends and the operations are performed in First In First Out (FIFO) order.
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
- [비선형 구조] 해시 테이블은 데이터가 Key-Value 쌍으로 저장된 구조
- 특징
    1. Key는 산술 연산을 수행하는 해시 함수의 인자
    1. 해시 함수에서 반환된 해시 값은 해시 테이블에서 Key-Value 쌍의 index
    1. 데이터의 크기에 관계없이 삽입 및 검색이 매우 빠른 자료구조
    1. HashTable vs HashMap
        - HashTable은 Thread-Safe하고, HashMap은 그렇지 않음. 따라서, Multi-Thread 환경이 아니라면, HashTable은 HashMap보다 성능이 떨어진다는 단점이 있음
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