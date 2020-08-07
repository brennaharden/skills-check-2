import React from 'react';

export default class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            price: 0,
            img: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    reset = () => {
        this.setState({
            name: '',
            price: 0,
            img: ''
        })
    }

    render() {
        return <div>
            <h1>Form Component</h1>
            <form>
                <input name='img' placeholder='Image URL' type='text' onChange={(e) => this.handleChange(e)}></input>
                <input name='name' placeholder='Product Name' type='text' onChange={(e) => this.handleChange(e)}></input>
                <input name='price' placeholder='0' type='number' onChange={(e) => this.handleChange(e)}></input>
            <div className='buttons'>
                <button onClick={this.reset}>Cancel</button>
                <button type='submit'>Add to Inventory</button>
            </div>
            </form>
        </div>
    }
}



