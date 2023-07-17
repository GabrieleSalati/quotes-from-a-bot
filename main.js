// VARIABLES

const loader = document.querySelector(".loader");


// FUNCTIONS

function characterQuote(characterName) {
    // show loader
    loader.classList.remove("loader-hidden");
    // API request

    // get response

    // decode JSON

    // compile modal

    // hide loader, show modal
}

// EVENTS

const characters = document.querySelectorAll(".character");

characters.forEach(function (element) {
    element.addEventListener("click", function () {
        characterQuote(element.dataset.character);
    })
})