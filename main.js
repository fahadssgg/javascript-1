console.log("//////////////even & odd ///////////////////");

let n = 24;
if (n % 2 == 0) {
  console.log("nuber is even");
} else {
  console.log("nuber is odd");
}

console.log("//////////////grade ///////////////////");

let Grade = 55;
if (Grade >= 101) {
  console.log("what is this???");
} else if (Grade >= 90) {
  console.log("A");
} else if (Grade >= 80) {
  console.log("B");
} else if (Grade >= 70) {
  console.log("C");
} else if (Grade >= 60) {
  console.log("D");
} else if (Grade <= 59) {
  console.log("F");
}

console.log("//////////////Fizz Buzz ///////////////////");

let nFB = 15;
if (nFB % 5 == 0 && nFB % 3 == 0) {
  console.log("Fizz-Buzz");
} else if (nFB % 5 == 0) {
  console.log("Buzz");
} else if (nFB % 3 == 0) {
  console.log("fizz");
}

console.log("//////////////square ///////////////////");
for (let i = 1; i <= 10; i++) {
  console.log(Math.pow(i, 2));
}

console.log("//////////////even///////////////////");

for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
console.log("/////////////odd////////////////////");

for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

console.log("/////////////print////////////////////");

let t = 8;
for (let i = 1; i <= t; i++) {
  let aa = "";
  for (let j = 1; j <= i; j++) {
    aa += j + " ";
  }
  console.log(aa);
}

console.log("/////////////Fibonacci////////////////////");

let num1 = 0;
let num2 = 1;
let nt = 0;

for (let i = 1; i <= 20; i++) {
  console.log(num1);
  nt = num1 + num2;
  num1 = num2;
  num2 = nt;
}
