import React, { useEffect, useState } from 'react'
import './LoginSignup.css';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {auth} from "../../firebase-config"

function LoginSignup() {
  const [signupName,setSignupName]=useState("")
  const [signupEmail,setSignupEmail]=useState("")
  const [signupPassword,setSignupPassword]=useState("")
  const [loginName,setLoginName]=useState("")
  const [loginEmail,setLoginEmail]=useState("")
  const [loginPassword,setLoginPassword]=useState("")
  const [loginSignup,setLoginSignup]=useState("")
  const [userData,setUserdata]=useState(null)
 useEffect(()=>{
  const unsubscribe =onAuthStateChanged(auth,(currentUser)=>{
    setUserdata(currentUser)
  });
  return ()=>unsubscribe();

 },[])


  
  const handleSighnup=async()=>{
  
    try{
      const user=await createUserWithEmailAndPassword(
        auth,
  
        signupEmail,
        signupPassword

      );
      console.log(user);

    }
    catch(error){
      console.log(error.message)
    }

  }
  const handleLogin=async()=>{
    try{
      const user=await signInWithEmailAndPassword(
        auth,
  
        loginEmail,
        loginPassword

      );
      console.log(user);

    }
    catch(error){
      console.log(error.message)
    }

  }
  const handleLogout=async()=>{
    await signOut(auth);

  }



  return (
    <div className='loginsignup'>
      

      <p ><span style={{color:"#808080", cursor:"pointer"}} onClick={()=>setLoginSignup('signup')}>SignUp?</span> or <span style={{cursor:"pointer"}}onClick={()=>setLoginSignup("login")}>Login</span></p>
      <div className="signuploginall">
      {loginSignup=="login"?      <div className="loginsignup-login">
      <div className="loginfields">
      <input type="text" placeholder='Name' name='name' onChange={(event)=>{setLoginName(event.target.value)}}/>
        <input type="email" placeholder='Email Id' name='email' onChange={(event)=>{setLoginEmail(event.target.value)}}/>
        <input type="password" placeholder='Password' name='password' onChange={(event)=>{setLoginPassword(event.target.value)}}/>
        
      </div>
      <button onClick={handleLogin}>Login</button>

      </div> :
      <div className="loginsignup-signup" >
       <div className="signupfields">
        <input type="text" placeholder='Name' name='name' onChange={(event)=>{setSignupName(event.target.value)}}/>
        <input type="email" placeholder='Email Id' name='email' onChange={(event)=>{setSignupEmail(event.target.value)}}/>
        <input type="password" placeholder='Password' name='password' onChange={(event)=>{setSignupPassword(event.target.value)} }/>
      </div>
      <button onClick={handleSighnup}>SignUp</button>
      
      </div>  }
      </div>
      {userData &&
(      <div className='loggedinuser'>
      <p style={{marginTop:"100px",marginBottom:"-20px", marginLeft:"10px"}}>User Logged In</p>
      <p style={{ marginLeft:"10px" ,fontSize:"20px", color:"#808080", fontWeight:"600"}}>{userData.email}</p>
      <button onClick={handleLogout}>Sign out</button>

      </div>)}
      
      </div>

  


   
  )
}

export default LoginSignup