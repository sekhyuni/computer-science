// 1. 문제 이해
// 1.1 입력
//      - numRows: number, 1 <= numRows <= 30
// 1.2 출력
//      - result: number[][]
// 1.3 요건
//      - 가장 자리는 무조건 1이 들어감
//      - 가장 자리가 아닌 경우 이전 row의 current col-1 + current col 값이 들어감
// 2. 구현 방식
// 2.1 2번째 row까지는 먼저 구해놓는다.
// 2.2 3번째 row부터 규칙에 따라 가장 자리는 1을 넣고, 아닌 경우 이전 row의 current col-1 + current col 값을 넣는다.
const generate = function (numRows) {
    const result = [];
    result.push([1]);
    if (numRows === 1) {
        return result;
    }
    result.push([1, 1]);
    if (numRows === 2) {
        return result;
    }

    // 시간 복잡도: O(n^2)
    for (let i = 2; i < numRows; i++) {
        const currentRow = [];
        for (let j = 0; j < i + 1; j++) {
            if (j === 0 || j === i) {
                currentRow.push(1);
            } else {
                currentRow.push(result[i - 1][j - 1] + result[i - 1][j]);
            }
        }
        result.push(currentRow);
    }

    return result;
};

console.log(generate(5));