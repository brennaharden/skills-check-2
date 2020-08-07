import React from 'react';
import Product from '../Product/Product.js'

function Dashboard (props) {
    const inventoryMap = props.inventory.map(product => {
        return <Product {...{key: product.id, ...product}}/>
    })
    
    return <div>
        <h1>Dashboard Component</h1>
        {inventoryMap}
    </div>
}

export default Dashboard