var num = 123;
var reverseNum = 0;
var numMode = 0;
while(num>0){
    numMode = num%10;
    reverseNum = reverseNum *10 + numMode;
    num = parseInt(num/10);
}
console.log(reverseNum);