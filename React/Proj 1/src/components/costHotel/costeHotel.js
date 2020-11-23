import React from 'react';

const cost = ({nights}) =>{
    const nights_num = parseInt(nights)
    const price = 140;
    const final_price = nights_num * price;

    return(
        <div>
            <span>Precio por noche: {final_price}</span>
        </div>
    );
};

export default cost;