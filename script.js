window.onload= function(){
console.log("onload running")
let wi=window.innerWidth
console.log(wi,"inner wide")
if(wi<=900){
  alert("Please open in PC, Laptop(It's not for mubile)")
}

}
let video= document.querySelector(".vido-apj")
let but=document.querySelector("#but")
let info=document.querySelector(".info")
let t;
let moving=()=>{
  but.style="opacity:1";
  clearInterval(t);
  t=setTimeout(() => {
      but.style="opacity:0"
  }, 3000);
  
}
function play(){


if(but.className=="fa-solid fa-play"){
  but.className="fa-solid fa-pause"
  video.play()
  info.style="opacity:0"
  video.style="opacity:1"
}else{
  video.pause()
  but.className="fa-solid fa-play"
  info.style="opacity:1 "
  video.style="opacity:0"
  but.style="opacity:1"
}
 
}
