import React, { useEffect, useState } from 'react'
import { db } from './firebase';
import Order from './Order';
import './Orders.css'
import { useStateValue } from './StateProvider';
function Orders() {
    const [Orders, setOrders] = useState();
    const [{basket,user}, dispatch] = useStateValue();
    useEffect(()=>{
    if(user)
    {
        db
          .collection('users')
          .doc(user?.id)
          .collection('orders')
          .onSnapshot(snapshot =>{
              setOrders(snapshot.docs.map(doc =>({
                  id : doc.id,
                  data : doc.data(),
              })))
          })
    }
    else
    setOrders([]);
    },[user])


    return (
        <div className = 'orders'>
            <h1>Your orders</h1>
            <div className = 'orders_orders'>
                {Orders?.map(order => {
                   return <Order order={order}/>
                })}
                
            </div>
        </div>
    )
}

export default Orders
