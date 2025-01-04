const removeFromArray = function(arr, ...removes) {
    return arr.filter((n) => !removes.includes(n));
};

// Do not edit below this line
module.exports = removeFromArray;
