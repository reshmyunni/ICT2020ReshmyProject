function reverse(num){
    let rev = 0;
    let rem = 0;
    while (num>0){
        rem = num%10;
        rev = rev*10+rem;
        num = parseInt(num/10);
    }
    return rev;
}

function checkPalindrome(num,rev){
    if(num==rev){
        console.log("Palindrome");
    }else{
        console.log("Not Palindrome");
    }
}
let num = 123;
let revNum = reverse(num);
checkPalindrome(num,revNum);