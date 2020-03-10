let num = 123;

function reverseNum(num){
    let rev = 0;
    let rem = 0;
    while(num>0){
        rem = num%10;
        rev = rev*10+rem;
        num = parseInt(num/10);
    }
    console.log(rev);
}

reverseNum(num);