import TapEvent from './tap'


const tapEvent = new TapEvent()


document.addEventListener('touchstart', ev=>{
  ev.target?.dispatchEvent(tapEvent)

})
