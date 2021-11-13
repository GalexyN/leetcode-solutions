const mergeSort = (arr) => {

    const merge = (leftArr, rightArr) => {
        let sorted = [];

        while (leftArr.length && rightArr.length) {

            if (leftArr[0] < rightArr[0]) {
                sorted.push(leftArr.shift());
            } else {
                sorted.push(rightArr.shift());
            }
        }

        return [...sorted, ...leftArr, ...rightArr];
    }

    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.trunc((0 + arr.length) / 2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid, arr.length);

    return merge(mergeSort(leftArr), mergeSort(rightArr))

}

let input1 = [1,5,7,15,7,3,7,9];
let output1 = mergeSort(input1);
console.log(output1);