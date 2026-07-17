'use strict'

// Javascript para la Landing page (IA)

const landingScroll = document.querySelector(`#landingScroll`)

landingScroll.addEventListener(`click`, () => {
    let siguienteSeccion = document.querySelector(`.Grid`)
    siguienteSeccion.scrollIntoView({ behavior: `smooth` })
})


