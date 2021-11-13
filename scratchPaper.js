/*
0-59 - F
60 - 69 - D
70 - 79 - C
80 - 89 - B
90- 100 - A

output => ['D: '40.00%', 'A: 20.00%', 'B: 20:00%', 'C: 20.00%'];
 */ 
let input = [60, 62, 80, 91, 75];

let storage = {
    'A': 0,
    'B': 0,
    'C': 0,
    'D': 0,
    'F': 0,
};

for (let el of input) {
    if (el < 60) {
        storage['F']++;
    } else if (el <= 69 && el >= 60) {
        storage['D']++;
    } else if (el <= 79 && el >= 70) {
        storage['C']++;
    } else if (el <= 89 && el >= 80) {
        storage['B']++;
    } else {
        storage['A']++;
    }
}

console.log(storage);