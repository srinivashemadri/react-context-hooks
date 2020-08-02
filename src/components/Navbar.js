import React, { useContext } from 'react'
import { Bookcontext } from '../contexts/Bookcontext'


const Navbar = () => {
    const {books} = useContext(Bookcontext);
    
    return(
        <div className="navbar">
            <h1>Ninja Reading list</h1>
            <p>Currently you have {books.length} to get through</p>
            
        </div>
    )
}

export default Navbar;