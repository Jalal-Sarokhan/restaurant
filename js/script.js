document.addEventListener('DOMContentLoaded', function() {
    const menuItems = [
        { name: "Pizza Margherita", description: "Tomaten, Mozzarella, Basilikum", price: "8.50€", image: "images/pizza_margherita.jpg", link: "pizza_margherita.html" },
        { name: "Spaghetti Carbonara", description: "Spaghetti, Eier, Speck, Parmesan", price: "9.50€", image: "images/spaghetti_carbonara.jpg", link: "spaghetti.html" },
        { name: "Tiramisu", description: "Mascarpone, Espresso, Kakao", price: "5.00€", image: "images/tiramisu.jpg", link: "tiramisu.html" }
    ];

    const menuContainer = document.querySelector('.menu-items');

    if (menuContainer) {
        menuItems.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            menuItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p class="menu-item-price">${item.price}</p>
            `;
            menuItem.addEventListener('click', () => {
                window.location.href = item.link;
            });
            menuContainer.appendChild(menuItem);
        });
    }

    const gallery = document.querySelector('.image-gallery');

    if (gallery) {
        const page = window.location.pathname.split('/').pop();

        const images = {
            "pizza_margherita.html": [
                "images/pizza_margherita/pizza_margherita_1.jpg",
                "images/pizza_margherita/pizza_margherita_2.jpg",
                "images/pizza_margherita/pizza_margherita_3.jpg",
                "images/pizza_margherita/pizza_margherita_4.jpg",
                "images/pizza_margherita/pizza_margherita_5.jpg"
            ],
            "spaghetti.html": [
                "images/spaghetti/spaghetti_1.jpg",
                "images/spaghetti/spaghetti_2.jpg",
                "images/spaghetti/spaghetti_3.jpg",
                "images/spaghetti/spaghetti_4.jpg",
                "images/spaghetti/spaghetti_5.jpg"
            ],
            "tiramisu.html": [
                "images/tiramisu/tiramisu_1.jpg",
                "images/tiramisu/tiramisu_2.jpg",
                "images/tiramisu/tiramisu_3.jpg"
            ]
        };

        const currentImages = images[page] || [];

        currentImages.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.classList.add('gallery-item');
            gallery.appendChild(img);
        });

        const galleryItems = document.querySelectorAll('.gallery-item');
        let focusedIndex = Math.floor(galleryItems.length / 2);

        function updateGallery() {
            const galleryRect = gallery.getBoundingClientRect();
            const halfVisibleCount = Math.floor(gallery.offsetWidth / 2 / galleryItems[0].offsetWidth);
            const firstVisibleIndex = focusedIndex - halfVisibleCount;
            const lastVisibleIndex = focusedIndex + halfVisibleCount;

            galleryItems.forEach((item, index) => {
                const position = index - focusedIndex;

                if (position < -halfVisibleCount) {
                    item.style.order = position + galleryItems.length;
                } else if (position > halfVisibleCount) {
                    item.style.order = position - galleryItems.length;
                } else {
                    item.style.order = position;
                }

                item.classList.remove('focused');
                if (index === focusedIndex) {
                    item.classList.add('focused');
                    const focusedItemRect = item.getBoundingClientRect();
                    const scrollLeft = gallery.scrollLeft + focusedItemRect.left - galleryRect.left - (gallery.offsetWidth - focusedItemRect.width) / 2;
                    gallery.scrollTo({
                        left: scrollLeft,
                        behavior: 'smooth'
                    });
                }
            });
        }

        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                focusedIndex = index;
                updateGallery();
            });
        });

        // Initial zentrieren des mittleren Bildes
        updateGallery();
    }
});

function goBack() {
    window.history.back();
}
