import React from 'react'

export default function SignupForm() {
  return (
    <>
        <div className="">
        <form className='p-2 flex flex-col justify-center items-center lg:flex-col      ' >
        <label  htmlFor="Full-name"><span className=' label-name text-xs font-bold '>Full name</span></label>
            <input className='relative px-2 py-4 rounded border border-black w-2/3 mt-2  block' type="text"  id='Full-name' />

            <label  htmlFor="Email"><span className='text-xs font-bold'>Email</span></label>
            <input className='px-2 py-4 rounded border border-black w-2/3 mt-2 block' type="email" id='Email' />

            <label  htmlFor="password"><span className='text-xs font-bold'>password</span></label>
            <input className='px-2 py-4 rounded border border-black w-2/3 mt-2 block' type="password" id='password' />
            
            <div className="flex flex-row space-x-2 mt-3 w-2/3  ">
                <input className='w-4' type="checkbox" name="check_email" id="check_email" />
                <label className='text-xs' htmlFor="check_email">Send me special offers, personalized recommendations, and learning tips.</label>
            </div>

            <button className='btn bg-link -none text-white w-2/3 font-bold hover:bg-hover hover:'>Sign up</button>
        </form>
        <div className="to-login text-center mt-3 h-44">
            <p className='text-xs'>By signing up, you agree to our
                <span className='text-hover'>Terms of Use and Privacy Policy</span> 
            .</p>
            <p className='mt-5'>Already have an account? 
            <a href="##" className='text-hover '>Log in</a>
            </p>
        </div>
        </div>
    </>
    )
}
