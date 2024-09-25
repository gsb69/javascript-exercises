const findTheOldest = function(people) {
    let diff=0,n=people.length,result;
    for(let i=0;i<n;i++){
        if(!(people[i].yearOfDeath))people[i].yearOfDeath=2024;
        let age=(people[i].yearOfDeath-people[i].yearOfBirth)
        if(age>diff){
            result=people[i];
            diff=age;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
