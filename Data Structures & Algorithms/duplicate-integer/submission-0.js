class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map();

        for (let x = 0; x < nums.length; x++) {
            if (map.has(nums[x])) {
                return true
            }
            map.set(nums[x], x)
        }

        return false
    }
}
