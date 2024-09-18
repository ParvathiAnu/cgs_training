var para=document.getElementById("para");
var value=para.innerText;
console.log(value)
var bold=document.getElementById("bold");
var value=bold.innerText;
console.log(value)
 var i=document.getElementById("itallic")
var value=i.innerText;
console.log(value)
var h=document.getElementById("h1")
var value=h.innerText;
console.log(value)
var cla=document.getElementsByClassName("items")
console.log(cla)

var out=document.getElementById("output");
var text=document.getElementById("text")
var btn=document.getElementById("btn")

btn.addEventListener("click",funname)
function funname(){
    const ans=text.value
    out.innerText=ans
}
