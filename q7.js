for (let i = 1 ; i <= 100 ; i++){
    if (i % 35 === 0){
        console.log("Fizzbuz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buz");
    } else {
        console.log(i);
    }
}