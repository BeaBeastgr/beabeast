import React from 'react';
import './header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <div className='toHeader'>
        <div className='tomesa'>
          <div className='toaristera'>  
            <Link to='/' className='tolinkmaga'><p>BeaBeast.gr</p></Link>
          </div>

          {location.pathname !== '/StartNow' && (
            <div className='todeksia'>
              <Link to='/StartNow' className='startbutton'>Ξεκίνα!</Link>
            </div>
          )}
        </div>
    </div>
  );
};

export default Header;
