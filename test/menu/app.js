"use stricr"
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
