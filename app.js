const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const player1_score = document.querySelector('#player1_score');
const player2_score = document.querySelector('#player2_score');
const reset = document.querySelector('#reset');
const select = document.querySelector('select');
let max = 5;


let acc1 = 0;
let acc2 = 0;
player1.addEventListener('click', function () {
    acc1 += 1;
    player1_score.innerText = acc1;
    if (player1_score.innerText == max) {
        player1.disabled = true;
        player2.disabled = true;
        whoWin();
    }
})
player2.addEventListener('click', function () {
    acc2 += 1;
    player2_score.innerText = acc2;
    if (player2_score.innerText == max) {
        player1.disabled = true;
        player2.disabled = true;
        whoWin();
    }
})
reset.addEventListener('click', function () {
    acc1 = 0;
    acc2 = 0;
    player1_score.innerText = 0;
    player2_score.innerText = 0;
    player1.disabled = false;
    player2.disabled = false;
    player1_score.style.color = '';
    player2_score.style.color = '';
})

select.addEventListener('change', function (e) {
    max = select.options[select.selectedIndex].value;
})

if (player1_score.innerText == max) {
    console.log('hello');
}

function whoWin() {
    if (player1_score.innerText > player2_score.innerText) {
        player1_score.style.color = 'green';
        player2_score.style.color = 'red'
    } else {
        player1_score.style.color = 'red';
        player2_score.style.color = 'green'
    }
}







