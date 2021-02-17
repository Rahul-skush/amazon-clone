import React from 'react'
import Subtotlal from './Subtotal'
import "./Checkout.css"
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
function Checkout() {
    const [{basket}, dispatch] =useStateValue(); 
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img
                className="checkout_ad"
                src = "https://cdn.livekindly.co/wp-content/uploads/2019/11/vegan-plant-based-news-vegan-burger-king-livekindly-Cropped-1.jpg"
                alt =""
                />
                <div>
                    <h2
                    className="checkout_title">
                        Your shopping basket
                    </h2>
                
                <CheckoutProduct
                id = "23214324"
                image = "https://img.chewy.com/is/image/catalog/114156_MAIN._AC_SL1500_V1595942486_.jpg"
                title = "If you are at an office or shared network, you can ask the network administrator to run a scan across the network looking for misconfigured or infected devices"
                price = {223.09}
                rating = {3}
                />
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
