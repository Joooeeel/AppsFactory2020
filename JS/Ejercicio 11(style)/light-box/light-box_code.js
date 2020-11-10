const mostrar = e =>{
    e.stopPropagation();
    document.querySelector('#black_overlay').style.display = "block";
}

const ocultar = _ =>{
    document.querySelector('#black_overlay').style.display = "none";
}

window.addEventListener('load', () =>{
    window.addEventListener('click', function(e){
        const lightbox = document.querySelector('#lightbox');

        if(!lightbox.contains(e.target)){
            ocultar();
        }
    });

    
    document.querySelector('#show').addEventListener('click', mostrar);
    document.querySelector('#hide').addEventListener('click', ocultar);

});