const dishes = {
    lumpia: {
        title: "Lumpiang Shanghai",
        image: "img/lumpia-shanghai.jpg",
        description: "Lumpiang Shanghai is a popular Filipino appetizer consisting of crispy, golden-brown spring rolls filled with a savory mixture of ground pork, finely chopped vegetables, and aromatic seasonings. Served with a sweet and tangy dipping sauce, this dish offers a perfect balance of flavors—crispy on the outside, juicy and flavorful on the inside. Whether enjoyed as a snack, party food, or part of a festive meal, Lumpiang Shanghai is a timeless Filipino favorite that never fails to delight.",
        category: "Appetizer",
        hours: "10AM - 10PM",
        price: "₱180-400"
    },
    inasal: {
        title: "Chicken Inasal",
        image: "img/chicken-inasal.jpg",
        description: "Chicken Inasal is a well-loved Filipino grilled chicken dish, marinated in a flavorful blend of calamansi juice, vinegar, annatto oil, garlic, ginger, and a mix of special spices. This marinade infuses the meat with a rich, tangy, and smoky taste while keeping it incredibly tender and juicy. Grilled over hot charcoal, the chicken develops a beautifully charred exterior, locking in all the delicious flavors. Chicken Inasal is a dish that perfectly embodies the bold and vibrant flavors of Filipino cuisine.",
        category: "Grill/Main Dish",
        hours: "11AM - 9PM",
        price: "₱280-480"
    },
    leche_flan: {
        title: "Leche Flan",
        image: "img/leche-flan.jpg",
        description: "Leche Flan is a rich, creamy, and velvety caramel custard dessert that is a staple in Filipino celebrations. The flan is topped with a golden caramel sauce, which adds a delightful sweetness that perfectly balances its creamy consistency. Once inverted onto a plate, the glossy caramel cascades down, creating an irresistible presentation. With its melt-in-your-mouth goodness and indulgent flavor, Leche Flan is a timeless dessert that embodies the warmth and sweetness of Filipino hospitality.",
        category: "Dessert",
        hours: "10AM - 10PM",
        price: "₱120-380"
    },
    sinigang: {
        title: "Sinigang",
        image: "img/sinigang.jpg",
        description: "Sinigang is a beloved Filipino sour soup known for its bold, tangy, and comforting flavors. This dish features tender pork simmered in a flavorful broth infused with tamarind, which gives it its signature sourness. A medley of fresh vegetables such as kangkong, radish, eggplant, string beans, and tomatoes add texture and depth to the dish. The balance of savory and sour flavors makes Sinigang a perfect companion to steamed rice, offering a refreshing contrast to rich and hearty meals.",
        category: "Main Dish",
        hours: "12PM - 10PM",
        price: "₱220-840"
    }
};

// Open popup
function openPopup(dishKey) {
    const popup = document.querySelector(".popup-overlay");
    const popupTitle = document.getElementById("popup-title");
    const popupImage = document.getElementById("popup-image");
    const popupDescription = document.getElementById("popup-description");
    const popupCategory = document.getElementById("popup-category");
    const popupHours = document.getElementById("popup-hours");
    const popupPrice = document.getElementById("popup-price");

    if (dishes[dishKey]) {
        popupTitle.innerText = dishes[dishKey].title;
        popupImage.src = dishes[dishKey].image;
        popupDescription.innerText = dishes[dishKey].description;
        popupCategory.innerText = `Category: ${dishes[dishKey].category}`;
        popupHours.innerText = `Open: ${dishes[dishKey].hours}`;
        popupPrice.innerText = `Price: ${dishes[dishKey].price}`;
    }

    popup.classList.add("active");
}

// Close popup
function closePopup() {
    const popup = document.querySelector(".popup-overlay");
    popup.classList.remove("active");
}

// Attach event listeners
document.querySelectorAll(".menu-card").forEach(card => {
    card.addEventListener("click", function() {
        const dishKey = this.getAttribute("data-dish");
        openPopup(dishKey);
    });
});

document.querySelector(".btn-main-menu").addEventListener("click", closePopup);
