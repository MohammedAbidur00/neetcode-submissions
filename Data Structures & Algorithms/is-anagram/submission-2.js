class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const counts1 = new Map();
        const counts2 = new Map();

        if (s.length !== t.length) {
            return false
        }

        for (let x = 0; x < s.length; x++) {
            if (counts1.has(s[x])) {
                counts1.set(s[x], counts1.get(s[x]) + 1)
            } else {
                counts1.set(s[x], 1)
            }
            if (counts2.has(t[x])) {
                counts2.set(t[x], counts2.get(t[x]) + 1)
            } else {
                counts2.set(t[x], 1)
            }
        }

        for (const [key, value] of counts1) {
            if (counts1.get(key) !== counts2.get(key)) {
                return false
            }
        }

        return true
    }
}
