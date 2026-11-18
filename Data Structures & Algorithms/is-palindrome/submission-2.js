class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const validChars = /^[a-zA-Z0-9]/;
        let arr = [];
        s = s.toLowerCase();
        for (let x = 0; x < s.length; x++) {
            if (validChars.test(s[x])) {
                arr.push(s[x])
            }
        }
        for (let x = 0; x < arr.length / 2; x++) {
            if (arr[x] !== arr[arr.length - x - 1]) {
                return false;
            }
        }
        return true
    }
}
