import React from 'react'
import Subtotlal from './Subtotal'
import "./Checkout.css"
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
function Checkout() {
    const [{basket, user}, dispatch] =useStateValue(); 
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img
                className="checkout_ad"
                src = "https://cdn.livekindly.co/wp-content/uploads/2019/11/vegan-plant-based-news-vegan-burger-king-livekindly-Cropped-1.jpg"
                alt =""
                />
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2
                    className="checkout_title">
                        Your shopping basket
                    </h2>
                 
                {basket.map(item =>(
                        <CheckoutProduct
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotlal/>
                </div>
        </div>
    )
}

export default Checkout
