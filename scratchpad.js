// const add = a => b => a + b;

function add(a) {
    return function (b) {
        return a + b;
    }
}

function subtraction(a) {
    return function (b) {
        return b - a;
    }
}

const array = [1, 2, 3];
console.log(array.map(add(1)));

console.log(array.map(subtraction(1)));