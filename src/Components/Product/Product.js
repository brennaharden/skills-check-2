import React from 'react';

function Product (props) {
    console.log(props)
    return <div className='product-display'>
        <h2>{props.product.name}</h2>
        <h2>{props.product.price}</h2>
        <img className="img" alt={props.product.name} src={props.product.img}/>
        <div className="button-box">
        <button onClick={() => {props.deleteProduct(props.id)}}>Delete</button>
        <button onClick={() => {props.editMode(props.product)}}>Edit</button>
        </div>
    </div>
}

export default Product