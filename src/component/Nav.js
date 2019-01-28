
import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = (props) => {
    return (    
        <>
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/random"}> Random </Link>
            <Link to={'/breed'}> Breed </Link>
        </nav>
        </>
    )
}
export default Nav;