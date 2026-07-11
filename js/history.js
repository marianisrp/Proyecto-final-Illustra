const eraSections = document.querySelectorAll('.Era');
const navItems = document.querySelectorAll('.Timeline-item');
const lightbox = document.getElementById('ArtistLightbox');
const lightboxImage = document.getElementById('ArtistLightboxImage');
const lightboxTitle = document.getElementById('ArtistLightboxTitle');
const lightboxDescription = document.getElementById('ArtistLightboxDescription');
const lightboxClose = document.querySelector('.Lightbox-close');
const lightboxOverlay = document.querySelector('.Lightbox-overlay');
const artistCards = document.querySelectorAll('.Artist-card');

const openLightbox = (card) => {
    if (!lightbox || !lightboxImage || !lightboxTitle || !lightboxDescription) {
        return;
    }

    const image = card.dataset.image || '';
    const title = card.dataset.title || card.querySelector('h3')?.textContent || 'Artista';
    const description = card.dataset.description || card.querySelector('p')?.textContent || '';

    lightboxImage.src = image;
    lightboxImage.alt = title;
    lightboxTitle.textContent = title;
    lightboxDescription.textContent = description;
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
    if (!lightbox) {
        return;
    }

    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
};

artistCards.forEach((card) => {
    card.addEventListener('click', () => openLightbox(card));

    card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openLightbox(card);
        }
    });
});

if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
}

if (lightboxOverlay) {
    lightboxOverlay.addEventListener('click', closeLightbox);
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeLightbox();
    }
});

if (eraSections.length && navItems.length) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                eraSections.forEach((section) => section.classList.remove('is-active'));
                navItems.forEach((item) => item.classList.remove('is-active'));

                entry.target.classList.add('is-active');
                const targetId = entry.target.id;
                const activeItem = document.querySelector(`.Timeline-item[data-target="${targetId}"]`);
                if (activeItem) {
                    activeItem.classList.add('is-active');
                }
            }
        });
    }, {
        threshold: 0.45
    });

    eraSections.forEach((section) => observer.observe(section));
}
