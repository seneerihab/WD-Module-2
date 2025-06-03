let colors = ["Red", "Green", "Yellow", 1, true];
console.log(colors.length);
colors.push("Violet");
console.log(colors);
colors.pop();
console.log(colors);
colors.shift();
console.log(colors);
colors.unshift("Magenta");
console.log(colors);

let slicedColors = colors.slice(0, 2);
console.log(slicedColors);
colors.splice(1, 1, "Black");
console.log(colors);
