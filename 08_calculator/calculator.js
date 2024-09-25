const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(arrays) {
  let sum=0;
	for(let i=0;i<arrays.length;i++){
    sum+=arrays[i];
  }
  return sum;
};

const multiply = function(arrays) {
  let pro=1;
  for(let i=0;i<arrays.length;i++){
    pro*=arrays[i];
  }
  return pro;
};

const power = function(base,power) {
	return base**power;
};

const factorial = function(number) {
	if(number===1 || number===0)return 1;
  let result=1;
  for(let i=2;i<=number;i++){
    result*=i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
