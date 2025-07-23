let burguer = document.querySelector('#burguer')
let menu = document.getElementsByTagName('menu')[0]

burguer.addEventListener('click', ()=>{

    if(menu.style.display == 'none'){
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }

})

window.addEventListener('resize', ()=>{

    if(window.innerWidth >= 768){

        menu.style.display = 'block'

    } else {

        menu.style.display = 'none'

    }

})