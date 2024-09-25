const palindromes = function (sentence) {
    let word="";
    sentence=sentence.toLowerCase();
    for(let i=0;i<sentence.length;i++){
        if((sentence[i]>='0' && sentence[i]<='9')||(sentence[i]>='a' && sentence[i]<='z')){
            word+=sentence[i];
        }
    }
    let low=0,high=word.length-1;
    while(low<high){
        if(word[low++]!=word[high--])return false;
    }
    return true;

};

// Do not edit below this line
module.exports = palindromes;
