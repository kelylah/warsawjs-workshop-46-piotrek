// const add = a => b => a + b;

function add(a) {
    return function (b) {
        return a + b;
    }
}


