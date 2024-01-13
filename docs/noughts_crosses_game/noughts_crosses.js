
const first_area = document.getElementById('first_area');
const second_area = document.getElementById('second_area');
const third_area = document.getElementById('third_area');
const fourth_area = document.getElementById('fourth_area');
const fifth_area = document.getElementById('fifth_area');
const sixth_area = document.getElementById('sixth_area');
const seventh_area = document.getElementById('seventh_area');
const eighth_area = document.getElementById('eighth_area');
const nineth_area = document.getElementById('nineth_area');

let first_area_check = false;
let second_area_check = false;
let third_area_check = false;
let fourth_area_check = false;
let fifth_area_check = false;
let sixth_area_check = false;
let seventht_area_check = false;
let eighth_area_check = false;
let nineth_area_check = false;

let round = 1

function firstMove() {
    var first_player = confirm('clique em ok se quiser fazer a primeira jogada');
    console.log(first_player)
    if(first_player === false) {
        fifth_area.innerHTML = 'o'
        round = round + 1
        player_moves()
    }

    if(first_player === true) {
        player_moves()
    }
}

function player_moves() {
    console.log(round)
    first_area.onclick = () => {
        if(first_area_check === false) {
            first_area.innerHTML = 'x'
            first_area_check = true
            round = round + 1
            computer_move()
        }
    }
    
    second_area.onclick = () => {
        if(second_area_check === false) {
            second_area.innerHTML = 'x'
            second_area_check = true
            round = round + 1
            computer_move()
        }
    }
    
    third_area.onclick = () => {
        if(third_area_check === false) {
            third_area.innerHTML = 'x'
            third_area_check = true
            round = round + 1
            computer_move()
        }
    }

    fourth_area.onclick = () =>{
        if(fourth_area_check === false) {
            fourth_area.innerHTML = 'x'
            fourth_area_check = true
            round = round + 1
            computer_move()
        }
    }

    fifth_area.onclick = () => {
        if(fifth_area_check === false) {
            fifth_area.innerHTML = 'x'
            fifth_area_check = true
            round = round + 1
            computer_move()
        }
    }

    sixth_area.onclick = () => {
        if(sixth_area_check === false) {
            sixth_area.innerHTML = 'x'
            sixth_area_check = true
            round = round + 1
            computer_move()
        }
    }

    seventh_area.onclick = () => {
        if(seventht_area_check === false) {
            seventh_area.innerHTML = 'x'
            seventht_area_check = true
            round = round + 1
            computer_move()
        }
    }

    eighth_area.onclick = () => {
        if(eighth_area_check === false) {
            eighth_area.innerHTML = 'x'
            eighth_area_check = true
            round = round + 1
            computer_move()
        }
    }

    nineth_area.onclick = () => {
        if(nineth_area_check === false) {
            nineth_area.innerHTML = 'x'
            nineth_area_check = true
            round = round + 1
            computer_move()
        }
    }
}

function computer_move() {
    if(round === 2 && fifth_area_check === false){
        setTimeout(() => {
            fifth_area.innerHTML = 'o'
            fifth_area_check = true
            round = round + 1
            player_moves()
        }, 500)
    }
    if(round === 2 && fifth_area_check === true) {
        console.log('aqui')
        let randomPlay = Math.floor(Math.random() * 9);
        while(randomPlay === 5) {
            randomPlay = Math.floor(Math.random() * 9);
        }
        randomMove = randomArea(randomPlay)
        round = round + 1
        player_moves()
    }
    if(round === 3){
        console.log('3')
    }
    console.log(round)
}

function randomArea(randomPlay) {
    if (randomPlay === 1) {
        setTimeout(() => {
            first_area.innerHTML = 'o'
            first_area_check = true
        }, 500)
        return
    }
    if (randomPlay === 2) {
        second_area.innerHTML = 'o'
        second_area_check = true
        return
    }
    if (randomPlay === 3) {
        third_area.innerHTML = 'o'
        third_area_check = true
        return
    }
    if (randomPlay === 4) {
        fourth_area.innerHTML = 'o'
        fourth_area_check = true
        return
    }
    if (randomPlay === 6) {
        sixth_area.innerHTML = 'o'
        sixth_area_check = true
        return
    }
    if (randomPlay === 7) {
        seventh_area.innerHTML = 'o'
        seventht_area_check = true
        return
    }
    if (randomPlay === 8) {
        eighth_area.innerHTML = 'o'
        eighth_area_check = true
        return
    }
    if (randomPlay === 9) {
        nineth_area.innerHTML = 'o'
        nineth_area_check = true
        return
    }
}

firstMove();