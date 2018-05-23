var swipe = new Swipe(document.querySelector('body'))
var menu = false

document.addEventListener('closeMenu', function(e){
    menu = false
})    
document.addEventListener('openMenu', function(e){
    menu = true
})    

swipe.onRight(() => {
    if(menu == false){
        openMenu('menu')
        menu = true
    }
})

swipe.onLeft(()=> {
    if(menu == true){
        closeMenu('menu')
    }
})

swipe.onUp(()=>{
  //your code goes here
})

swipe.onDown(()=>{
  //your code goes here
})
