//addeventlistner() pre-difine function hota he
//addeventlistner(3 parametre ka use karte he)
//frist event /second function /third usecaptuer / usecaptuer ki value false hoti he

//sentax-- addEventListner(event,function,usechaptuer)
let mybutton = document.getElementById("btn")
mybutton.addEventListener('click' ,function(){
    document.getElementById("head").innerHTML = "Hello";
    console.log('succes')
})

mybutton.addEventListener('click' ,display)
 //"desplay function "callback function ka use karte he or parathicis () ka use nahi karte he 
//nahi to wo event chale se pehle he function call ho jayega
    
   function display(){
document.getElementById("head1").innerHTML = "World"};
console.log('succes')
   

mybutton.addEventListener("mouseenter",data)

function data(){
    document.getElementById("head2").innerHTML = Math.random();
}

//kisi event ko hatana he to removeevent ka use karte he

mybutton.removeEventListener('click',display);