let btn=document.querySelector("button");

btn.addEventListener("click",function(){
  console.log("generate random color")
  let h1=document.querySelector("h1");
  let randomcolor=getrandomcolor();
  h1.innerText=randomcolor;

  let div = document.querySelector("div");
  div.style.backgroundColor=randomcolor;
  console.log("color updated")
})

function getrandomcolor(){
let red=Math.floor(Math.random()*255);
let blue=Math.floor(Math.random()*255);
let green=Math.floor(Math.random()*255);

let generate=`rgb(${red},${blue},${green})`;
return generate;
}
