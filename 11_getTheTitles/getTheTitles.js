const getTheTitles = function(arrays) {
    let result=[];
    for(let i=0;i<arrays.length;i++){
        result.push(arrays[i].title);
    }
    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
