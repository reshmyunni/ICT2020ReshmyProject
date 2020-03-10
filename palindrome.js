var num = 5231;
var rev = 0;
var rem = 0;
var palNum = num;

while(num>0){
    rem = num%10;
    rev = rev*10+rem;
    num = parseInt(num/10);
}
if(rev == palNum){
    console.log("Number is a palindrome");

}else{
    console.log("Number not a palindrome");
}