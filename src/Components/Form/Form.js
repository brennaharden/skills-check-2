import React from 'react';
import axios from 'axios';

export default class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            price: 0,
            img: '',
            id: null,
        }
    }

    // componentDidUpdate(prevprop){
    //     if (prevprop.product !== this.props.product) {
    //         this.setState({
    //             name: this.props.product.name,
    //             price: this.props.product.price,
    //             img: this.props.product.img,
    //             id: this.props.product.id
    //         })
    //     }
    // }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    reset = () => {
        this.setState({
            name: '',
            price: 0,
            img: '',
            id: ''
        })
    }

    addProduct = (name, price, img) => {
        axios.post(`/api/product`, {name, price, img})
        .then(res => {
            console.log(res.data)
            this.props.getInventory()
            this.reset()
          })
    }

    updateProduct = (id, name, price, img) => {
        axios.put(`/api/product/${id}`, {name, price, img})
        .then(() => {
            this.props.getInventory()
            this.reset()
            this.editReset()
        })
    }
      

    render() {
        return <div className="form-display">
            <h1>Form Component</h1>
            <form onSubmit={(e) => {
                if (this.props.editing) {
                this.updateProduct(this.state.id, this.state.name, this.state.price, this.state.img)
                } else {
                this.addProduct(this.state.name, this.state.price, this.state.img)}}}>
                <input name='img' placeholder='Image URL' type='text' onChange={(e) => this.handleChange(e)}></input>
                <input name='name' placeholder='Product Name' type='text' onChange={(e) => this.handleChange(e)}></input>
                <input name='price' placeholder='0' type='number' onChange={(e) => this.handleChange(e)}></input>
            <div className='buttons'>
                <button onClick={this.reset}>Cancel</button>
                <button type='submit'>{this.props.button}</button>
            </div>
            </form>
        </div>
    }
}



