import React from 'react'
import { BsChevronLeft } from 'react-icons/bs';

const Navbar = (props) => {
    return (
        <nav>
            <div className="left"><BsChevronLeft /></div>
            <div className="right">{props.page}</div>
            <div className="right">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </nav>
    )
}

export default Navbar
