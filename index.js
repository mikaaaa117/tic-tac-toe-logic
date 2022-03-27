const cubes = document.querySelectorAll('.cube') // All the cells where the cross or zero is set
const title = document.querySelector('.title') // h1 element where will output result of game
const reset = document.querySelector('.reset') // button element for Reset game

let currentPlayer = 'x';

/*
    Indexes of Board
    [0] [1] [2]
    [3] [4] [5]
    [6] [7] [8]
*/

const combination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const checkWinner = () => {
    for (let i = 0; i < combination.length; i++) {
        let [a, b, c] = combination[i];
        if(cubes[a].textContent === 'x' && cubes[b].textContent === 'x' && cubes[c].textContent === 'x') {
            title.textContent = 'x win'
        } else if(cubes[a].textContent === 'o' && cubes[b].textContent === 'o' && cubes[c].textContent === 'o') {
            title.textContent = 'o win'
        }
    }
    let g = 0;
    cubes.forEach(item => {
        if (item.textContent !== '') g++
    })
    if (g == 9) title.textContent = 'draw'
}

const switchPlayer = () => {
    currentPlayer === 'x' ? currentPlayer = 'o' : currentPlayer = 'x'
}

const addChar = (item) => {
    if (item.textContent === '') {
        item.textContent = currentPlayer;
        switchPlayer();
        checkWinner();
    }
}

reset.addEventListener("click", () => {
    cubes.forEach(item => item.textContent = '')
    currentPlayer ='x'
    title.textContent = ''
})

cubes.forEach(item => item.addEventListener("click", () => addChar(item)))