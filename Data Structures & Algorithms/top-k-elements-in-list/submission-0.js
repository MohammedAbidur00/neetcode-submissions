class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const counts = new Map();
        const arr = [];
        let count = 0;

        for (let x = 0; x < nums.length; x++) {
            if (counts.has(nums[x])) {
                counts.set(nums[x], counts.get(nums[x]) + 1)
            } else {
                counts.set(nums[x], 1)
            }
        }

        const sortedMap = [...counts.entries()].sort((a,b) => b[1]-a[1])

        for (const [key, value] of sortedMap) {
            if (count < k) {
                arr.push(key);
            } else {
                break
            }
            count++
        }

        return arr
    }
}
