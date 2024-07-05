import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='toHeader'>
        <div className='tomesa'>
          <div className='toaristera'>  
            <Link to='/' className='tolinkmaga'><p>BeaBeast.gr</p></Link>
          </div>

          <div className='todeksia'>
            <Link to='/startnow' className='startbutton'>Ξεκίνα σήμερα!</Link>
          </div>
        </div>
    </div>
  );
};

export default Header;