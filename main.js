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

// ----------------------------
// Scroll Up

const scrollUpButton = document.querySelector(".scroll-up");

// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
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

// -----------------
// // COUNTDOWN

// // The data/time we want to countdown to
let countDownDate = new Date("Dec 29, 2023 17:34:00").getTime();

// // Run myfunc every second

let myfunc = () => {
    let now = new Date().getTime();
    let timeleft = countDownDate - now;
    //     // Calculating the days, hours, minutes and seconds left

    //     /*
    //     second = 1000
    //     minutes = second * 60
    //     hour = minutes * 60
    //     day = hour * 24
    //      */

    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    if (days < 10) {
        days = "0" + days;
    }
    let hours = Math.floor(
        (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    if (hours < 10) {
        hours = "0" + hours;
    }
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    //     // Result is output to the specific element

    document.querySelector("#days span").innerHTML = days;
    document.querySelector("#hours span").innerHTML = hours;
    document.querySelector("#mins span").innerHTML = minutes;
    document.querySelector("#secs span").innerHTML = seconds;

    //     // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.querySelector("#days span").innerHTML = "00";
        document.querySelector("#hours span").innerHTML = "00";
        document.querySelector("#mins span").innerHTML = "00";
        document.querySelector("#secs span").innerHTML = "00";

        document.querySelector("#end").innerHTML = "HAPPY BIRTHDAY TO ME!";
        document.querySelector("#end").style.display = "block";
        document.querySelector(".countdown div").style.display = "none";
    }
};

setInterval(myfunc, 1000);

// Slider

const slider = document.querySelector(".slider");
const arrowIcons = document.querySelectorAll(".brands-container i");

arrowIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
        if (icon.classList.contains("fa-chevron-right")) {
            slider.scrollLeft += 200;
        } else {
            slider.scrollLeft -= 200;
        }
    });
}
);
