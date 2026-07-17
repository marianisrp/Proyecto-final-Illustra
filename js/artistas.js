'use strict'

const artistButtons = document.querySelectorAll(`.Artist-list-button`)
const artistImg = document.querySelector(`#artistImg`)
const artistName = document.querySelector(`#artistName`)
const artistBio = document.querySelector(`#artistBio`)
const artistLink = document.querySelector(`#artistLink`)
const artistWorks = document.querySelector(`#artistWorks`)


console.log(artistButtons)
console.log(artistImg)
console.log(artistName)
console.log(artistBio)
console.log(artistLink)
console.log(artistWorks)

// Hecho con ayuda de IA


const artistData = {
    'ana-jaren': {
        img: `assets/optim/ana-jaren.webp`,
        bio: `Ana Jarén (Sevilla, 1985) inició su carrera profesional como ilustradora en el sector de la comunicación de moda. En su obra, Ana captura el día a día, las personas y los espacios que habitan, parando con gusto en los pequeños detalles, con una mirada onírica. Ha trabajado para numerosas marcas y medios de comunicación internacionales como The Washington Post, El Mundo, Fnac o Vogue, entre muchosotros. Es la autora de Escritoras (Lumen, 2023), Girls Who Green the World (2022), Astrología para colorear (P&J, 2022) o Almudena (Lumen, 2024), uno de los mejores libros de 2024 según Vogue. `,
        link: `https://anajaren.com/`,

    },
    'maria-hesse': {
        img: `assets/optim/maria-hesse-ret.webp`,
        bio: `María Hesse (1982) es una ilustradora española reconocida por su estilo poético y su universo visual lleno de sensibilidad. Ha colaborado con editoriales, revistas y marcas de prestigio, además de publicar obras como Frida Kahlo. Una biografía y una edición ilustrada de Orgullo y prejuicio. En 2020 fue seleccionada por Taschen entre las 100 mejores ilustradoras del mundo, consolidándose como una de las voces más destacadas de la ilustración contemporánea. `,
        link: `https://www.mariahesse.es/`,

    },
    'la-mumina': {
        img: `assets/optim/LaMumina.webp`,
        bio: `Laura, conocida artísticamente como Mumina, es una ilustradora argentina afincada en Sevilla. Formada en Diseño Gráfico en Buenos Aires, tras casi una década al frente de su propio bar decidió reinventarse y retomar el dibujo, una pasión que siempre la había acompañado. Su obra está inspirada en bares, bebidas y escenas de la vida cotidiana, combinando referencias a la gráfica vintage, la tipografía y la publicidad de otras épocas para crear un universo visual cálido y lleno de nostalgia. `,
        link: `https://www.lamumina.com/`,

    },
    'esther-gili': {
        img: `assets/optim/esther-gili.webp`,
        bio: `Esther Gili (Madrid, 1981). Estudió ilustración en la Escuela de Arte no10 de Madrid. Desde entonces trabaja como ilustradora para varias editoriales y colabora regularmente con USER T38 realizando trabajos para cine y publicidad. Para Lunwerg ha publicado 39 semanas (2016) y El legado de Catherine Elliot (2018), junto a Gemma Camblor, y para Planeta Cómic ha realizado la cubierta de la antología Voces que cuentan (2021) Su técnica favorita es la acuarela y la usa siempre que puede. En sus obras solemos encontrar mujeres con carácter que nos hablan desde el silencio de papel. `,
        link: `http://www.esthergili.com/`,

    },
    'flavita-banana': {
        img: `assets/optim/flavita-banana.webp`,
        bio: `Flavita Banana (Oviedo, 1987) es una ilustradora y humorista gráfica española reconocida por sus viñetas de trazo sencillo, ironía y sensibilidad. Tras formarse en la Escola Massana de Barcelona, comenzó a publicar en medios como S Moda, Mongolia y El País, donde colabora de forma habitual desde 2021. Autora de varias recopilaciones de humor gráfico, ha recibido reconocimientos como el Premio Gat Perich, el Premio Gràffica, el Premio Elgar y el Premio Mingote. Su obra combina humor, crítica social y una mirada tan cotidiana como mordaz.`,
        link: `https://www.flavitabanana.com/`,
   
    },
    'pedrita-parker': {
        img: `assets/optim/pedrita-parker.webp`,
        bio: `Pedrita Parker (Estefi Martínez) es una ilustradora, escritora y emprendedora malagueña conocida por un estilo fresco, colorido y cargado de humor. A través de sus ilustraciones aborda temas como la salud mental, el universo femenino y las relaciones personales. Desde 2014 dirige su propia marca, con la que diseña productos y publica contenido creativo, además de impartir conferencias, escribir libros y exponer su obra en museos y festivales. En 2023 recibió el Premio Meridiana por su labor de divulgación y comunicación en redes sociales..`,
        link: `https://pedritaparker.com/`,

    }
}

let renderArtist = (id) => {
    let data = artistData[id]
    if (!data) return

    let nombre = document.querySelector(`[data-artist="${id}"]`).textContent

    artistImg.src = data.img
    artistImg.alt = `Retrato de ${nombre}`
    artistName.textContent = nombre
    artistBio.textContent = data.bio
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
