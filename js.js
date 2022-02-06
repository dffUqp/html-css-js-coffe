const textCost = document.querySelector(".giftset__main-block__info__text__cost")
const textGiftset = document.querySelector(".giftset__main-block__info__text__title")
const srcImg = document.querySelector(".giftset__main-block__usless__img")
const btn = document.querySelectorAll(".giftset__main-block__btns__btn")

const scrolltogiftset = document.querySelector(".main__content__list__elem.GiFTSET")
const scrolletothis = document.getElementById('giftset');

const linktoSlider = document.querySelector('.main__content__list__elem.COMBO');
const scroltoSlider = document.getElementById('slider-coffee');


const popup = document.querySelector(".popup")
const popupBoby = document.querySelector(".popup__boby")
const popupOpen = document.querySelector(".popup-open")
const popupClose = document.querySelector(".popup-close")
const popupContent = document.querySelector(".popup__content__list")


const btnIsBuy = document.querySelectorAll(".blocks__block__btn1")
const basket = JSON.parse(localStorage.getItem("basket")) || [] 




popupOpen.onclick = (event) => {
    popup.classList.add("active")
    event.preventDefault()
}

popupClose.onclick = () => {
    popup.classList.remove("active")

}


popupBoby.onclick = (e) => {
    if(e.target === popupBoby) { 
        popup.classList.remove('active')
    }
}

popupContent.addEventListener("click", (e) => {
    if(e.target.getAttribute('class') === "popup__content__list__btn") { 
        basket.forEach(elem => {
            if (elem.name === e.target.closest("li").querySelector(".popup__content__list__text__cost").textContent) {
                console.log(basket,elem, basket.indexOf(elem));
                basket.splice(basket.indexOf(elem), 1)
                e.target.closest("li").remove()
                localStorage.setItem("basket", JSON.stringify(basket))
                return
            }
        })
    }
})
    
scrolltogiftset.onclick = (event) => {
    scrolletothis.scrollIntoView({behavior: "smooth"});

    event.preventDefault()
}

linktoSlider.onclick = (event) => {
    scroltoSlider.scrollIntoView({behavior: "smooth"});

    event.preventDefault()
}


 const info = {
    "first" : {
        img: `./img/image.png`,
        cost: `285.000`,
        giftset: `Giftset "Cà phê phin Việt Nam"`
    },

    "second" : {
        img: `./img/image2.png`,
        cost: `300.000`,
        giftset: `Привет, меня называют 2`
    },

    "thrid" : {
        img: `./img/image3.png`,
        cost: `500.000`,
        giftset: `Привет, меня называют 3`
    }
}
     
btn.forEach(element => {


    element.addEventListener("click", () => {
        if (element.getAttribute("class") != "giftset__main-block__btns__btn active") {
            let numberBtn = element.getAttribute("data")

            btn.forEach(element => {
             element.classList.remove("active")
            });

            element.classList.add("active")

            srcImg.src = info[numberBtn].img
            textCost.textContent = info[numberBtn].cost
            textGiftset.textContent = info[numberBtn].giftset
        }
    })

});


btnIsBuy.forEach(element => {
    element.addEventListener("click", () => {
        const name = element.previousElementSibling.querySelector(".blocks__block__text__info__title").textContent

        if (basket.some(e => e.name === name)) {
            return
        }

        const cost = element.previousElementSibling.querySelector(".blocks__block__text__cost").textContent
        const img = element.previousElementSibling.previousElementSibling.src

        basket.push({
            cost: cost,
            name: name,
            img: img
        });

        console.log(basket);
        localStorage.setItem("basket", JSON.stringify(basket))


        const addTobasket = popupContent.innerHTML = basket.map((elem) => {
            return `<li class="popup__content__list__elem"><img src="${elem.img}" class="popup__content__list__img"></img><span class="popup__content__list__text">${elem.cost}<span class="popup__content__list__text__cost">${elem.name}</span></span><a href="#"class="popup__content__list__btn">удалить</a></li>`
        }).join(" ");
    })
});



// popupdeletethings.forEach(element => {
//     element.addEventListener("click", (e) => {
//         e.preventDefault()
//         console.log(basket.lenght);
//     })
// });

new Swiper(".swiper", {
    navigation: {

        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"

    },

    slidesPerView: 3,

    loop: true
});


const addTobasket = popupContent.innerHTML = basket.map((elem) => {
    return `<li class="popup__content__list__elem"><img src="${elem.img}" class="popup__content__list__img"></img><span class="popup__content__list__text">${elem.cost}<span class="popup__content__list__text__cost">${elem.name}</span></span><a href="#"class="popup__content__list__btn">удалить</a></li>`
}).join(" ");
