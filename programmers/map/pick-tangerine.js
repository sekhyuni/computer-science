function solution(k, tangerine) {
    let min = 1;

    const mapOfTangerineSize = {};
    for (let i = 0, len = tangerine.length; i < len; i++) {
        if (mapOfTangerineSize[tangerine[i]] === undefined) {
            mapOfTangerineSize[tangerine[i]] = 0;
        }
        mapOfTangerineSize[tangerine[i]]++;
    }

    const listOfTangerineSize = Object.entries(mapOfTangerineSize);
    listOfTangerineSize.sort((a, b) => b[1] - a[1]);
    for (let i = 0, len = listOfTangerineSize.length; i < len, k > listOfTangerineSize[i][1]; i++) {
        k -= listOfTangerineSize[i][1];
        min++;
    }

    return min;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]));