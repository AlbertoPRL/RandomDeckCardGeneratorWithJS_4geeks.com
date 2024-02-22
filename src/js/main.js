import '../scss/styles.scss'
import 'bootstrap'

const newCardContainer = document.querySelector("#card-container");
const button = document.querySelector("#button");

const valueArray = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const pipArray = [
    '<i class="bi bi-suit-club-fill pip-size"></i>',
    '<i class="bi bi-suit-spade-fill pip-size"></i>',
    '<i class="bi bi-diamond-fill pip-size" style="color: red"></i>',
    '<i class="bi bi-suit-heart-fill pip-size" style="color: red"></i>'
];

const generateCard = () => { 
    let pips = document.querySelectorAll(".pip");
    let value = document.querySelector("#value");  
    const newCardValue = valueArray[randomIndex(valueArray)];
    const newCardPip = pipArray[randomIndex(pipArray)];
    value.innerHTML = newCardValue;
    for (let pip of pips) {
        pip.innerHTML = newCardPip;
        pip.classList.add("pip");
    }
};

const randomIndex = (array) => {
    return Math.floor(Math.random() * array.length)
};

const appendCard = () => 
{
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `<div class="w-100 d-flex align-items-center justify-content-start ps-4 pip">
    </div>
    <div class="w-100 d-flex align-items-center justify-content-center">
        <p class="large" id="value">8</p>
    </div>
    <div class="w-100 d-flex align-items-center justify-content-end px-4 pip">
    </div>`;
    newCardContainer.appendChild(newDiv);
    generateCard();
}

window.onload = () => {
    button.addEventListener("click", appendCard, false);
}
