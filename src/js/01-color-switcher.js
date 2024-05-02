function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

// funkcja do zmiany koloru ustawiona na co jedną sekundę
function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomHexColor();  
    setTimeout(changeBackgroundColor, 1000);
}

const buttonStart = document.querySelectorAll('button[data-start]');
const buttonStop = document.querySelectorAll('button[data-stop]');

// funkcjonalność przycisku Start
buttonStart.addEventListener('click', function(changeBackgroundColor) {
    this.disabled = true; //po kliknięciu przycisk Start zostaje wyłączon
    buttonStop.disabled = false; // przycisk Stop zostaje uaktywoniony
    changeBackgroundColor(); // włączenie funkcji zmiany koloru tła
})

// funkcjonalność przycisku Stop
buttonStop.addEventListener('click', function() {
    this.disabled = true; //po kliknięciu przycisk Stop zostaje wyłączony
    buttonStart.disabled = false; // przycisk Start zostaje uaktywoniony
    return (changeBackgroundColor).reject ; // wyłączenie funkcji na zmianę koloru
})

