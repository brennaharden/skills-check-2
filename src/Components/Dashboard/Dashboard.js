import React from 'react';
import axios from 'axios';
import Product from '../Product/Product.js'



function Dashboard (props) {
    
    const {editMode} = props
    const deleteProduct = (id) => {
        axios.delete(`/api/inventory/${id}`)
        .then(() => {
            props.getInventory()
        })
    }

    const inventoryMap = props.inventory.map(product => {
        return <Product {... {deleteProduct, editMode, key: product.id, product}}/>
    })
    
    return <div className="inventory-display">
        
        {inventoryMap}
    </div>
}

export default Dashboard