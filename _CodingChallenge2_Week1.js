function f(number) {
    if (number === 0 || number === 1){
        return 1;
    }
    else {
        return f(number-1) + f(number-2);
    }
}
console.log(f(0));
console.log(f(1));
console.log(f(2));
console.log(f(3));
console.log(f(4));
console.log(f(5));