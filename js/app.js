const burger__menu = document.querySelector(".burger__menu")
const body = document.querySelector("body") 
const burger__delete = document.querySelector(".burger__delete")
const box = document.querySelector(".footer__box")
const text = document.querySelector(".footer__inscription")
const discuss__checkbox = document.querySelector(".discuss__checkbox__wrapper")


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

  const brouse__swiper = new Swiper(".brouse__swiper", {
    slidesPerView: 2,
    loop: true, 
    navigation: {
      nextEl: ".brouse__next",
      prevEl: ".brouse__prev",
    },
    spaceBetween: 30, 
    breakpoints: {
        300: {
            slidesPerView: 1,
        },
        840: {
            slidesPerView: 2,
        },

        1240: {
            slidesPerView: 3,
        },
    },
});


  discuss__checkbox.addEventListener("click", () => {
    discuss__checkbox.classList.toggle("befor__after")
  })

box.addEventListener("click", () => {
  window.scrollTo({
    top:0,
    behavior:'smooth'
  });
});
text.addEventListener("click", () => {
  window.scrollTo({
    top:0,
    behavior:'smooth'
  });
});


