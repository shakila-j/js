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

