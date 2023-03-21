# Algorithm

* [Binary Search](#binary-search)
* [Sorting](#sorting)
* [Recursion](#recursion)
* [Dynamic Programming](#dynamic-programming)
* [BFS](#bfs)
* [DFS](#dfs)
* [Backtracking](#backtracking)

## Binary Search
- 순서를 판단할 수 있는 어떤 상태의 범위 내에서 길이를 반씩 줄여나가면서 특정 조건에 부합하는 결과값을 도출해내는 것
- 접근 순서
    1. 어떤 상태를 기준으로 탐색할 것인지 확인
    1. 해당 상태의 시작값과 끝값을 start, end에 할당
    1. start와 end가 같아질 때까지 loop를 통해 mid에 중간값을 할당하면서 특정 조건에 부합하는 결과값 도출
        - 특정 조건에 부합하지 않았다면, start에 mid + 1을 할당하거나 end에 mid - 1을 할당
- 예시 코드
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

[메인으로 가기](https://github.com/sekhyuni/computer-science)</br>
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
- 종류
    1. Bubble Sort
        - 서로 인접한 두 요소를 비교해서 정렬하는 방식
        - 구현
            ```javascript
            const unsortedList = [4, 3, 2, 5, 1];

            for (let i = 0; i < unsortedList.length - 1; i++) {
                for (let j = 0; j < unsortedList.length - i + 1; j++) {
                    if (unsortedList[j] > unsortedList[j + 1]) {
                        const temp = unsortedList[j + 1];
                        unsortedList[j + 1] = unsortedList[j];
                        unsortedList[j] = temp;
                    }
                }
            }
            ```


[메인으로 가기](https://github.com/sekhyuni/computer-science)</br>
[맨 위로 가기](#algorithm)
## Recursion
- The process in which a function calls itself directly or indirectly is called recursion and the corresponding function is called a recursive function.

[메인으로 가기](https://github.com/sekhyuni/computer-science)</br>
[맨 위로 가기](#algorithm)
## Dynamic Programming
- 하위 문제의 결과값을 메모이제이션 해두고, 이를 참조해서 상위 문제의 결과값을 도출해내는 것 (Bottom-Up 방식)
- 접근 순서
    1. 어떤 상태를 점화식으로 세울 것인지 확인
    1. 해당 상태를 index로 하는 메모이제이션 배열 선언
    1. 점화식을 풀기 위한 초기값 할당
    1. loop를 통해 값 도출
- 예시 코드
    ```javascript
        const dynamicProgramming = (n) => {
            let fibonacciNumber = 0;
            const memo = Array.from({ length: n + 1 }, (_, idx) => {
                if (idx === 0) {
                return 0;
                } else if (idx === 1) {
                return 1;
                } else {
                return 0;
                }
            });

            for (let i = 2; i <= n; i++) {
                memo[i] = memo[i - 1] + memo[i - 2];
            }

            fibonacciNumber = memo[n];

            return fibonacciNumber;
        };
    ```

[메인으로 가기](https://github.com/sekhyuni/computer-science)</br>
[맨 위로 가기](#algorithm)
## BFS
- Update later..

[메인으로 가기](https://github.com/sekhyuni/computer-science)</br>
[맨 위로 가기](#algorithm)
## DFS
- Update later..

[메인으로 가기](https://github.com/sekhyuni/computer-science)</br>
[맨 위로 가기](#algorithm)
## Backtracking
- Update later..

[메인으로 가기](https://github.com/sekhyuni/computer-science)</br>
[맨 위로 가기](#algorithm)