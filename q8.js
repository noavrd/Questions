function happy(num) {
    let x, y;
    let z = [];
    while (num !=1 && x[num] !== true) {
        z[num] = true;
        x = 0;  
        while (0 < num) {
            y = num % 10 ;
            x += y * y;
            num = (num - y) /10 ;
        }
        num = x;
    }
    return( num === 1);
}
let num = 0, count = 0;
while (count++ < 5)
{
    while (!happy(num)){
    num++;
    console.log(num);
    }
    num++;
}