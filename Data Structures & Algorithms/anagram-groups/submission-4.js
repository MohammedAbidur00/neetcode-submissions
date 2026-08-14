class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        const arr = [];

        for (let x = 0; x < strs.length; x++) {
            let sortedStr = strs[x].split("").sort().join("")
            if (map.has(sortedStr)) {
                map.get(sortedStr).push(x);
            } else {
                map.set(sortedStr, [x]);
            } 
        }

        for (const [key, value] of map) {
            let tempArr = []
            let indices = value
            for (let x = 0; x < indices.length; x++) {
                let index = value[x]
                tempArr.push(strs[index])
            }
            arr.push(tempArr)
        }

        return arr
    }
}
