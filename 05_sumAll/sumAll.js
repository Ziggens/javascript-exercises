const sumAll = function(start, fin) {
    if (start < 0 || fin < 0 || !Number.isInteger(start) || !Number.isInteger(fin)) return 'ERROR';
    if (fin < start) [fin, start] = [start, fin];

    total = 0
    for(let i = start; i <= fin; i ++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
