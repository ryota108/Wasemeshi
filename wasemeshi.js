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
class Modal{
  constructor(open,close,modal,mask){
  this.opens =document.getElementById(open);
  this.closes =document.getElementById(close);
  this.modals =document.getElementById(modal);
  this.masks =document.getElementById(mask);
  }
  toggleOpen(){
        this.opens.addEventListener("click",()=>{
        this.modals.classList.toggle("hidden");
          this.masks.classList.toggle("hidden");
        })
      }
  toggleClose(){
      this.closes.addEventListener("click",()=>{
      this.modals.classList.toggle("hidden");
       this.masks.classList.toggle("hidden");
    })
  }
}

const modalFirst = new Modal("open","close","modal","mask")
modalFirst.toggleOpen()
modalFirst.toggleClose()

const modalSecond =new Modal("open2","close2","modal2","mask2")
modalSecond.toggleOpen()
modalSecond.toggleClose()


const modalThird =new Modal("open3","close3","modal3","mask3")
modalThird.toggleOpen()
modalThird.toggleClose()
}
