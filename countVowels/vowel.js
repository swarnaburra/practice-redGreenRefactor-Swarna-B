function countVowels(str) {
    let count = 0;
    const vowels = "aeiou";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase()) ){
            count++ ;
        }

    }
    return count;
}

module.exports = {countVowels};