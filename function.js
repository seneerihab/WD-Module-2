function printNos() {
  for (i = 1; i <= 10; i++) {
    console.log(`Square of ${i} is ${i * i}`);
  }
}
printNos();

function reversedStr(str) {
  let reverse = "";
  let i = str.length - 1;

  while (i >= 0) {
    reverse += str[i];
    i--;
  }
  console.log(`Reversed string is ${reverse}`);
}

reversedStr("Hello World");

function factorial(n) {
  if (typeof n !== "number" || n < 0) {
    return "Error, Please enter a positive number";
  }

  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));
