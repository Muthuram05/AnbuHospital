

 // mobile nav bar
 const bar= document.getElementById("bar")
 const mobileNav= document.getElementById("mobile-nav")
 const dropDown= document.getElementById("drop-down")
 const d_menu= document.getElementById("d-menu")
 
 bar.addEventListener('click',()=>{
 
 mobileNav.classList.toggle("active")

 if(bar.className == "fa-solid fa-bars")
 {

bar.classList.remove("fa-bars")
bar.classList.add("fa-x")
}
else{
  bar.classList.remove("fa-x")
  bar.classList.add("fa-bars")
}
 })
 dropDown.addEventListener("click",()=>{
d_menu.classList.toggle("active")

})
 

function fun(){
    document.getElementById("frame1").style.visibility="visible";
    // document.getElementById("dotted").style.visibility="hidden";
    document.getElementById("frame1").classList.add("style");
  }
  // function remove(){
  //   document.getElementById("frame1").classList.remove("style");
  //   document.getElementById("frame1").style.visibility="hidden";
  // }
  var btnContainer = document.getElementById("navbarSupportedContent");
  var btns =btnContainer.getElementsByClassName("btn");

  for(var i=0; i < btns.length; i++) {
    btns[i].addEventListener('click',function() {
        var current = document.getElementsByClassName("active");
        current[0].className =current[0].className.replace("active");
        this.className += " active";

    })
  }
  const chatIcon=document.getElementById("chatbot-toggler")
  const bot=document.getElementById("bot")
  chatIcon.addEventListener('click',()=>{
    // console.log("click");
    bot.classList.toggle("block")
  })

 
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    items:4,
    responsive:{
        0:{
            items:1,
            nav:true
        },
       700:{
            items:2,
            nav:true,
        },
      991:{
            items:2,
            nav:true,
           
        },
        1200:{
          items:4,
          nav:true,

        }
       
    }
})
