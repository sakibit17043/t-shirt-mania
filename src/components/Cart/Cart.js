import React from 'react';
import './Cart.css'

const Cart = ({ cart, setCart }) => {
    const removeItem = (id) => {
        const rest = cart.filter(item => item._id !== id);
        setCart(rest)
    }
    //conditional rendering options
    //1.variable element
    //2.ternary operator
    //3.&& operator(true shorthand)
    //4.|| operator (false shorthand)
    let command;
    if (cart.length === 0) {
        command = <p>Please add atleast one item</p>
    }
    else if (cart.length === 1) {
        command = <p>Please add more items...</p>
    }
    else {
        command = <p><small>Thanks for adding items</small></p>
    }
    return (
        <div>
            <h2>Items Selected: {cart.length}</h2>
            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button onClick={() => removeItem(tShirt._id)}>X</button>
                </p>)
            }
            {
                cart.length===0 || <p className='orange'>YaY! You are buying...</p>
            }
            {cart.length===3 && 
            <div className='orange'>
                <h2>Trigonal</h2>
                <p>Tin jon ke diba</p>
                </div>}
            {command}
            {cart.length!==4?<p>keep adding</p>:<button>Remove all</button>}
            {cart.length===4 && <button className='orange'>Review Order</button>}
        </div>
    );
};

export default Cart;