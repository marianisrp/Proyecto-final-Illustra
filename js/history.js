const eraSections = document.querySelectorAll('.Era');
const navItems = document.querySelectorAll('.Timeline-item');

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
