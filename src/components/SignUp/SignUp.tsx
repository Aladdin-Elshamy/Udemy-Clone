import React from 'react'
import signupimg from "../../assets/desktop-illustration-step-1-x1.webp"
import SignupForm from '../../ui/SignupForm'
export default function SignUp() {
  return (
    <>
    <div className="container w-full mx-auto mt-8    ">
        
        
        <div className="   grid grid-cols-1  md:grid-cols-2 gap-10 mt-10 px-8">

        <div className="right-img w-full  mt-5 " >
        <img src={signupimg} className="w-full"alt="signUp img web" />
        </div>

        <div className=" left-content  w-full mt-5  ">
        <div className="items ">
            <div className="w-full me-10 ">
            <h2 className='text-black font-bold text-2xl text-center py-3'>Sign up and start learning</h2>
            </div>
        <SignupForm/>
        
        </div>
        </div>

    
    </div>
    
    </div>
    </>
  )
}
