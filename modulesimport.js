import {name,age} from "./modules2.js";
import naaz from "./modules2.js"; // function ka name alag bhi rakh sakte he usko pata he default 

console.log(name);
console.log(age);

document.getElementById("demo").innerHTML = `my name is ${name}
and i am ${age} years old`

document.getElementById("demo1").innerHTML = naaz()
console.log(naaz())