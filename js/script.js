document.addEventListener('DOMContentLoaded', function() {
    const menuItems = [
        { name: "Pizza Margherita", description: "Tomaten, Mozzarella, Basilikum", price: "8.50€", image: "images/pizza_margherita.jpg", link: "pizza_margherita.html" },
        { name: "Spaghetti Carbonara", description: "Spaghetti, Eier, Speck, Parmesan", price: "9.50€", image: "images/spaghetti_carbonara.jpg", link: "spaghetti.html" },
        { name: "Tiramisu", description: "Mascarpone, Espresso, Kakao", price: "5.00€", image: "images/tiramisu.jpg", link: "tiramisu.html" }
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
            window.location.href = item.link;
        });
        menuContainer.appendChild(menuItem);
    });
});
