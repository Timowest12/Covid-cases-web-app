import React from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const { page } = props;
  return (
    <nav>
      {page === 'Country data' ? <Link to="/"><div className="left"><BsChevronLeft /></div></Link> : <div />}
      <div className="right">{page}</div>
      <div className="right">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
    </nav>
  );
};

export default Navbar;
