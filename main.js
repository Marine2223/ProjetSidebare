let bares= document.querySelector('.bares')
let menu = document.querySelector('.menu')

bares.addEventListener('click' , (e) =>{
    bares.classList.toggle("active")
    menu.classList.toggle("desactive")
})