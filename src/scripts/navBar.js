document.querySelectorAll(".nav__menu--item").forEach(element=>{
    element.addEventListener("click",()=>{
        document.querySelectorAll(".nav__menu--item").forEach(item=>{
            item.classList.remove("active")
        })
        element.classList.add("active")
    })
})

window.addEventListener("scroll",()=>{
    let scroll = (scrollTop =
        window.pageYOffset || document.documentElement.scrollTop);    
    if(scroll > Number.parseInt(getComputedStyle(document.querySelector(".banner")).height)){
        document.querySelector(".nav").classList.add("fixed");
    }else{
        document.querySelector(".nav").classList.remove("fixed");
    }
})