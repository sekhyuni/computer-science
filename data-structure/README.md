# Data Structure

* [Array](#array)
* [HashTable](#hash-table)
* [Stack](#stack)
* [Queue](#queue)
* [Heap](#heap)
* [Graph](#graph)
* [Tree](#tree)
* [Linked List](#linked-list)

## Array
- An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together. This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array).
- Time Complexity:
    |Data Structure|Access|Search|Insertion|Deletion|
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

[메인으로 가기](https://github.com/sekhyuni/frontend-basic-concept)</br>
[맨 위로 가기](#data-structure)
## Hash Table
- Hashing is a technique or process of mapping keys, and values into the hash table by using a hash function. It is done for faster access to elements. The efficiency of mapping depends on the efficiency of the hash function used.
- HashTable vs HashMap
    - HashTable은 Thread-Safe하고, HashMap은 그렇지 않다. 따라서, Multi-Thread 환경이 아니라면, HashTable은 HashMap보다 성능이 떨어진다는 단점이 있음
- V8 Engine에서 Map은 Hash Table로 구현되어 있음
- V8 Engine에서 Object는 Hash Table로 구현되어 있지 않은 것으로 알려짐
- Time Complexity:
    |Data Structure|Access|Search|Insertion|Deletion|
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

[메인으로 가기](https://github.com/sekhyuni/frontend-basic-concept)</br>
[맨 위로 가기](#data-structure)
## Stack
- Stack is a linear data structure that follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).
- Time Complexity:
    |Data Structure|Access|Search|Insertion|Deletion|
    |:---:|:---:|:---:|:---:|:---:|
    |Stack|O(n)|O(n)|O(1)|O(1)|
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

[메인으로 가기](https://github.com/sekhyuni/frontend-basic-concept)</br>
[맨 위로 가기](#data-structure)
## Queue
- A Queue is defined as a linear data structure that is open at both ends and the operations are performed in First In First Out (FIFO) order.
- Time Complexity:
    |Data Structure|Access|Search|Insertion|Deletion|
    |:---:|:---:|:---:|:---:|:---:|
    |Stack|O(n)|O(n)|O(1)|O(1)|
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

[메인으로 가기](https://github.com/sekhyuni/frontend-basic-concept)</br>
[맨 위로 가기](#data-structure)
## Heap
- Update later..

[메인으로 가기](https://github.com/sekhyuni/frontend-basic-concept)</br>
[맨 위로 가기](#data-structure)
## Graph
- Update later..

[메인으로 가기](https://github.com/sekhyuni/frontend-basic-concept)</br>
[맨 위로 가기](#data-structure)
## Tree
- Update later..

[메인으로 가기](https://github.com/sekhyuni/frontend-basic-concept)</br>
[맨 위로 가기](#data-structure)
## Linked List
- Update later..

[메인으로 가기](https://github.com/sekhyuni/frontend-basic-concept)</br>
[맨 위로 가기](#data-structure)