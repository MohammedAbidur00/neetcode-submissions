class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 1 && strs[0] === "") return "zeroChars";
        if (strs.length === 0) return "zeroStrs";
        if (strs.length > 0) return strs.join("∂")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === "zeroChars") return [""];
        if (str === "zeroStrs") return [];
        if (str.length > 0) return str.split("∂")
    }
}
