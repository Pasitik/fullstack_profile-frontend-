import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <header className='bg-gray-600 w-full'>
        <div className='mx-0 my-auto px-12 py-20 flex items-xenter justify-between'>
            <Link to="/">
                <h1 className='font-bold text-2xl'>MyProfile</h1>
            </Link>
            <nav className='flex items-center'>
                
            </nav>
        </div>
    </header>
  )
}

export default Navbar