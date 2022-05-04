const items = require("./items.json");

let max = items[0];

for (let i = 0; i < items.length; i++) {
  if (items[i].number * items[i].price > max.number * max.price) {
    max = items[i];
  }
}
console.log(max.item);

let min = items[0];

for (let i = 0; i < items.length; i++) {
  if (
    items[i].price - items[i].price * items[i].discount <
    min.price - min.price * min.discount
  ) {
    min = items[i];
  }
}

console.log(min.item);

const input = "lananh";

const inputToArr = [...input];

for (let i = 0; i < inputToArr.length; i++) {
  for (let j = 0; j < i; j++) {
    if (inputToArr[i] == inputToArr[j]) {
      inputToArr[i] = "-";
      break;
    }
  }
}

const output = inputToArr.join("");

console.log(output);
