import '../scss/styles.scss'
import 'bootstrap'

const generateCard = () => {
    const pips = document.querySelectorAll(".pip");
    const value = document.querySelector("#value");

    const valueArray = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
    const pipArray= [
        '<i class="bi bi-suit-club-fill pip-size"></i>',
        '<i class="bi bi-suit-spade-fill pip-size"></i>',
        '<i class="bi bi-diamond-fill pip-size" style="color: red"></i>',
        '<i class="bi bi-suit-heart-fill pip-size" style="color: red"></i>'
    ];
    const cardValue = valueArray[randomIndex(valueArray)];
    
    if(cardValue === 'A')
    {
        const cardPip = pipArray[randomIndex(pipArray)]; 
        value.innerHTML = cardPip;
        for(let pip of pips)
        {
            pip.innerHTML = cardValue;
            pip.classList.add("pip");
        }
        console.log("1");
    }
    else
    {
        const cardPip = pipArray[randomIndex(pipArray)];
        value.innerHTML = cardValue;
        for(let pip of pips)
        {
            pip.innerHTML = cardPip;
            pip.classList.add("pip");
        }
        console.log("2")
    }
}

const randomIndex = (array) => {
    return Math.floor(Math.random() * array.length)
};

window.onload = () => {
    generateCard();
}
