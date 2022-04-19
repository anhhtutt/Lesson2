//BT2

function A(array) {
  let res = true;
  for (let i = 0; i < array.length; i++) {
    if (array[i] != array[array.length - i - 1]) {
      res = false;
    }
  }
  return res;
}

let array = [1, 8, 3, 2, 1];
let a = A(array);
console.log(a);

//BT3

function Sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

let arr = [713, 2, 99, -40, 9, -6, 555, 932, 11];

Sort(arr);

console.log(arr);
