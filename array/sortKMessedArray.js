function sortKMessedArray(arr, k) {
  // your code goes here
  if (arr.length === 1) {
    return arr;
  }

  for (let i = 1; i < arr.length; i++) {
    let el = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > el) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = el;
  }
  return arr;
}

let input = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9];
let k = 2;

console.log(sortKMessedArray(input, k)); // output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
