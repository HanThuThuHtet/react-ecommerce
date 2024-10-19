import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className='w-full h-screen flex justify-center items-center'>
        <div className="text-center flex flex-col items-center gap-3">
            <h1 className='text-5xl font-bold'>404 Page Not Found</h1>
            <img src="https://www.pushengage.com/wp-content/uploads/2022/09/404-Page-Design-Examples.png" className='w-2/4'  alt="" />
            <Link to={"/"} className='border border-black px-4 py-2'>Back to Home</Link>
        </div>
    </section>
  )
}

export default ErrorPage