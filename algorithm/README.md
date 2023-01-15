# Algorithm

* [Binary Search](#binary-search)
* [Sorting](#sorting)
* [Recursion](#recursion)
* [Dynamic Programming](#dynamic-programming)
* [BFS](#bfs)
* [DFS](#dfs)
* [Backtracking](#backtracking)

## Binary Search
- Binary Search is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half. The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n). 
    ```javascript
        const binarySearch = (array, target) => {
            let start = 0;
            let end = array.length - 1;

            while (start <= end) {
                const mid = Math.floor((start + end) / 2);

                if (array[mid] === target) {
                    return mid;
                } else if (array[mid] > target) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            }

            return -1;
        };
    ```

[메인으로 가기](https://github.com/sekhyuni/frontend-basic-concept)</br>
[맨 위로 가기](#algorithm)
## Sorting
- A Sorting Algorithm is used to rearrange a given array or list of elements according to a comparison operator on the elements. The comparison operator is used to decide the new order of elements in the respective data structure.
- stable vs not stable
    - stable 정렬은 중복된 key 값이 있을 때 이를 순서대로 정렬하는 정렬 알고리즘이고, not stable 정렬은 순서대로 정렬되지 않는 정렬 알고리즘
- in-place vs not in-place 
    - in-place 정렬은 원소들의 개수에 비해 충분히 무시할만한 저장 공간만을 더 사용하는 정렬 알고리즘이고, not in-place 정렬은 원소들의 개수에 비례하여 저장 공간을 더 사용하는 정렬 알고리즘
    - stable, in-place 정렬로는 Bubble Sort (Time Complexity: O(n^2), Space Complexity: O(1))가 있음
    - not stable, in-place 정렬로는 Selection Sort (Time Complexity: O(n^2), Space Complexity: O(1))가 있음
    - stable, not in-place 정렬로는 Merge Sort (Time Complexity: O(nlogn), Space Complexity: O(n))가 있음

[메인으로 가기](https://github.com/sekhyuni/frontend-basic-concept)</br>
[맨 위로 가기](#algorithm)
## Recursion
- The process in which a function calls itself directly or indirectly is called recursion and the corresponding function is called a recursive function.

[메인으로 가기](https://github.com/sekhyuni/frontend-basic-concept)</br>
[맨 위로 가기](#algorithm)
## Dynamic Programming
- Update later..

[메인으로 가기](https://github.com/sekhyuni/frontend-basic-concept)</br>
[맨 위로 가기](#algorithm)
## BFS
- Update later..

[메인으로 가기](https://github.com/sekhyuni/frontend-basic-concept)</br>
[맨 위로 가기](#algorithm)
## DFS
- Update later..

[메인으로 가기](https://github.com/sekhyuni/frontend-basic-concept)</br>
[맨 위로 가기](#algorithm)
## Backtracking
- Update later..

[메인으로 가기](https://github.com/sekhyuni/frontend-basic-concept)</br>
[맨 위로 가기](#algorithm)