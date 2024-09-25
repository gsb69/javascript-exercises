const repeatString = function(name,times) {
    let s='';
    if(times<0)return 'ERROR'
    for(let i=0;i<times;i++){
        s+=name;
    }
    return s;
};

// Do not edit below this line
module.exports = repeatString;
