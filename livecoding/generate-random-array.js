// 1. 문제 이해
// 1-1. 입력 타입
//      - n: number
// 1-2. 출력 타입
//      - randomArray: number[]
// 1-3. 입력 범위
//      - 1 <= n <= 150, 자연수
// 1-4. 출력 범위
//      - -100 <= el <= 100, 랜덤 정수
//      - randomArray.length === 2n + 1
// 1-5. 제약 사항
//      - el은 Math.random()을 사용해서 만들기
// 2. 구현 방식
// 2-1. 2n + 1 길이만큼 Loop를 돌면서, Math.random()이 나오는 값을 확인하면서 -100 <= el <= 100, 랜덤 정수를 만족하는 값을 randomArray에 저장
const generateRandomArray = (n) => {
    // console.log(Math.random()); 찍어보고 범위 확인

    const randomArray = [];
    for (let i = 0; i < 2 * n + 1; i++) {
        // const el = Math.floor((Math.random() * 100)) * (Math.random() < 0.5 ? -1 : 1);
        const el = Math.floor(Math.random() * 200) - 100;
        randomArray.push(el);
    }

    return randomArray;
};

// console.log(generateRandomArray(150));

// 구현 방식 : hashTable을 사용해서 각 값을 key로 하고 value는 0으로 하는 데이터를 저장하면서 데이터를 넣을 때마다 중복된 key가 있는지 확인하면서 저장
// 입력 범위의 제약 사항이 추가되어야 할 것 같음 1 <= n <= 99
const generateRandomArrayOfNotDuplicated = (n) => {
    const randomArray = [];
    const hashTable = new Map();
    for (let i = 0; i < 2 * n + 1; i++) {
        let el = Math.floor(Math.random() * 200) - 100;
        let isDuplicated = hashTable.has(el);
        while (isDuplicated) {
            el = Math.floor(Math.random() * 200) - 100;
            isDuplicated = hashTable.has(el);
        }
        randomArray.push(el);
        hashTable.set(el, 0);
    }

    return randomArray;
};

// console.log(generateRandomArrayOfNotDuplicated(99));

// 구현 방식 : 배열에 데이터를 추가할 때, 마지막 원소를 넣기 전까지는 모두 2번씩 넣기
const generateRandomArrayOfDuplicatedExceptOnlyOneEl = (n) => {
    const randomArray = [];
    const hashTable = new Map();
    for (let i = 0; i < 2 * n + 1; i++) {
        let el = Math.floor(Math.random() * 200) - 100;
        let isDuplicated = hashTable.has(el);
        while (isDuplicated) {
            el = Math.floor(Math.random() * 200) - 100;
            isDuplicated = hashTable.has(el);
        }
        randomArray.push(el);
        if (i !== 2 * n) {
            randomArray.push(el);
        }
        hashTable.set(el, 0);
    }

    return randomArray;
};

// console.log(generateRandomArrayOfDuplicatedExceptOnlyOneEl(99));

// 랜덤한 위치를 가진다는 것은 원소를 모두 배열에 저장한 뒤에 랜덤하게 정렬하면 되는 것인가요?
// 현재 마지막으로 구현된 함수로 정렬만 하면 되는 것인가요?
// 그렇다고 한다면, in-place 정렬 방식인 버블정렬을 통해서 정렬해보겠습니다.
const generateSortedRandomArrayOfDuplicatedExceptOnlyOneEl = (n) => {
    const randomArray = [];
    const hashTable = new Map();
    for (let i = 0; i < 2 * n + 1; i++) {
        let el = Math.floor(Math.random() * 200) - 100;
        let isDuplicated = hashTable.has(el);
        while (isDuplicated) {
            el = Math.floor(Math.random() * 200) - 100;
            isDuplicated = hashTable.has(el);
        }
        randomArray.push(el);
        if (i !== 2 * n) {
            randomArray.push(el);
        }
        hashTable.set(el, 0);
    }

    // 빠른 검증을 위해 반환하지 않고, 로그를 찍기
    console.log(randomArray);

    bubbleSort(randomArray);
    console.log(randomArray);

    bubbleSort(randomArray);
    console.log(randomArray);

    bubbleSort(randomArray);
    console.log(randomArray);
    // return randomArray;
};

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (Math.random() < 0.5) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    // [2, 3, 1]
    // i: 0, 1
    // j: 0, 1 / 0
    // 1번째 바깥 루프돌면, 가장 큰 수가 가장 마지막으로 정렬
    // 2번째 바깥 루프돌면, 두번째 큰 수가 가장 마지막에서 두번째로 정렬
    // ..
    // (arr.length - 1)번째 바깥 루프돌면, 가장 작은 수가 가장 처음으로 정렬

    return arr;
}

generateSortedRandomArrayOfDuplicatedExceptOnlyOneEl(3);