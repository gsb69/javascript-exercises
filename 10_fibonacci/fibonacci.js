const fibonacci = function(position) {
    let first=1,second=1;
    if(position<0)return 'OOPS';
    if(position==0)return 0;
    if(position==1 || position==2)return first;
    for(let i=2;i<position;i++){
        let temp=first+second;
        first=second;
        second=temp;
    }
    return second;
};

// Do not edit below this line
module.exports = fibonacci;
