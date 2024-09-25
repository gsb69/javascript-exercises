const removeFromArray = function(arrays,...nums) {
    for(const num of nums){
        arrays=arrays.filter(i=>i!==num);

    }
    return arrays;
};

// Do not edit below this line
module.exports = removeFromArray;
