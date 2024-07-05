import React from 'react';
import './footer.css';
import house from '../../Assets/Images/house.png';
import train from '../../Assets/Images/training.png';
import start from '../../Assets/Images/play-button.png';
import Ebook from '../../Assets/Images/ebook.png';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const getLinkId = (path) => {
    return location.pathname === path ? 'epilegmeno' : '';
  };

  return (
    <div className='Footer'>
      <div className='tomesastofoot'>
        <div className='koytaki'>
          <Link to='/' className='tolink'>
            <img src={house} alt='homeIcon' className='footerImg'/><br/>
            <p id={getLinkId('/')}>Αρχική</p>
          </Link>
        </div>
        <div className='koytaki'>
          <Link to='/exercises' className='tolink'>
            <img src={train} alt='homeIcon' className='footerImg'/><br/>
            <p id={getLinkId('/exercises')}>Ασκήσεις</p>
          </Link>
        </div>
        <div className='koytaki'>
          <Link to='/StartNow' className='tolink'>
            <img src={start} alt='homeIcon' className='footerImg'/><br/>
            <p id={getLinkId('/StartNow')}>Ξεκίνα</p>
          </Link>
        </div>
        <div className='koytaki'>
          <Link to='/ebook' className='tolink'>
            <img src={Ebook} alt='homeIcon' className='footerImg'/><br/>
            <p id={getLinkId('/ebook')}>Ebook</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
