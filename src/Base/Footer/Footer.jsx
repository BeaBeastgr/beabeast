import React from 'react';
import './footer.css';
import house from '../../Assets/Images/house.png';
import train from  '../../Assets/Images/training.png';
import start from  '../../Assets/Images/play-button.png';
import Ebook from  '../../Assets/Images/ebook.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='tomesastofoot'>
        <div className='koytaki'>
          <Link to='/' className='tolink'>
            <img src={house} alt='homeIcon' className='footerImg'/><br/>
            <p>Αρχική</p>
          </Link>
        </div>
        <div className='koytaki'>
            <Link to='/exercises' className='tolink'>
              <img src={train} alt='homeIcon' className='footerImg'/><br/>
              <p>Ασκήσεις</p>
            </Link>
        </div>
        <div className='koytaki'>
            <Link to='/StartNow' className='tolink'>
              <img src={start} alt='homeIcon' className='footerImg'/><br/>
              <p>Ξεκίνα</p>
            </Link>
        </div>
        <div className='koytaki'>
            <Link to='/ebook' className='tolink'>
              <img src={Ebook} alt='homeIcon' className='footerImg'/><br/>
              <p>Ebook</p>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;