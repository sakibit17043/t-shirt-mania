import React, { useState } from 'react';
import useTshirt from '../../hooks/useTShirt';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css';

const Home = () => {
    const [tShirts,setTShirts] = useTshirt();
    const [cart,setCart] = useState([]);
    const handleAddToCart = (selectedItem) =>{
        const exist = cart.find(item =>item._id ===selectedItem._id)
        if(!exist){
            const newCart = [...cart,selectedItem];
            setCart(newCart);
        }
        else{
            alert('Product is already added!!!')
        }

       
    } 
    return (
        <div className='home-container'>
            <div className="tshirt-container">
            {
                tShirts.map(tShirt => <TShirt
                key ={tShirt._id}
                tShirt ={tShirt}
                handleAddToCart = {handleAddToCart}
                ></TShirt>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart} setCart={setCart}></Cart>
            </div>
        </div>
    );
};

export default Home;