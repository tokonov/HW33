const tabs  = document.querySelectorAll('.tabheader__item');
const tabsParent = document.querySelector('.tabheader__items')
const tabContent = document.querySelectorAll('.tabcontent');

const hideTabContent = () =>{
    tabContent.forEach((item) =>{
        item.style.display = 'none'
    })
    tabs.forEach((item) =>{
        item.classList.remove('tabheader__item_active')
    })
}

const showTabsContent = (i = 0) =>{
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}
hideTabContent()
showTabsContent()

tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('tabheader__item')){
        tabs.forEach((item, i) =>{
            if (target === item){
                console.log(i);
                hideTabContent()
                showTabsContent(i)
            }
        })
    }
})

let slideIndex = 0

function currentSlide(n){
    showSlides(slideIndex= n)
}

function showSlides(n){
    let slides =document.querySelectorAll('.tabheader__item');
    let sliderSlide =document.querySelectorAll('.tabcontent');

    if( n > slides.length && n > sliderSlide.length){
        slideIndex += 1
    }
    for( let slide of slides){
        slide.classList.remove('tabheader__item_active')
    }
    slides[n].classList.add('tabheader__item_active')
    for(let slide of sliderSlide){
        slide.style.display = "none"
    }
    sliderSlide[slideIndex].style.display = 'block'
}

let timer = setInterval(function(){
    {
        slideIndex++
        if(slideIndex > 3){
            slideIndex = 0
        }
    }
    showSlides(slideIndex)
}, 2000)


//modal

const modal =document.querySelector('.modal');
const modalTrigger = document.querySelectorAll('[data-modal]');
const error = document.getElementById('error')


modalTrigger.forEach((item) =>{
    item.addEventListener('click', openmodal)
});



function openmodal(){
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = "hidden"
    // error.classList.add('hide')
}


function closeModal(){
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ""
    // error.classList.add('hide')
}


//scroll
modal.addEventListener('click', (event) =>{
    if(
        event.target === modal ||
        event.target.classList.contains('modal__close')
    ){
        closeModal()
    }
});


function openmodalScroll(){
    const page =document.documentElement
6
    if(page.scrollTop + page.clientHeight >= page.scrollHeight){
        openmodal()

        window.removeEventListener('scroll' , openmodalScroll)
    }
}

window.addEventListener('scroll', openmodalScroll)
const modalTimeout = setTimeout(openmodal, 50000)



//modalEnd

