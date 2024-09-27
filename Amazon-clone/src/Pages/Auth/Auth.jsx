import React, { useState,useContext } from 'react'
import classes from "./auth.module.css"
import { Link , useNavigate} from 'react-router-dom'
import {auth} from "../../Utility/Firebase"
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth"
import {DataContext} from "../../components/Dataprovider/Dataprovider"
import { Type } from '../../Utility/Actiontype'
import{ClipLoader} from "react-spinners"


function Auth() {
const [email, setEmamil]= useState("");
const [password, setPassword]=useState("")
const [error ,setError]=useState("")
// console.log(Password,Email)
const [loading, setLoading]= useState({
  signin:false,
  signup:false
})
const [{user}, dispatch]= useContext(DataContext)
const navigate= useNavigate()

const authHandler= async (e)=>{
  e.preventDefault()
  console.log(e.target.name)
if(e.target.name=="signin"
){
  setLoading({...loading,signin:true})
  // firebase auth
  signInWithEmailAndPassword(auth,email,password)
  .then((userInfo)=>{
    // console.log(userInfo)

    dispatch({
      type:Type.SET_USER,
      user:userInfo.user
    })
    setLoading({...loading,signin:false})
    navigate ("/");
  }) .catch((err)=>{
    setError(err.message)
    setLoading({...loading,signup:false})
  })



}else{
  setLoading({...loading,signup:true})
  createUserWithEmailAndPassword(auth,email,password)
  .then((userInfo)=>{
    // console.log(userInfo)
    dispatch({
      type:Type.SET_USER,
      user:userInfo.user
    })
    setLoading({...loading,signup:false})
  }) .catch((err)=>{
    setError(err.message)
    setLoading({...loading,signup:false})
  })

}
}


  return (
    <section className={classes.login}>
      <Link to="/">
       <img src="https://pngimg.com/uploads/amazon/amazon_PNG8.png" alt="amazon logo" />

      </Link>

      <div className={classes.container}>
        <h1>Sign-In</h1>

        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e)=>setEmamil(e.target.value)} type="email" id='email' />
          </div>



          <div>
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id='password' />
          </div>
          <button type='submit' 
          name='signin' 
          onClick={authHandler} 
          className={classes.signin_button}>
          {
            loading.signin?(<ClipLoader color='#000' size={15}/>
            ):("Sign-In")
          }
          </button>
          </form>

          <p>
            by singing in you agree to the AMAZON FAKE CLONE conditions of use and sale. please see our privacy notice our cokkiess notice and our interest-based ads Notice. 
          </p>
          <button
           type='submit' 
           name='signup' 
           onClick={authHandler} 
           className={classes.registre_btn}>
            
            {loading.signup? (<ClipLoader size={15} color='#000'/> ):("Create amazon aaccount")}
            
            </button>
          {
            error && <small style={{paddingTop:"5px",color:"red"}}>{error} </small>
          }

        
      </div>
    </section>
  )
}

export default Auth