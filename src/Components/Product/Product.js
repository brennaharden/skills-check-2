import React from 'react';

function Product (props) {
    return <div>
        <h2>{props.name}</h2>
        <h2>{props.price}</h2>
        <img src={props.img}/>
    </div>
}

export default Product