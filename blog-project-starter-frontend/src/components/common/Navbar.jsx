import React, { useState } from 'react'
import "./Navbar.css"
import { useEffect } from 'react'
import auth from '../../config/firebase'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
function Navbar() {
    const navigate = useNavigate()
    const [log,setlog]=useState(false)
    
    useEffect(()=>{
      auth.onAuthStateChanged(function(user){
        if(user){
          console.log("user Logged in")
          setlog(true)
        }
        else{
          console.log("user Logged out")
          setlog(false)
        }
      })
    })
    
    function Logout(){
      signOut(auth)
    }
    
  return (
    <div className='py-5 flex justify-between items-center'>
        <h2 className='text-2xl font-bold'>Personal</h2>
        <div className='flex items-center'>
            <Link className='list-none px-5' to={"/home"}>Home</Link>
            <Link className='list-none px-5' to={"/blogs"}>Blogs</Link>
            <Link className='list-none px-5'>About</Link>
            {
              log?<button className='button-style hidden md:block' onClick={Logout}>Logout</button>:<button className='button-style hidden md:block' onClick={()=>navigate("/login")}>Login</button>
            }

        </div>
    </div>
  )
}

export default Navbar