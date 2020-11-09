const sliding = _ =>{
    cont++;

    if(cont == 4) cont = 0;
     
    const desplacement = cont * 500;

    document.querySelector('#slider_content').style.marginLeft = "-" + desplacement + "px";
}
    let cont = 0;
    document.querySelector('#changer').addEventListener('click', sliding);