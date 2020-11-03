const init = _ =>{
    document.getElementById('again').style.display = 'none';
}

const conversor = _ =>{
    const eur = document.querySelector('#euros').value;
    const dollar = eur * 2;
    document.querySelector('#dollar').value = dollar;
}

const centofar = _ =>{
    const cent = document.querySelector('#centigrad').value;
    const far = cent * 9/5 + 32;
    document.querySelector('#farenheit').value = far;
}

const formular = _ =>{
    const name = document.querySelector('#name').value;
    const mat = document.querySelector('#material').value;
    const dim = document.querySelector('[name=boton]:checked').value;
    const com = document.querySelector('#text').value;
    
    document.querySelector('#result').value = name + " ha pedido una caja de " + mat + " con unas dimensiones " + dim + ". " + com;
}

let randNum = Math.floor(Math.random() * (5 - 0 + 1));
let try_cont = 0;

const game = _ =>{
    
    const playerNum = document.querySelector('#numPlayer').value;    

    if(playerNum == randNum){
        document.querySelector('#res').value = '¡Has acertado!';
        document.getElementById('again').style.display = 'inline';
    }else{
        document.querySelector('#res').value = 'Has fallado :(';
        try_cont++;
    }

    if(try_cont > 3){
        document.querySelector('#res').value = '¡Has perdido!';
        document.getElementById('again').style.display = 'inline';
    }

}

const playagain = _ =>{
    
    randNum = Math.floor(Math.random() * (5 - 0 + 1));
    try_cont = 0;
    console.log(randNum);
    console.log(try_cont);
    document.getElementById('again').style.display = 'none';
    document.querySelector('#numPlayer').value = " ";
    document.querySelector('#res').value = " ";
}



window.onload=init();

document.querySelector('#ed').addEventListener('click', conversor);
document.querySelector('#cf').addEventListener('click', centofar);
document.querySelector('#send').addEventListener('click', formular);
document.querySelector('#validator').addEventListener('click', game);
document.querySelector('#again').addEventListener('click', playagain);