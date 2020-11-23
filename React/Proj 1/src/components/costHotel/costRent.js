import React from 'react';

const rent_cal = ({nights}) =>{
    const days = parseInt(nights);

    const price = days * 40;
    let final_price = 0;

    if(days >= 7){
        final_price = price - 50;    
    }else if(days >= 3){
        final_price = price - 20;
    }else{
        final_price = price;
    }
    
    return(
        <div>
            <span>Precio alquiler coche: {final_price}</span>
        </div>
    );
};

export default rent_cal;