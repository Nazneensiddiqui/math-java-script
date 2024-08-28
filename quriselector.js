//queriselect ke use karke hame kisi bhi element ko targe kar sakte he
//isme class ya id dono ka use karte he class me . ka or id me # likhna zaruri he


let paragraph = document.querySelector(".para");
paragraph.style.backgroundcolor = "red";
paragraph.style.color = "white";

let para = document.querySelector("#mypara");
para.style.backgroundcolor = "yellow";
para.style.color = "red";


//queriselectorall me nodelist show karega like a array
let mainpara = document.querySelectorAll(".para");
console.log(mainpara)
mainpara[0].style.backgroundcolor = "pink";
mainpara[1].style.backgroundcolor = "red";
mainpara[2].style.backgroundcolor = "yellow";
mainpara[0].style.color = "red";
mainpara[2].style.color = "blue";
mainpara[1].style.color = "white";
