const findTheOldest = function(people) {
    return people.reduce((oldest, cur) => {
        this_year = new Date().getFullYear()
        cur_age = (cur.yearOfDeath ?? this_year )- cur.yearOfBirth;
        oldest_age = (oldest.yearOfDeath ?? this_year) - oldest.yearOfBirth;
        return oldest_age > cur_age ? oldest : cur
    });
};

// Do not edit below this line
module.exports = findTheOldest;
