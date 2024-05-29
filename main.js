// script.js
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function moveAndStyleCube() {
    const cube = document.getElementById('cube');
    const maxWidth = window.innerWidth - cube.clientWidth;
    const maxHeight = window.innerHeight - cube.clientHeight;

    const newLeft = getRandomInt(0, maxWidth);
    const newTop = getRandomInt(0, maxHeight);
    const newSize = getRandomInt(50, 150);
    const newColor = getRandomColor();
    const newOpacity = Math.random().toFixed(2);

    cube.style.left = `${newLeft}px`;
    cube.style.top = `${newTop}px`;
    cube.style.width = `${newSize}px`;
    cube.style.height = `${newSize}px`;
    cube.style.backgroundColor = newColor;
    cube.style.opacity = newOpacity;
}

setInterval(moveAndStyleCube, 2000);
