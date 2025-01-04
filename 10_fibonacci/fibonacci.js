const fibonacci = function(input) {
    let n = parseInt(input);
    if (n < 0) return 'OOPS';
    const memo = [0,1]
    for(let i = 2; i <= n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2];
    }
    return memo[n]
};

// Do not edit below this line
module.exports = fibonacci;
