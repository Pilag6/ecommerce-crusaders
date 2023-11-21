// Add cart counter on click

// Get the cart Count (0) and cart Icon elements and store them in varables

const cartCount = document.querySelector(".cart-count");
const cartIcon = document.querySelector(".cart-icon");

const cartCounterHandler = () => {
    // First get the current value of the cart count element and store it in a variable called counter
    let counter = cartCount.innerHTML;

    // Then convert the value of counter to a number and add 1 to it
    counter = Number(counter) + 1;

    // Finally, set the value of the cart count element to the value of counter
    cartCount.innerHTML = counter;

    console.log(counter);
};

// Add an event listener to the cart element and call the cartCounterHandler function when the cart is clicked
cartIcon.addEventListener("click", cartCounterHandler);

// Scroll Up

const scrollUpButton = document.querySelector(".scroll-up");

// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
    ) {
        scrollUpButton.style.display = "block";
    } else {
        scrollUpButton.style.display = "none";
    }
}


scrollUpButton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
