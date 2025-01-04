const palindromes = function (str) {
    const clean_str = str
        .toLowerCase()
        .match(/\w+/g)
        .join('');
    return clean_str === clean_str.split('').reverse().join('')
};

// Do not edit below this line
module.exports = palindromes;
