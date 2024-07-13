import React, { useState } from 'react';
import './startnow.css';
import { Link } from 'react-router-dom';

const StartNow = () => {
  const [isAnswered, setIsAnswered] = useState(false);
  const [hrId, setHrId] = useState('');
  const [noymeroId, setnoymeroId] = useState('');

  const handleAnswerClick = () => {
    setIsAnswered(true);
    setHrId('ginegreen');
    setnoymeroId('twra');
  };

  return (
    <div className='toeksw'>
      <div className='tosvgstart'>
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
        <path d="M 0,600 L 0,112 C 100.39999999999998,102.26666666666667 200.79999999999995,92.53333333333333 390,105 C 579.2,117.46666666666667 857.2,152.13333333333333 1047,157 C 1236.8,161.86666666666667 1338.4,136.93333333333334 1440,112 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#00d084" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 300)"></path>
        <path d="M 0,600 L 0,262 C 143.59999999999997,268.1333333333333 287.19999999999993,274.2666666666667 470,272 C 652.8000000000001,269.7333333333333 874.8,259.06666666666666 1043,256 C 1211.2,252.93333333333334 1325.6,257.4666666666667 1440,262 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#00d084" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 300)"></path>
        <path d="M 0,600 L 0,412 C 121.33333333333331,385.6 242.66666666666663,359.2 409,357 C 575.3333333333334,354.8 786.6666666666667,376.8 966,390 C 1145.3333333333333,403.2 1292.6666666666665,407.6 1440,412 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#00d084" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-2" transform="rotate(-180 720 300)"></path></svg>
      </div>
      <div className='startNow'>
        <div className='progress'>
          <p className='noymero' id='prasino'>1</p>
          <hr className='tohrstostart' id='prasinostohr'/>
          <hr className='tohrstostart' id={hrId} />
          <p className='noymero' id={noymeroId} >2</p> 
        </div>

        <div className='erwthshs'>
          {!isAnswered && (
            <div className='eksafanisi'>
              <div className='ervthsh'>
                <p>Ποια είναι η φυσική σου κατάσταση αυτήν την στιγμή;</p>
              </div>

              <br/><br/>

              <div className='ligomesa'>
                <Link to='/ebook' className='tolink'>
                  <div className='apanthsh' id='apant1'>
                    <p>Ξεκινάω από το 0!</p>
                  </div>
                </Link>

                <div className='apanthsh' id='apant2' onClick={handleAnswerClick}>
                  <p>Έχω ξανακάνει γυμναστική, είμαι σε ένα σχετικά καλό επίπεδο και θέλω να βελτιωθώ παραπάνω!</p>
                </div>
              </div>
            </div>
          )}
          {isAnswered && (
            <div className='kentroedw'>
              <div className='ervthsh2'>
                <p>Παρακαλω συμπληρωστε την παρακατω φορμα:</p>
              </div>
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScVC46DraR0Z3HCtjmDSzoCvQyrM8OEZMiQ9pQYVy223bPmHQ/viewform?embedded=true" width="100%" height="3961" frameborder="0" marginheight="0" marginwidth="0">Φόρτωση…</iframe>
              <br/><br/><br/><br/><br/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StartNow;