import './App.css';
import react , {useEffect} from 'react'
import Header from './Header'
import Home from './Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Checkout from './Checkout'
import Login from './Login'
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment'
import {loadStripe}  from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Orders from './Orders'
const promise = loadStripe('pk_test_51ILw4XFJlu55LaubJ2pv480qfnc877rOv9Tk9vSCGEcRwlxGJ0B2jFRZX0l7r8TtyUCj77UFwZ1DJfokZ2EHpSKc00Y17tAGKn');
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS IS HERE >>>>', authUser);
      if(authUser){
        dispatch ({ 
          type : 'SET_USER',
          user : authUser
        })
      } else{
        dispatch ({ 
          type : 'SET_USER',
          user : null
        })
      }
    })
  }, [])
  return (
    <Router>
    <div className="app">
    <Header/>
     <Switch>
       <Route path = "/login">
         <Login/>
       </Route>
       <Route path = "/orders">
         <Orders/>
       </Route>
     <Route path="/checkout">
     <Checkout/>
     </Route>
     <Route path = "/payment">
       <Elements stripe = {promise}>
       <Payment/>
       </Elements>
     </Route>
       <Route path="/">
       <Home/>
       </Route> 
      
     </Switch>
    </div>
    </Router>
  );
}

export default App;
