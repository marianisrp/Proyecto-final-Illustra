'use strict'

const artistButtons = document.querySelectorAll(`.Artist-list-button`)
const artistImg      = document.querySelector(`#artistImg`)
const artistName     = document.querySelector(`#artistName`)
const artistBio      = document.querySelector(`#artistBio`)
const artistLink     = document.querySelector(`#artistLink`)
const artistWorks    = document.querySelector(`#artistWorks`)


console.log (artistButtons)
console.log (artistImg)
console.log (artistName)
console.log (artistBio)
console.log (artistLink)
console.log (artistWorks)

// Hecho con ayuda de IA


 const artistData = {
        'ana-jaren': {
            img: `assets/optim/ana-jaren-retrato.webp`,
            bio: `Ilustradora española de trazo colorido y directo, con proyectos que van de la ilustración editorial al muralismo. Su obra suele abordar temas de identidad y mirada feminista con un estilo visual muy reconocible.`,
            link: `https://anajaren.com/`,
            works: [`assets/optim/ana-jaren-work1.webp`, `assets/optim/ana-jaren-work2.webp`, `assets/optim/ana-jaren-work3.webp`]
        },
        'maria-hesse': {
            img: `assets/optim/maria-hesse-retrato.webp`,
            bio: `Añade aquí la biografía de María Hesse.`,
            link: ``,
            works: []
        },
        'la-mumina': {
            img: `assets/optim/la-mumina-retrato.webp`,
            bio: `Añade aquí la biografía de La Mumina.`,
            link: ``,
            works: []
        },
        'esther-gili': {
            img: `assets/optim/esther-gili-retrato.webp`,
            bio: `Añade aquí la biografía de Esther Gili.`,
            link: ``,
            works: []
        },
        'flavita-banana': {
            img: `assets/optim/flavita-banana-retrato.webp`,
            bio: `Añade aquí la biografía de Flavita Banana.`,
            link: ``,
            works: []
        },
        'pedrita-parker': {
            img: `assets/optim/pedrita-parker-retrato.webp`,
            bio: `Añade aquí la biografía de Pedrita Parker.`,
            link: ``,
            works: []
        }
    }

    let renderArtist = (id) => {
        let data = artistData[id]
        if (!data) return

        let nombre = document.querySelector(`[data-artist="${id}"]`).textContent

        artistImg.src = data.img
        artistImg.alt = `Retrato de ${nombre}`
        artistName.textContent = nombre
        artistBio.textContent  = data.bio
        artistLink.href = data.link

        let workImgs = artistWorks.querySelectorAll(`.Artist-detail-work`)
        workImgs.forEach((img, i) => {
            img.src = data.works[i] || ``
            img.alt = data.works[i] ? `Obra ${i + 1} de ${nombre}` : ``
        })
    }

    let artistClickHandler = (e) => {
        artistButtons.forEach(btn => btn.classList.remove(`is-active`))
        e.currentTarget.classList.add(`is-active`)
        renderArtist(e.currentTarget.dataset.artist)
    }

    artistButtons.forEach(btn => {
        btn.addEventListener(`click`, artistClickHandler)
    })

    renderArtist(artistButtons[0].dataset.artist)
