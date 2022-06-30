const burger__menu = document.querySelector(".burger__menu")
const body = document.querySelector("body") 
const burger__delete = document.querySelector(".burger__delete")


burger__menu.addEventListener("click", () => {
    burger__menu.classList.toggle("active")
    body.style.overflow = 'hidden'
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

const hero__swiper = new Swiper(".hero__swiper", {
    loop: true,
    // spaceBetween: 10,
    navigation: {
      nextEl: ".hero__next--button",
      prevEl: ".hero__prev--button",
    },
  });
  
  
  const hero__swiper__second = new Swiper(".hero__swiper__second", {
    loop: true,
    spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    navigation: {
        nextEl: ".hero__next--button",
        prevEl: ".hero__prev--button",
      },
    spaceBetween: 0,
  });