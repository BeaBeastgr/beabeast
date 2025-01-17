import React, { useState } from 'react';
import './ebook.css';
import book from '../../Assets/Images/book (2).png';

const Ebook = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };
  return (
    <div className='Ebook'>
      <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,600 L 0,112 C 101.79904306220095,111.5980861244019 203.5980861244019,111.19617224880382 310,105 C 416.4019138755981,98.80382775119618 527.4066985645934,86.81339712918661 616,80 C 704.5933014354066,73.18660287081339 770.7751196172248,71.55023923444975 849,84 C 927.2248803827752,96.44976076555025 1017.4928229665072,122.98564593301435 1118,130 C 1218.5071770334928,137.01435406698565 1329.2535885167463,124.50717703349282 1440,112 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#8ed1fc" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 300)"></path><path d="M 0,600 L 0,262 C 95.05263157894737,294.1244019138756 190.10526315789474,326.2488038277512 293,317 C 395.89473684210526,307.7511961722488 506.63157894736844,257.12918660287085 601,252 C 695.3684210526316,246.87081339712918 773.3684210526316,287.2344497607656 870,297 C 966.6315789473684,306.7655502392344 1081.8947368421054,285.933014354067 1180,275 C 1278.1052631578946,264.066985645933 1359.0526315789473,263.03349282296654 1440,262 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#8ed1fc" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 300)"></path><path d="M 0,600 L 0,412 C 110.25837320574163,421.11004784689 220.51674641148327,430.2200956937799 302,415 C 383.48325358851673,399.7799043062201 436.1913875598086,360.2296650717704 540,369 C 643.8086124401914,377.7703349282296 798.7177033492824,434.8612440191387 903,436 C 1007.2822966507176,437.1387559808613 1060.9377990430621,382.32535885167465 1142,369 C 1223.0622009569379,355.67464114832535 1331.531100478469,383.8373205741627 1440,412 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#8ed1fc" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-2" transform="rotate(-180 720 300)"></path></svg>

      <div className='kentro'>
        <div className='topligomesa'>
          <p>Συμπληρώστε την παρακάτω φόρμα για να λάβετε εντελώς δωρεάν το Ebook. Εάν ξεκινάτε από το 0 το ebook αυτό είναι ακριβώς αυτό που αναζητάτε για να μπορέσετε να κάνετε τα αρχικά σας βήματα.</p>
          <img src={book} alt='ebook' className='tobookstrofh' />
        </div>
        {!showForm && (
          <button className='emfformasbutt' onClick={handleButtonClick}>Εμφάνιση φορμας</button>
        )}
        {showForm && (
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScc9ixVlR7VVquBQF3xz7tqANRa9UseRxA9YWXsIjrDlVGmUQ/viewform?embedded=true" width="100%" height="1000" frameBorder="0" marginHeight="0" marginWidth="0">Φόρτωση…</iframe>
        )}
      </div>

    </div>
  );
};

export default Ebook;