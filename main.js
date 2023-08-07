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
