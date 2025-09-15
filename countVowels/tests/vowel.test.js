const {countVowels} = require(`../vowel.js`);

// Refractor Phase

test("should return vowels in a string", () => {
    expect(countVowels("hello")).toBe(2);   // e, o
    expect(countVowels("world")).toBe(1);   // o
    expect(countVowels("")).toBe(0);        // empty string
    expect(countVowels("AEIOU")).toBe(5);   // uppercase vowels
});




