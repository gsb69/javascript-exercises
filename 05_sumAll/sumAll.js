const sumAll = function(begin,end) {
    let sum=0;
    if(begin<0 || end<0)return 'ERROR';
    if(!Number.isInteger(begin) || !Number.isInteger(end))return 'ERROR';
    if(begin>end){
        let temp=begin;
        begin=end;
        end=temp;
    }
    while(begin<=end){
        sum+=begin;
        begin++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
