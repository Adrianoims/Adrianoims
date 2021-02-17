import React, {useState} from 'react'
import {Link} from "react-router-dom";
import { MdFingerprint } from 'react-icons/md'
import { FaBars, FaTimes} from 'react-icons/fa'

function Navbar(){
   
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () =>setClick(false)
    return(
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo'>
            TRVL <i className='FaBars'/>
            
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                        { click ?   <FaBars /> : <FaTimes/>
                        }
            </div>
            <ul>
                <li>
                    <Link to='/' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/' onClick={closeMobileMenu}>
                        Services
                    </Link>

                </li>
                <li>
                    <Link to='/' onClick={closeMobileMenu}>
                        Products
                    </Link>
                    
                </li>  <li>
                    <Link to='/' onClick={closeMobileMenu}>
                        Sign Up
                    </Link>
                    
                </li>
            </ul>
        </div>
    </nav>
    </>
    )
}

export default Navbar