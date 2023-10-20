const moveButton = document.getElementById('moveButton');
let currentX = 0;
let currentY = 0;

moveButton.addEventListener('mouseenter', () => {
    const maxX = window.innerWidth - moveButton.offsetWidth;
    const maxY = window.innerHeight - moveButton.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    const randomSize = Math.floor(Math.random() * 100) + 50; // Taille aléatoire entre 50 et 150 pixels

    const deltaX = randomX - currentX;
    const deltaY = randomY - currentY;

    currentX = randomX;
    currentY = randomY;

    moveButton.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${randomSize / 100})`;
});

// Réinitialise la position lorsque la souris quitte la fenêtre
document.addEventListener('mouseleave', () => {
    moveButton.style.transform = 'translate(0, 0) scale(1)';
});

const numberContainer = document.getElementById('number-container');
const delay = 100; // Délai entre chaque changement de nombre en millisecondes

function getRandomNumber() {
    return Math.floor(Math.random() * 10); // Génère un nombre aléatoire de 0 à 9
}

function generateRandomNumbers() {
    const randomNumber = getRandomNumber();
    numberContainer.textContent += randomNumber;

    // Fait défiler le contenu
    numberContainer.scrollLeft = numberContainer.scrollWidth;

    setTimeout(generateRandomNumbers, delay);
}

generateRandomNumbers();

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change d'image toutes les 2 secondes
}


