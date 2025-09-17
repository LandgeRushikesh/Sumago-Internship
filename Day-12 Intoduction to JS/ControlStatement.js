console.log("***************Even Numbers**************************");

let num = 10;
if (num % 2 == 0) {
    console.log(`${num} is Even`);
}
else {
    console.log(`${num} is Odd`);
}
console.log("***************Factorial of the Number**************************");

let n = 5;
let fact = 1;
for (let i = 1; i <= n; i++) {
    fact *= i;
}

console.log(`Factorial of the ${n} : ${fact}`);

console.log("***************Palindrome String**************************");


console.log("--------------First Approach---------------------");

let str = "aabcaa"
let revStr = ""
for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
}

if (str == revStr) {
    console.log(`"${str}" is Palindrome`);
}
else {
    console.log(`"${str}" is not Palindrome`);

}

console.log("---------------Second Approach-----------------------");

function Palindrome(str) {
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (str[i] != str[j]) {
            return `"${str}" not is Palindrome`;
        }
        i++;
        j--;
    }
    return `"${str}" is Palindrome`;
}

let S = "aabaa"
let res = Palindrome(S)
console.log(res);


console.log("***************Palindrome Number**************************");

let Num = 1221;
let og = Num;
let reversed = 0;
while (Num > 0) {
    let ld = Num % 10;
    reversed = reversed * 10 + ld;
    Num = Math.floor(Num / 10);
}

if (reversed === og) {
    console.log(`${og} is Palindrome`);
}
else {
    console.log(`${og} is Not Palindrome`);
}

console.log("***************Leap Year**************************");

let year = 1996;

if (year % 4 == 0) {
    console.log(`${year} is a leap year`);
}
else {
    console.log(`${year} is a not leap year`);
}


console.log("***************Fibonacci Series**************************");

let s = 10
let fib = [s + 1]
fib[0] = 0;
fib[1] = 1;

for (let i = 2; i <= s; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}

console.log(fib[s]);
