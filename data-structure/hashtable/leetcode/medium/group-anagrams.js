/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  const sortedStrToGroupedStrsMap = strs.reduce((acc, str) => {
    const sortedStr = str.split("").sort().join("");

    if (sortedStr in acc) {
      acc[sortedStr].push(str);
    } else {
      acc[sortedStr] = [str];
    }

    return acc;
  }, {});

  return Object.values(sortedStrToGroupedStrsMap);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
