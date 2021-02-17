import React, {useState} from 'react'
import { Link, useHistory} from 'react-router-dom'
import './Login.css'
import { auth } from './firebase'
function Login() {
    const  history = useHistory() 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const signIn = e =>{
        e.preventDefault();
        auth
           .signInWithEmailAndPassword(email, password)
           .then(auth =>{
               history.push('/')
           })
           .catch(err => alert(err.message));
    }
    const register = e =>{
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth)=>{
                console.log(auth)
                history.push('/')
            })
            .catch(error=>{
                alert(error.message)
            })
    }
    return (
        <div className = 'login'>
            <Link to='/'>
                <img
                    className = 'login_logo'
                    src = 'https://cordellcordell.com/wp-content/uploads/2019/01/Amazon.jpg'
                    alt = ''
                />
            </Link>
            <div className = 'login_container'>
               <h1>Sign-in</h1>
               <form>
                <h5>Email</h5>
                <input type="email" value={email}
                onChange={e => setEmail(e.target.value)} />  
                <h5>Password</h5>
                <input type="password" value ={password}
                onChange = {e => setPassword(e.target.value)}/>
                <button 
                onClick = {signIn}
                className = 'login_signInButton'>Sign-in</button>
               </form> 
               <p>
               Login with Amazon-clone website lets you use your Amazon user name and password to sign in to and
                share information with participating third-party websites or apps. 
               </p>
               <button
               onClick = {register}
               className='login_registerButton'>Create your amazon account</button>
            </div>
        </div>
    )
}

export default Login
