for (let i = 1; i < 10; i++){
    for (let j = 0; j <10; j++){
        for (let m = 0; m < 10; m++){
            let sum = (Math.pow(i,3) + Math.pow(j,3) + Math.pow(m,3));
            let arm = ((i*100) + (j*10) + (m));
            if (arm === sum) {
                console.log(arm);
            }
        }
    }
}