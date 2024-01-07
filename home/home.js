let order = [];
let clickedOrder = [];
let score = 0;

/*0 => verde
1 => vermelho
2 => amarelo
3 => azul */

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

// gerar uma ordem aleatória de números entre 1 e 4 e guardar num array
let randomOrder = () => {
    console.log('oi')
    for(let c = 0; c < 200; c++) {
        let colorOrder = Math.floor(Math.random() * 4);
        order[order.length] = colorOrder;
    }

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// relacionar cada número e 1 a 4 a uma cor
let createColorElement = (color) => {
    if (color == 0){
        return green;
    } else if (color == 1){
        return red;
    } else if (color == 2){
        return yellow;
    } else if (color == 3){
        return blue;
    }
}

// iluminar a cor escolhida e apagar num determinado intervalo de tempo
let lightColor = (element, number) => {
    number = number * 1000
    setTimeout(() => {
        element.classList.add('selected');
        setTimeout(() => {
            console.log('removeu?')
            element.classList.remove('selected');
        }, 250)
    }, number - 250);
}

randomOrder()