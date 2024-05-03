function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

// funkcja do zmiany koloru
function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomHexColor();
}

let intervalid = null;

const body = document.querySelector('body');
const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');

// funkcjonalność przycisku Start
buttonStart.addEventListener('click', () => {
    buttonStart.disabled = true; //po kliknięciu przycisk Start zostaje wyłączony
    buttonStop.disabled = false; // przycisk Stop zostaje uaktywoniony
    intervalid = setInterval(changeBackgroundColor, 1000); // włączenie funkcji zmiany koloru tła
})

// funkcjonalność przycisku Stop
buttonStop.addEventListener('click', function () {
    buttonStop.disabled = true; //po kliknięciu przycisk Stop zostaje wyłączony
    buttonStart.disabled = false; // przycisk Start zostaje uaktywoniony
    clearInterval(intervalid) ; // wyłączenie funkcji na zmianę koloru
})

