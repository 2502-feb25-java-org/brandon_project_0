function f(number) {
    if (number === 0 || number === 1){
        return 1;
    }
    else {
        return f(number-1) + f(number-2);
    }
}

for (let i = 0; i < 25; i++) {
    console.log(f(i));
}
