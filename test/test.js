let assert = require('assert');


describe('pow', function() {
  it("raisei 2 pow 3", function() {
    assert.equal(pow(2, 3), 8);
  });
});

function pow(n, m){
  return n **m;
}

/********************************************************** */

"use strict"
let user = {};
user.name = "john";
user.surname = "smith";

/** 
 let user = {
     name: "john"'
     surname: "smith"
 };
 */

user.name = "pete";
console.log(user)

delete user.name;
console.log(user)


/************************************** multiplayNumeric */

describe('multiplayNumeric', function() {
  it("multiplayNumeric answer 200 * 2", function() {
    assert.equal(multiplayNumeric(200 * 2),400);
  });
});


function multiplayNumeric(menu) {
    for(let prop in menu) {
        menu[prop] *= 2;
    }
    return menu;
}

let menu = {
    width:200,
    height:300,
    title:"my menu"
}

console.log(multiplayNumeric(menu));

/******************************************************* sum */

/* sum ra nemishenasad

describe('total', function() {
  it("sum all number", function() {
    assert.equal(total(100, 160, 130), 390);
  });
});


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
*/
/******************************************************* isEmty */

describe('is empty', function() {
  it("is this empty", function() {
    assert.equal(isEmpty(true),true)
  });
});

"use strict"
function isEmpty(schedule){
    for(let prop in schedule){
        return false;
    }
    return true;
}

let schedule ={
"8:30":"get up"
};

console.log(isEmpty(schedule));



/************************************************** ladder */

describe('ladder', function() {
  it('up', function() {
    assert.equal(ladder.up(), ladder);
  });
});

let ladder ={
    step:0,
    up(){
        this.step++;
        return this;
    },
    down(){
        this.step--;
        return this;
    },
    showStep:function(){
        alert(this.step);
        return this;
    }
}

ladder.up().up().down().showStep();


/**************************************************** */