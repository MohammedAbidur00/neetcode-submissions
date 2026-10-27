class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix = [1];
        const suffix = [1];
        const final = [];

        let productP = prefix[0]
        for (let x = 0; x < nums.length; x++) {
            prefix[x] = productP;
            productP *= nums[x];
        }

        let productS = suffix[0];
        for (let x = nums.length - 1; x >= 0; x--) {
            suffix[x] = productS;
            productS *= nums[x];
        }

        for (let x = 0; x < nums.length; x++) {
            final[x] = prefix[x] * suffix[x]
        }

        console.log(prefix, suffix)

        return final
    }
}
