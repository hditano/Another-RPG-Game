const mainGrid = document.querySelector('.main-grid');
const player = document.querySelector('.player');
const grid = document.querySelectorAll('.grid');
let squares = [];
let playerPos = [34];
let apples = [];
let direction = 1;
let width = 10;

function createDiv() {
    for (let i = 0; i < 100; i++) {
        const myDiv = document.createElement('div');
        myDiv.classList.add('grid');
        mainGrid.appendChild(myDiv);
        squares.push(myDiv);
    }
}

function createPlayer() {
    squares.forEach(() => squares[playerPos].classList.add('player'));
}

function createApples() {
    let myApples = Math.floor(Math.random() * squares.length + 1)
    apples.push(myApples);
    apples.forEach(index => squares[index].classList.add('apples'));

    for (let i = 0; i < squares.length; i++) {
        if (squares[i].classList.contains('apples')) {
            squares[i].textContent = 'Apple';
        }
    }
}

function control(e) {
    if (e.key === 'ArrowLeft') {
        direction = -1;
        console.log('Left');
        playerPos.unshift(playerPos[0] + direction);
        squares[playerPos[0]].classList.add('player');
        squares[playerPos[1]].classList.remove('player');
        playerPos.pop();
    } else if (e.key === 'ArrowRight') {
        direction = +1;
        console.log('right');
        playerPos.unshift(playerPos[0] + direction);
        squares[playerPos[0]].classList.add('player');
        squares[playerPos[1]].classList.remove('player');
        playerPos.pop();
    } else if (e.key === 'ArrowDown') {
        direction = +width;
        playerPos.unshift(playerPos[0] + direction);
        squares[playerPos[0]].classList.add('player');
        squares[playerPos[1]].classList.remove('player');
        playerPos.pop();
    } else if (e.key === 'ArrowUp') {
        direction = -width;
        playerPos.unshift(playerPos[0] + direction);
        squares[playerPos[0]].classList.add('player');
        squares[playerPos[1]].classList.remove('player');
        playerPos.pop();
    }
}

document.addEventListener('keydown', control);


createDiv();
createPlayer();
createApples();