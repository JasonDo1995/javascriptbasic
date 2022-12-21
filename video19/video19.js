console.log('hello world from video 19');
let sum = (a, b) => {
    return a + b
};
console.log('check sum 9+6=', sum(9, 6));
// function and method
let obj = {
    name: "jason",
    age: "27",
    address: "hcm city",
    getage: function () {
        return this.age
    }
}
console.log('check age', obj.getage());