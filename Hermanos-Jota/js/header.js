let logo = document.getElementById('logo-img')
let nav = document.getElementById('nav')
let flag = true ,width = window.innerWidth

window.addEventListener('resize',()=>{
    width = window.innerWidth
    nav.style.transform = "translateX(-0vw)";
    logo.style.transform = "translateX(0vw)"

})

logo.addEventListener('click', ()=>{
    if(width<700){
        if(flag){
            nav.style.transform = "translateX(0vw)";
            logo.style.transform = "translateX(0vw)"
        } else{
            nav.style.transform = "translateX(-100vw)";
            logo.style.transform = "translateX(0vw)"
        }
        console.log(flag);
        flag =!flag
    } 
    

    
})