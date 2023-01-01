// 1. 문제 이해
// 1-1. 입력 타입
//      - genres: string[]
//      - plays: number[]
// 1-2. 출력 타입
//      - album: number[]
// 1-3. 입력값 범위
//      - 1 <= genres.length <= 10,000
//      - 1 <= plays.length <= 10,000
//      - 1 <= new Set(genres).size <= 100
// 1-4. 제약 사항
//      - 총 재생 횟수가 많은 장르부터 수록
//      - 장르 내에서 재생 횟수가 많은 노래부터 수록
//      - 장르 내에서 재생 횟수가 같으면 고유 번호가 낮은 노래부터 수록
//      - 장르별 최대 2개만 수록
//      - 장르가 1개면 하나의 곡만 선택
//      - 모든 장르는 재생된 횟수가 다름
// 2. 구현 방법
// 2-1. Map에 장르를 key로 하고 총 재생 횟수를 value로 하는 데이터를 저장 후 정렬
// 2-2. Map에 장르를 key로 하고 고유 번호, 재생 횟수를 value로 하는 데이터를 저장
// 2-3. 정렬된 장르 수만큼 Loop를 돌면서 장르 내에서 재생 횟수가 많은 노래부터 수록, 재생 횟수가 같으면 고유 번호가 낮은 노래부터 수록, 장르별 최대 2개만 수록
function solution(genres, plays) {
    const album = [];
    const mapOfGenres = new Map();

    // 2-1. Map에 장르를 key로 하고 총 재생 횟수를 value로 하는 데이터를 저장
    // Time Complexity: O(n)
    genres.forEach((genre, idx) => {
        if (mapOfGenres.has(genre)) {
            mapOfGenres.set(genre, mapOfGenres.get(genre) + plays[idx]);
        } else {
            mapOfGenres.set(genre, plays[idx]);
        }
    });

    // 2-1. 정렬
    // Time Complexity: O(mlogm)
    const sortedListOfGenre = [...mapOfGenres];
    sortedListOfGenre.sort((a, b) => b[1] - a[1]);

    // 2-2. Map에 장르를 key로 하고 고유 번호, 재생 횟수를 value로 하는 데이터를 저장
    // Time Complexity: O(n)
    const mapOfMusics = new Map();
    plays.forEach((play, idx) => {
        if (mapOfMusics.has(genres[idx])) {
            mapOfMusics.set(genres[idx], [...mapOfMusics.get(genres[idx]), { number: idx, playCount: play }]);
        } else {
            mapOfMusics.set(genres[idx], [{ number: idx, playCount: play }]);
        }
    });

    // 2-3. 정렬된 장르 수만큼 Loop를 돌면서 장르 내에서 재생 횟수가 많은 노래부터 수록, 재생 횟수가 같으면 고유 번호가 낮은 노래부터 수록, 장르별 최대 2개만 수록
    // Time Complexity: O(m x klogk)
    sortedListOfGenre.forEach(genre => {
        const listOfMusicAboutOneGenre = mapOfMusics.get(genre[0]);
        listOfMusicAboutOneGenre.sort((a, b) => {
            if (a.playCount === b.playCount) {
                return a.number - b.number;
            }

            return b.playCount - a.playCount;
        });
        album.push(...listOfMusicAboutOneGenre.slice(0, 2).map(music => music.number));
    });

    // Total Time Complexity: O(n) + O(mlogm) + O(n) + O(m x klogk) = O(2n + m(logm + klogk))
    return album;
}

console.log(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]));