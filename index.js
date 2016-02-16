
function calcTax(sum){
var workingSum = 0;

  if(sum<=10){
    workingSum = sum/10;
  }
  if(sum>=11&&sum < 21){
    workingSum = 1+(sum-10)*(7/100);
  }
  if(sum>=21&&sum<31){
      workingSum = 1.7+(sum-20)*(5/100);
  }
  if(sum>31){
      workingSum = 2.2+(sum-30)*(3/100);
  }
  return workingSum;
}
