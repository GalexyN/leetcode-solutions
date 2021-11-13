/* 
Make a class that can take an input list of integers and have the following methods: 

1. Sort // make own sort function no native methods
2. Find the Minimum Number // entire input list
3. Pop last number // get rid of last el in input list
4. Insert number // add to end of the list

constraint: all method should be done in place
input_list = [1,2,10,60,32,55,10,9,8,6] 

*/

// instatiate the class / object
class testClass {
    constructor(arr) {
        this.storage = [...arr];
    }
    // the class should have 4 methods from above
    // sort
    sort() {
        for (let i = 0; i < this.storage.length; i ++) {
            for (let j = i + 1; j < this.storage.length; j ++) {
                if (this.storage[i] > this.storage[j]) {
                    [this.storage[i], this.storage[j]] = [this.storage[j], this.storage[i]];
                }
            }
        }
        return;
    }
    // find the min // non native
    minNumber() {
        this.sort();
        return this.storage[0];
    }
    // pop last number
    removeEnd() {
        this.storage.pop()
        return;
    }
    // add number to end
    add(n) {
        this.storage.push(n);
        return;
    } 

    mergeNewArray(arr) {
        this.storage = [...this.storage, ...arr];
        this.sort();
        return;
    }

    findMedian() {
        // figure out if the storage is even length or odd
        if(this.isEven()) {
            // if the even
            //add left and right middles and divide by 2 
            // [1, 2, 2, 4] length 4 / 2 = 2
            // [1, 2, 3, 4, 5, 6] length 6
            return (this.storage[this.size() / 2] + this.storage[(this.size() / 2) - 1]) / 2
        } else {
            // if odd
            // return value at the middle of the arr
            // [1, 2, 3, 4, 5] => 3 length 5 / 2 = 2.5 round down to 2 thisstorage[2] => 3
            return this.storage[Math.floor(this.size() / 2)]
        }
    }

    isEven() {
        return this.storage.length % 2 === 0; 
    }

    size() {
        return this.storage.length;
    }
}
let input_list = [1,2,10,60,32,55,10,9,8,6];
let test = new testClass(input_list);
console.log(test);
test.mergeNewArray([1, 5, -10, 68, 91, -100]);
console.log(test);
console.log(`median: ${test.findMedian()}`); // expects 8.5 with -100 added to merged


