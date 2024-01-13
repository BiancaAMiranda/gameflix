
const first_area = document.getElementById('first_area');
const second_area = document.getElementById('second_area');
const third_area = document.getElementById('third_area');
const fourth_area = document.getElementById('fourth_area');
const fifth_area = document.getElementById('fifth_area');
const sixth_area = document.getElementById('sixth_area');
const seventh_area = document.getElementById('seventh_area');
const eighth_area = document.getElementById('eighth_area');
const nineth_area = document.getElementById('nineth_area');

let first_area_check = '';
let second_area_check = '';
let third_area_check = '';
let fourth_area_check = '';
let fifth_area_check = '';
let sixth_area_check = '';
let seventh_area_check = '';
let eighth_area_check = '';
let nineth_area_check = '';

let player = true;
let round = 1

function firstMove() {
    player = confirm('clique em ok se quiser fazer a primeira jogada');
    if(player === false) {
        setTimeout(() => {
            fifth_area.innerHTML = 'o'
            round = round + 1
        }, 500)
        player_moves()
        return
    }

    if(player === true) {
        player_moves()
        return
    }
}

function player_moves() {
    first_area.onclick = () => {
        if(first_area_check === '' && player === true) {
            first_area.innerHTML = 'x'
            first_area_check = 'x'
            round = round + 1
            player = false
            computer_move()
            return
        }
    }
    
    second_area.onclick = () => {
        console.log(player)
        if(second_area_check === ''  && player === true) {
            second_area.innerHTML = 'x'
            second_area_check = 'x'
            round = round + 1
            player = false
            computer_move()
            return
        }
    }
    
    third_area.onclick = () => {
        if(third_area_check === ''  && player === true) {
            third_area.innerHTML = 'x'
            third_area_check = 'x'
            round = round + 1
            player = false
            computer_move()
            return
        }
    }

    fourth_area.onclick = () =>{
        if(fourth_area_check === ''  && player === true) {
            fourth_area.innerHTML = 'x'
            fourth_area_check = 'x'
            round = round + 1
            player = false
            computer_move()
            return
        }
    }

    fifth_area.onclick = () => {
        if(fifth_area_check === ''  && player === true) {
            fifth_area.innerHTML = 'x'
            fifth_area_check = 'x'
            round = round + 1
            player = false
            computer_move()
            return
        }
    }

    sixth_area.onclick = () => {
        if(sixth_area_check === ''  && player === true) {
            sixth_area.innerHTML = 'x'
            sixth_area_check = 'x'
            round = round + 1
            player = false
            computer_move()
            return
        }
    }

    seventh_area.onclick = () => {
        if(seventh_area_check === ''  && player === true) {
            seventh_area.innerHTML = 'x'
            seventh_area_check = 'x'
            round = round + 1
            player = false
            computer_move()
            return
        }
    }

    eighth_area.onclick = () => {
        if(eighth_area_check === ''  && player === true) {
            eighth_area.innerHTML = 'x'
            eighth_area_check = 'x'
            round = round + 1
            player = false
            computer_move()
            return
        }
    }

    nineth_area.onclick = () => {
        if(nineth_area_check === ''  && player === true) {
            nineth_area.innerHTML = 'x'
            nineth_area_check = 'x'
            round = round + 1
            player = false
            computer_move()
            return
        }
    }
    return
}

function computer_move() {
    if(round === 2 && fifth_area_check === '' && player === false){
        setTimeout(() => {
            fifth_area.innerHTML = 'o'
            fifth_area_check = 'o'
            round = round + 1
            player = true
            player_moves()
        }, 1000)
        return
    }
    if(round === 2 && fifth_area_check === 'x' && player === false) {
        console.log('aqui')
        let randomPlay = Math.floor(Math.random() * 9) + 1;
        while(randomPlay === 5) {
            randomPlay = Math.floor(Math.random() * 9);
        }
        randomMove = randomArea(randomPlay)
        round = round + 1
        player = true
        player_moves()
        return
    }
    if(round >= 3 && player === false){
        let win = verifyPossibleWin()
        console.log('tem possibilidade de ganhar', win)
        if (win === false) {
            strategy()
            round = round + 1
            player = true
            player_moves()
            return
        }
        return
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
        setTimeout(() => {
            second_area.innerHTML = 'o'
            second_area_check = true
        }, 500)
        return
    }
    if (randomPlay === 3) {
        setTimeout(() => {
            third_area.innerHTML = 'o'
            third_area_check = true
        }, 500)
        return
    }
    if (randomPlay === 4) {
        setTimeout(() => {
            fourth_area.innerHTML = 'o'
            fourth_area_check = true
        }, 500)
        return
    }
    if (randomPlay === 6) {
        setTimeout(() => {
            sixth_area.innerHTML = 'o'
            sixth_area_check = true
        }, 500)
        return
    }
    if (randomPlay === 7) {
        setTimeout(() => {
            seventh_area.innerHTML = 'o'
            seventh_area_check = true
        }, 500)
        return
    }
    if (randomPlay === 8) {
        setTimeout(() => {
            eighth_area.innerHTML = 'o'
            eighth_area_check = true
        }, 500)
        return
    }
    if (randomPlay === 9) {
        setTimeout(() => {
            nineth_area.innerHTML = 'o'
            nineth_area_check = true
        }, 500)
        return
    }
}

function strategy() {
    if (first_area_check === 'x' && second_area_check === 'x' && third_area_check === '') {
        setTimeout(() => {
            third_area.innerHTML = 'o'
            third_area_check = 'o'
        }, 500)
        return
    }
    if (first_area_check === 'x' && third_area_check === 'x' && second_area_check === '') {
        setTimeout(() => {
            second_area.innerHTML = 'o'
            second_area_check = 'o'
        }, 500)
        return
    }
    if (first_area_check === 'x' && fourth_area_check === 'x' && seventh_area_check === '') {
        setTimeout(() => {
            seventh_area.innerHTML = 'o'
            seventh_area_check = 'o'
        }, 500)
        return
    }
    if (first_area_check === 'x' && seventh_area_check === 'x' && fourth_area_check === '') {
        setTimeout(() => {
            fourth_area.innerHTML = 'o'
            fourth_area_check = 'o'
        }, 500)
        return
    }
    if (second_area_check === 'x' && third_area_check === 'x' && first_area_check === '') {
        setTimeout(() => {
            first_area.innerHTML = 'o'
            first_area_check = 'o'
        }, 500)
        return
    }
    if (third_area_check === 'x' && sixth_area_check === 'x' && nineth_area_check === '') {
        setTimeout(() => {
            nineth_area.innerHTML = 'o'
            nineth_area_check = 'o'
        }, 500)
        return
    }
    if (third_area_check === 'x' && nineth_area_check === 'x' && sixth_area_check === '') {
        setTimeout(() => {
            sixth_area.innerHTML = 'o'
            sixth_area_check = 'o'
        }, 500)
        return
    }
    if (sixth_area_check === 'x' && nineth_area_check === 'x' && third_area_check === '') {
        setTimeout(() => {
            third_area.innerHTML = 'o'
            third_area_check = 'o'
        }, 500)
        return
    }
    if (seventh_area_check === 'x' && nineth_area_check === 'x' && eighth_area_check === '') {
        setTimeout(() => {
            eighth_area.innerHTML = 'o'
            eighth_area_check = 'o'
        }, 500)
        return
    }
    if (seventh_area_check === 'x' && eighth_area_check === 'x' && nineth_area_check === '') {
        setTimeout(() => {
            nineth_area.innerHTML = 'o'
            nineth_area_check = 'o'
        }, 500)
        return
    }
    let randomPlay = Math.floor(Math.random() * 9) + 1;
    console.log(randomPlay)
    if(randomPlay === 9 && nineth_area_check !== '') {
        console.log('aqui?')
        randomPlay = Math.floor(Math.random() * 8);
    }
    else if(randomPlay === 8 && eighth_area_check !== '') {
        console.log('aqui?')
        randomPlay = Math.floor(Math.random() * 7);
    }
    else if(randomPlay === 7 && seventh_area_check !== '') {
        console.log('aqui?')
        randomPlay = Math.floor(Math.random() * 6);
    }
    else if(randomPlay === 6 && sixth_area_check !== '') {
        console.log('aqui?')
        randomPlay = Math.floor(Math.random() * 5);
    }
    else if(randomPlay === 5 && fifth_area_check !== '') {
        console.log('aqui?')
        randomPlay = Math.floor(Math.random() * 4);
    }
    else if(randomPlay === 4 && fourth_area_check !== '') {
        console.log('aqui?')
        randomPlay = Math.floor(Math.random() * 3);
    }
    else if(randomPlay === 3 && third_area_check !== '') {
        console.log('aqui?')
        randomPlay = Math.floor(Math.random() * 2);
    }
    else if(randomPlay === 2 && second_area_check !== '') {
        console.log('aqui?')
        randomPlay = Math.floor(Math.random() * 1);
    }
    randomMove = randomArea(randomPlay)
    round = round + 1
    player = true
    player_moves()
    return
}

function verifyPossibleWin() {
    if (first_area_check === 'o' && fifth_area_check === 'o' && nineth_area_check === '') {
        setTimeout(() => {
            nineth_area.innerHTML = 'o'
            nineth_area_check = 'o'
        }, 500)
        return true
    }
    if (fifth_area_check === 'o' && nineth_area_check === 'o' && first_area_check === '') {
        setTimeout(() => {
            first_area.innerHTML = 'o'
            first_area_check = 'o'
        }, 500)
        return true
    }
    if (third_area_check === 'o' && fifth_area_check === 'o' && seventh_area_check === '') {
        setTimeout(() => {
            seventh_area.innerHTML = 'o'
            seventh_area_check = 'o'
        }, 500)
        return true
    }
    if (seventh_area_check === 'o' && fifth_area_check === 'o' && third_area_check === '') {
        setTimeout(() => {
            third_area.innerHTML = 'o'
            third_area_check = 'o'
        }, 500)
        return true
    }
    if (second_area_check === 'o' && fifth_area_check === 'o' && eighth_area_check === '') {
        setTimeout(() => {
            eighth_area.innerHTML = 'o'
            eighth_area_check = 'o'
        }, 500)
        return true
    }
    if (eighth_area_check === 'o' && fifth_area_check === 'o' && second_area_check === '') {
        setTimeout(() => {
            second_area.innerHTML = 'o'
            second_area_check = 'o'
        }, 500)
        return true
    }
    if (fourth_area_check === 'o' && fifth_area_check === 'o' && sixth_area_check === '') {
        setTimeout(() => {
            sixth_area.innerHTML = 'o'
            sixth_area_check = 'o'
        }, 500)
        return true
    }
    if (sixth_area_check === 'o' && fifth_area_check === 'o' && fourth_area_check === '') {
        setTimeout(() => {
            fourth_area.innerHTML = 'o'
            fourth_area_check = 'o'
        }, 500)
        return true
    }

    if (first_area_check === 'o' && second_area_check === 'o' && third_area_check === '') {
        setTimeout(() => {
            third_area.innerHTML = 'o'
            third_area_check = 'o'
        }, 500)
        return true
    }
    if (first_area_check === 'o' && third_area_check === 'o' && second_area_check === '') {
        setTimeout(() => {
            second_area.innerHTML = 'o'
            second_area_check = 'o'
        }, 500)
        return true
    }
    if (first_area_check === 'o' && fourth_area_check === 'o' && seventh_area_check === '') {
        setTimeout(() => {
            seventh_area.innerHTML = 'o'
            seventh_area_check = 'o'
        }, 500)
        return true
    }
    if (first_area_check === 'o' && seventh_area_check === 'o' && fourth_area_check === '') {
        setTimeout(() => {
            fourth_area.innerHTML = 'o'
            fourth_area_check = 'o'
        }, 500)
        return true
    }
    if (second_area_check === 'o' && third_area_check === 'o' && first_area_check === '') {
        setTimeout(() => {
            first_area.innerHTML = 'o'
            first_area_check = 'o'
        }, 500)
        return true
    }
    if (third_area_check === 'o' && sixth_area_check === 'o' && nineth_area_check === '') {
        setTimeout(() => {
            nineth_area.innerHTML = 'o'
            nineth_area_check = 'o'
        }, 500)
        return true
    }
    if (third_area_check === 'o' && nineth_area_check === 'o' && sixth_area_check === '') {
        setTimeout(() => {
            sixth_area.innerHTML = 'o'
            sixth_area_check = 'o'
        }, 500)
        return true
    }
    if (sixth_area_check === 'o' && nineth_area_check === 'o' && third_area_check === '') {
        setTimeout(() => {
            third_area.innerHTML = 'o'
            third_area_check = 'o'
        }, 500)
        return true
    }
    if (seventh_area_check === 'o' && nineth_area_check === 'o' && eighth_area_check === '') {
        setTimeout(() => {
            eighth_area.innerHTML = 'o'
            eighth_area_check = 'o'
        }, 500)
        return true
    }
    if (seventh_area_check === 'o' && eighth_area_check === 'o' && nineth_area_check === '') {
        setTimeout(() => {
            nineth_area.innerHTML = 'o'
            nineth_area_check = 'o'
        }, 500)
        return true
    }
    return false
}

firstMove();