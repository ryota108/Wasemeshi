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


open.addEventListener("click",()=>{
     modal.classList.remove("hidden");
     mask.classList.remove("hidden");
});
close.addEventListener("click",()=>{
  modal.classList.add("hidden");
  mask.classList.add("hidden");
});
mask.addEventListener("click",()=>{
  modal.classList.add("hidden");
  mask.classList.add("hidden");
});
const open2=document.getElementById("open2");
  const close2=document.getElementById("close2");
  const modal2=document.getElementById("modal2");
  const mask2 =document.getElementById("mask2");


open2.addEventListener("click",()=>{
     modal2.classList.remove("hidden");
     mask2.classList.remove("hidden");
});
close2.addEventListener("click",()=>{
  modal2.classList.add("hidden");
  mask2.classList.add("hidden");
});
mask2.addEventListener("click",()=>{
  modal2.classList.add("hidden");
  mask2.classList.add("hidden");
});
}
