const mainGrid = document.querySelector('.main-grid');
const grid = document.querySelectorAll('.grid');
const numberApples = document.querySelector('.number-apples');
let squares = [];
let playerPos = [34];
let apples = [];
let direction = 1;
let width = 10;
let numApples = 0;

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

}

function harvest() {
    for (let i = 0; i < squares.length; i++) {
        if (squares[i].classList.contains('apples') && squares[i].classList.contains('player')) {
            squares[i].classList.remove('apples');
            numApples += 1;
            numberApples.textContent = numApples;
            apples.pop();
            squares[i].textContent = '';
            createApples();
        }
    }
}

function animateScript() {
    document.querySelector('.player').style.backgroundPosition = `-256px 0px`;
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
    } else if (e.key === 'Control') {
        harvest();
    }
}

document.addEventListener('keydown', control);


createDiv();
createPlayer();
createApples();