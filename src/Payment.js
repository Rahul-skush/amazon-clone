import { useElements, CardElement, useStripe } from '@stripe/react-stripe-js';
import React, {useState, useEffect} from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import axios from './axios'
import { db } from './firebase';
function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    const stripe = useStripe();
    const history = useHistory();
    const elements = useElements();
    const [succeeded, setSuceeded] = useState();
    const [processing, setProcessing] = useState();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState();
    useEffect(()=>{
        const getClientSecret = async ()=>{
            const response = await axios({
                method: 'post',
                url : `/payment/create?total=${getBasketTotal(basket)*100}`
            });
            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();
    }, [basket])

    console.log('the secret is  >>>>>>', clientSecret);
    console.log('person is ', user?.uid);
    const handleSubmit = async (e) =>{
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method : {
                card : elements.getElement(CardElement)
            }
        }).then (({paymentIntent})=>{

            db
              .collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                  basket : basket,
                  amount : paymentIntent.amount,
                  created : paymentIntent.created
              })
            setSuceeded(true);
            setError(null);
            setProcessing(false)
            dispatch({
                type : 'EMPTY_BASKET'
            })
            history.push('/orders');
        })
    }
    const handleChange = async (e) =>{
        setDisabled(e.empty);
        setError(e.error?e.error.message:"");
    }
    return (
        <div className = 'payment'>
            <div
            className = 'payment_container'>
                <h1>Checkout(
                    <Link to="/checkout">{basket?.length}</Link>)
                </h1>
                <div className = 'payment_section'>
                    <div className = 'payment_title'>
                        <h3>delivery address</h3> 
                        </div>
                        <div className = 'payment_address'>
                            <p>{user?.email}</p>
                            <p>Capital city phase 1</p>
                            <p>Saddu Raipur, Chhatisgarh</p>
                        </div>
                    </div>
                <div className = 'payment_section'>
                <div className = 'payment_title'>
                    <h3>Review items and delivery</h3>
                </div>
                    <div className = 'payment_items'>
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
                <div className = 'payment_section'>
                   
                    <div className = 'payment_method'>
                    <h3>payment methods</h3>
                    </div>
                    <div className = 'payment_details'>
                     <form onSubmit={handleSubmit}>
                    <CardElement 
                     onChange={handleChange}/>
                     <div className = 'payment_priceContainer'>
                        <CurrencyFormat
                            renderText={(value) => (
                            <>
                                <p>
                                {/* Part of the homework */}
                                Subtotal ({basket?.length} items): <strong>{value}</strong>
                                </p>
                                
                            </>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)} 
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                        />
                        <button disabled={processing || disabled || succeeded}>
                                <span>{processing?<p>Processing</p>:'Buy Now'}</span>
                        </button>
                     </div>
                    </form>
                    {error && <div>{error}</div>}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Payment
