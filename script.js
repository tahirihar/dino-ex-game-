'use strict';
const dino = document.querySelector('#dino');
const cactus = document.querySelector('#cactus');
const wrapper = document.querySelector('.wrapper');
const btn = document.querySelector('.header');

document.addEventListener('keydown', function (e) {
    e.preventDefault();
    jump();
});

function jump() {
    if (dino.classList != 'jump') {
        dino.classList.add('jump');
    }
    setTimeout(function () {
        dino.classList.remove('jump');
    }, 300);
}

let gameOver = false;
let isAlive = setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140 && !gameOver) {
        wrapper.classList.add('gray');
        cactus.classList.add('paused');
        dino.classList.add('paused');
        document.querySelector('h1').innerText = 'GAME OVER ';
        btn.insertAdjacentHTML("beforeend", `
            <button id="reloadBtn" type="submit">Перезагрузить игру</button>
        `);
        gameOver = true;
        const reloadBtn = document.querySelector('#reloadBtn');
        reloadBtn.addEventListener('click', function () {
            location.reload();
        });
    }
}, 100);