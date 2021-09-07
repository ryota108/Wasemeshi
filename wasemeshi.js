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

const modalForth =new Modal("open4","close4","modal4","mask4")
modalForth.toggleOpen()
modalForth.toggleClose()

const modalFifth =new Modal("open5","close5","modal5","mask5")
modalFifth.toggleOpen()
modalFifth.toggleClose()

const modalSixth=new Modal("open6","close6","modal6","mask6")
modalSixth.toggleOpen()
modalSixth.toggleClose()

const modalSeventh =new Modal("open7","close7","modal7","mask7")
modalSeventh.toggleOpen()
modalSeventh.toggleClose()

const modalEighth =new Modal("open8","close8","modal8","mask8")
modalEighth.toggleOpen()
modalEighth.toggleClose()

const modalNinth =new Modal("open9","close9","modal9","mask9")
modalNinth.toggleOpen()
modalNinth.toggleClose()

const modalTenth =new Modal("open10","close10","modal10","mask10")
modalTenth.toggleOpen()
modalTenth.toggleClose()

const modal11 =new Modal("open11","close11","modal11","mask11")
modal11.toggleOpen()
modal11.toggleClose()

const modal12 =new Modal("open12","close12","modal12","mask12")
modal12.toggleOpen()
modal12.toggleClose()

const modal13 =new Modal("open13","close13","modal13","mask13")
modal13.toggleOpen()
modal13.toggleClose()

const modal14 =new Modal("open14","close14","modal14","mask14")
modal14.toggleOpen()
modal14.toggleClose()

const modal15 =new Modal("open15","close15","modal15","mask15")
modal15.toggleOpen()
modal15.toggleClose()

const modal16 =new Modal("open16","close16","modal16","mask16")
modal16.toggleOpen()
modal16.toggleClose()

const modal17 =new Modal("open17","close17","modal17","mask17")
modal17.toggleOpen()
modal17.toggleClose()

const modal18 =new Modal("open18","close18","modal18","mask18")
modal18.toggleOpen()
modal18.toggleClose()
}
