function solution(k, tangerine) {
    let min = 1;

    const objOfTangerine = {};
    for (let i = 0, len = tangerine.length; i < len; i++) {
        if (objOfTangerine.hasOwnProperty(tangerine[i])) {
            objOfTangerine[tangerine[i]]++;
        } else {
            objOfTangerine[tangerine[i]] = 1;
        }
    }

    const listOfTangerine = Object.entries(objOfTangerine);
    listOfTangerine.sort((a, b) => b[1] - a[1]);
    for (let i = 0, len = listOfTangerine.length; i < len, k > listOfTangerine[i][1]; i++) {
        k -= listOfTangerine[i][1];
        min++;
    }

    return min;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]));

function solutionUseHashTable(k, tangerine) {
    let min = 1;

    const hashTableOfTangerine = new Map();
    for (let i = 0, len = tangerine.length; i < len; i++) {
        if (hashTableOfTangerine.has(tangerine[i])) {
            hashTableOfTangerine.set(tangerine[i], hashTableOfTangerine.get(tangerine[i]) + 1);
        } else {
            hashTableOfTangerine.set(tangerine[i], 1);
        }
    }

    const listOfTangerine = [...hashTableOfTangerine];
    listOfTangerine.sort((a, b) => b[1] - a[1]);
    for (let i = 0, len = listOfTangerine.length; i < len, k > listOfTangerine[i][1]; i++) {
        k -= listOfTangerine[i][1];
        min++;
    }

    return min;
}

console.log(solutionUseHashTable(6, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solutionUseHashTable(4, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solutionUseHashTable(2, [1, 1, 1, 1, 2, 2, 2, 3]));