function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const container = document.getElementById('palette-container');
const generateBtn = document.getElementById('generate-btn');

generatePalette();

function generatePalette() {

    container.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const color = getRandomColor();

        const card = document.createElement('div');
        card.classList.add('color-card');
        
        card.style.backgroundColor = color;
        card.textContent = color;

        container.appendChild(card);
    }
}

function generatePalette() {
    container.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const color = getRandomColor();

        const card = document.createElement('div');
        card.classList.add('color-card');
        card.style.backgroundColor = color;
        card.textContent = color;

        card.addEventListener('click', () => {
            navigator.clipboard.writeText(color);
            card.textContent = 'Copied!';

            setTimeout(() => {
                card.textContent = color;
            }, 1000);
        });

        container.appendChild(card);
    }
}

document.getElementById('generate-btn').addEventListener('click', generatePalette);

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        event.preventDefault(); 
        generatePalette();
    }
});

generatePalette();