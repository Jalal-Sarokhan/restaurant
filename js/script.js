document.addEventListener('DOMContentLoaded', function() {
    const menuItems = [
        { 
            name: "Pizza Margherita", 
            description: "Tomaten, Mozzarella, Basilikum", 
            price: "8.50€", 
            image: "images/pizza_margherita.jpg",
            folder: "pizza_margherita"
        },
        { 
            name: "Spaghetti Carbonara", 
            description: "Spaghetti, Eier, Speck, Parmesan", 
            price: "9.50€", 
            image: "images/spaghetti_carbonara.jpg",
            folder: "spaghetti_carbonara"
        },
        { 
            name: "Tiramisu", 
            description: "Mascarpone, Espresso, Kakao", 
            price: "5.00€", 
            image: "images/tiramisu.jpg",
            folder: "tiramisu/"
        }
    ];

    const menuContainer = document.querySelector('.menu-items');

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
            // Weiterleitung zur Detailseite mit Parametern
            window.location.href = `detail.html?name=${encodeURIComponent(item.name)}&description=${encodeURIComponent(item.description)}&folder=${encodeURIComponent(item.folder)}`;
        });
        menuContainer.appendChild(menuItem);
    });
});
