import React from 'react'

const Navbar = (props) => {
    return (
        <nav>
            <div className="left">back</div>
            <div className="right">{props.page}</div>
            <div className="right">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </nav>
    )
}

export default Navbar
