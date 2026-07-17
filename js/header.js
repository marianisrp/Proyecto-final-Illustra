'use strict'


//Javascript para el Header (responsive) HECHO CON IA

const headerToggle = document.querySelector(`#headerToggle`)
const headerNav     = document.querySelector(`#headerNav`)

headerToggle.addEventListener(`click`, () => {
    let abierto = headerToggle.classList.toggle(`is-active`)
    headerNav.classList.toggle(`is-open`)
    headerToggle.setAttribute(`aria-expanded`, abierto)
})

// Cierra el menú al hacer click en un link o en el botón
headerNav.querySelectorAll(`.Nav-a, .Button-a`).forEach((link) => {
    link.addEventListener(`click`, () => {
        headerToggle.classList.remove(`is-active`)
        headerNav.classList.remove(`is-open`)
        headerToggle.setAttribute(`aria-expanded`, false)
    })
})