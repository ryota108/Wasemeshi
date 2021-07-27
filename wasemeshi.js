'use-strict';
{ const menuItems =document.querySelectorAll(".menu li a");
 const contents  =document.querySelectorAll(".content");
 
menuItems.forEach(clickedItem=>{
  clickedItem.addEventListener("click", e =>{
  e.preventDefault();
  
  menuItems.forEach(item=>{
    item.classList.remove("active");
  })
  clickedItem.classList.add("active");
  
  contents.forEach(content =>{
    content.classList.remove("active");
  });
  document.getElementById(clickedItem.dataset.id).classList.add("active");

  });
});
  const open=document.getElementById("open");
  const close=document.getElementById("close");
  const modal=document.getElementById("modal");
  const mask =document.getElementById("mask");
 
  const add = function (somthing,anything){
    somthing.classList.add("hidden");
    anything.classList.add("hidden");};
  
  const remove = function (x,y){
    x.classList.remove("hidden");
    y.classList.remove("hidden")
  }

open.addEventListener("click",()=>{
   remove(modal,mask);
});
close.addEventListener("click",()=>{
  add(modal,mask);
});
mask.addEventListener("click",()=>{
   add(modal,mask);
});
const open2=document.getElementById("open2");
  const close2=document.getElementById("close2");
  const modal2=document.getElementById("modal2");
  const mask2 =document.getElementById("mask2");


open2.addEventListener("click",()=>{
    remove(modal2,mask2);
});
close2.addEventListener("click",()=>{
   add(modal2,mask2);
});
mask2.addEventListener("click",()=>{
  add(modal2,mask2);
});
}
