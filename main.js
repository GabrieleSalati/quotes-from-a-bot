// VARIABLES

const loader = document.querySelector(".loader");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const modalClose = document.querySelector(".modal-close");
const api_key = "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";
const model = "gpt-3.5-turbo";
const api_url = "https://api.openai.com/v1/chat/completions";


// FUNCTIONS

async function characterQuote(characterName) {
    // show loader
    loader.classList.remove("loader-hidden");
    // API request
    const action = "Greet me in your signature style";
    const temperature = 0.4;
    // get response
    const response = await fetch(api_url, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "authorization": `Bearer ${api_key}`
        },
        body: JSON.stringify({
            model: model,
            messages: [
                {
                    role: "user",
                    content: `You are ${characterName} and you have to ${action} in a maximum of 100 words and without quitting character`
                }
            ],
            temperature: temperature,
        })
    })
    // decode JSON
    const data = await response.json();
    // compile modal
    const message = data.choices[0].message.content;
    modalContent.innerHTML = `
                    <h2>${characterName}</h2>
                    <p>${message}</p>
                    <code>Character: ${characterName}, Action:${action} Temperature${temperature}</code>`
    // hide loader, show modal
    loader.classList.add("loader-hidden");
    modal.classList.remove("modal-hidden");
}

// EVENTS

const characters = document.querySelectorAll(".character");

characters.forEach(function (element) {
    element.addEventListener("click", function () {
        characterQuote(element.dataset.character);
    })
}),

    modalClose.addEventListener("click", function () {
        modal.classList.add("modal-close");
    })