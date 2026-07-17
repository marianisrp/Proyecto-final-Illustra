'use strict'



// Javascript para Galería

const carroussel        = document.querySelector(`.Carroussel`)
const carrousselImgs    = carroussel.querySelectorAll (`.Carroussel-img`)
const carrousselDots    = carroussel.querySelectorAll(`.Carroussel-dot`)
const carrousselWrapper = carroussel.querySelector (`.Carroussel-wrapper`)
const carrousselNext    = carroussel.querySelector (`.Carroussel-arrow--next`)
const carrousselPrev    = carroussel.querySelector (`.Carroussel-arrow--prev`)



console.log (carrousselImgs)
console.log (carrousselDots)
console.log (carrousselWrapper)
console.log (carrousselNext)
console.log (carrousselPrev)


let anchoImagen = 100 / carrousselImgs.length
let contador    = 0



let moverCarrousselWrapper = ()=>{
    carrousselWrapper.style.translate = `-${anchoImagen * contador}% 0%`
}

let nextHandler = ()=>{
    contador++
    if( contador > carrousselImgs.length - 1){
        contador = 0
    }
    moverCarrousselWrapper()
}

let prevHandler = ()=>{
    contador--
    if(contador < 0 ){
        contador = carrousselImgs.length - 1
    }
    moverCarrousselWrapper()
}

let dotHandler = ( _ , i)=>{
    carrousselDots[i].addEventListener(`click`, ()=>{
        contador = i
        moverCarrousselWrapper()
    })
}

// Cuando hago CLICK en .Carroussel-dot
    // .Carroussel-wrapper LE STYLE translate

carrousselDots.forEach(dotHandler)


//Cuando hago CLICK en .Carroussel-arrow--next
    //contador++
    //.Carroussel-wrapper LE STYLE translate

carrousselNext.addEventListener(`click`, nextHandler)


//Cuando hago CLICK en .Carroussel-arrow--prev
    //contador--
    //.Carroussel-wrapper LE STYLE translate

carrousselPrev.addEventListener(`click`, prevHandler)

window.addEventListener(`keydown`, (e)=>{
    // console.log( e.key)
    if (e.key === `ArrowRight`){
        nextHandler()    
    }
    if (e.key === `ArrowLeft`){
        prevHandler()
    }
})



