let x = 28, y = 14, num1;
if (x > y){
    for (let i = 2; i <= y; i++){
        if (y % i === 0 && x % i ===0){
            num1 = i;
        }
    }
} else {
    for (let i = 2; i <= x; i++){
        if (y % i === 0 && x % i ===0){
            num1 = i;
        }
    }
}
console.log(num1);