const burger__menu = document.querySelector(".burger__menu")
const body = document.querySelector("body") 
const burger__delete = document.querySelector(".burger__delete")


console.log(burger__menu.classList);
burger__menu.addEventListener("click", () => {
    burger__menu.classList.toggle("active")

    if (burger__menu.classList.contains("active")) {
        body.style.overflow = 'hidden'
    } else {
        body.style.overflow = 'unset'
    }
})
burger__delete.addEventListener("click", () => {
    burger__menu.classList.remove("active")
    body.style.overflow = 'unset'
})