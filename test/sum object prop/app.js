"use strict"
function total(salaries){
    for (let prop in salaries) {
        let sum = 0;
       sum+= salaries[prop];
    }
    return sum;
}

let salaries={
    John:100,
    Ann : 160,
    Pete: 130
};

console.log(sum);
