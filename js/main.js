window.addEventListener('keydown',function(e){
let key =this.document.querySelector(`.key[data-key="${e.keyCode}"]`)
if(!key){
return;
}else{
  key.classList.toggle("playing")
}
})
window.addEventListener('transitionend',function(e){
  let keys =this.document.querySelector(`.key[data-key="${e.keyCode}"]`)
if(!keys){
return;
}else{
  keys.classList.remove("playing")
}
})