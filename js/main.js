


window.addEventListener('keydown', function playSound(e) {
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
  if (!key){
    return;
  }else{
    key.classList.add('playing')
  };
 
})

window.addEventListener('transitionend', function removeTransition(e) {
    if (e.propertyName !== 'transform') {
      return
    }else{
    e.target.classList.remove('playing')}}),

window.addEventListener('keydown', playSound)