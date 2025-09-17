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
    while (i <= j) {
        if (str[i] != str[j]) {
            return `"${str}" is Palindrome`;
        }
        i++;
        j--;
    }
    return `"${str}" is not Palindrome`;
}

let S = "aabaa"
let res = Palindrome(S)
console.log(res);


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
