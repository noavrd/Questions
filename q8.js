const history = [];
let limit = 5;
for(let i =1 ;limit ; i++){
    let temp = i;
    let sum;
    while (sum !== 1 && history.includes(temp)) {
        history.push(temp);
        sum = 0;
        console.log(temp);
        while(temp > 0) {
            const digit = temp%10;
            sum += digit**2;
            temp = (temp - digit)/10;
        }
        temp = i;
    }
    if (temp === 1) {
        console.log("the number is happy");
        limit --;
    } 
}
