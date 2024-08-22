//data ko store karne ke liye localstorge ke use karte he

//localstorage.setitem(key:value)- data ko set karne ke liye
//localstrege.getitem(key)-data ko get karne ke liye
//localstrege.removeitem(key)-kisi data ko remove karne ke liye
//localstorge.clear()- data ko pura hatane he to



localStorage.setItem("name", "Nazneen")
localStorage.setItem("name1", "Shumaila")
localStorage.setItem("profession", "Civil Engineer")
localStorage.setItem("password", "Deadline")

localStorage.removeItem("name1");


//localstorage.getitem(key)
let Name = localStorage.getItem("name")
console.log(Name);

let profession = localStorage.getItem("profession")
console.log(profession);

let pass = localStorage.getItem("password")
console.log(pass);
//localStorage.clear();

alert(Name)
document.getElementById("demo").innerHTML = `wellcome to ${Name}`