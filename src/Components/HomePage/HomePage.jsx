import React from 'react';
import './homepage.css';
import baraki from '../../Assets/Images/dumbbell.png';
import exers from '../../Assets/Images/exers.png';
import ebook from '../../Assets/Images/book.png';
import treadmill from '../../Assets/Images/workout.png';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import profil from '../../Assets/Images/profil.jpeg';
import profil2 from '../../Assets/Images/profil2.jpeg';
import profil5 from '../../Assets/Images/profil5.jpeg';
import profil6 from '../../Assets/Images/profil6.jpg';

const HomePage = () => {
  return (
    <div className='homepagediv'>
      <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,600 L 0,112 C 101.79904306220095,111.5980861244019 203.5980861244019,111.19617224880382 310,105 C 416.4019138755981,98.80382775119618 527.4066985645934,86.81339712918661 616,80 C 704.5933014354066,73.18660287081339 770.7751196172248,71.55023923444975 849,84 C 927.2248803827752,96.44976076555025 1017.4928229665072,122.98564593301435 1118,130 C 1218.5071770334928,137.01435406698565 1329.2535885167463,124.50717703349282 1440,112 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#e38c3b" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 300)"></path><path d="M 0,600 L 0,262 C 95.05263157894737,294.1244019138756 190.10526315789474,326.2488038277512 293,317 C 395.89473684210526,307.7511961722488 506.63157894736844,257.12918660287085 601,252 C 695.3684210526316,246.87081339712918 773.3684210526316,287.2344497607656 870,297 C 966.6315789473684,306.7655502392344 1081.8947368421054,285.933014354067 1180,275 C 1278.1052631578946,264.066985645933 1359.0526315789473,263.03349282296654 1440,262 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#e38c3b" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 300)"></path><path d="M 0,600 L 0,412 C 110.25837320574163,421.11004784689 220.51674641148327,430.2200956937799 302,415 C 383.48325358851673,399.7799043062201 436.1913875598086,360.2296650717704 540,369 C 643.8086124401914,377.7703349282296 798.7177033492824,434.8612440191387 903,436 C 1007.2822966507176,437.1387559808613 1060.9377990430621,382.32535885167465 1142,369 C 1223.0622009569379,355.67464114832535 1331.531100478469,383.8373205741627 1440,412 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#e38c3b" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-2" transform="rotate(-180 720 300)"></path></svg>

      <div className='topanwhome'>
        <div className='toparistera'>
          <p>Η πιο δύσκολη μέρα για τη γυμναστική είναι η πρώτη. Κάθε επόμενη μέρα είναι ένα βήμα προς την καλύτερή σου έκδοση.</p>
          <Link to='/StartNow' className='tobutt'>Ξεκίνα σήμερα!</Link>
        </div>

        <div className='baraki' id='kinitamono'>
          <hr className='tohr'/>
          <img src={treadmill} alt='dumbell' className='tobaraki' />
          <hr className='tohr'/>
        </div>

        <Carousel className='topdeksia' showThumbs={false} autoPlay interval={5000}>
                <div className='eik1'>
                  <img src={profil} alt='gymimage' className='profilImg1'/>
                </div>
                <div className='eik1'>
                  <img src={profil2} alt='gymimage' className='profilImg1'/>
                </div>
                <div className='eik1'>
                  <img src={profil5} alt='gymimage' className='profilImg1'/>
                </div>
                <div className='eik1'>
                  <img src={profil6} alt='gymimage' className='profilImg1'/>
                </div>
            </Carousel>
      </div>

      <div className='baraki'>
          <hr className='tohr'/>
          <img src={baraki} alt='dumbell' className='tobaraki' />
          <hr className='tohr'/>
      </div>


      <div className='aytometoexer'>
          <div className='toaristeraexe'>
              <img src={exers} alt='exersisesImage' className='exersIMg'  />
          </div>
          
          <div className='todeksiaexer'>
            <p>Βρες εδώ της σημαντικότερες ασκήσεις για κάθε μυϊκή ομάδα συνοδευμένες από ένα βίντεο και ένα κείμενο επεξήγησης.</p>
            <br/>
            <Link to='/exercises' className='toexersButton'>Πάτα εδώ!</Link>
          </div>
      </div>

      <div className='tosvg'>
          <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 490" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,500 L 0,187 C 87.42583732057417,219.98564593301435 174.85167464114835,252.9712918660287 283,243 C 391.14832535885165,233.0287081339713 520.0191387559809,180.1004784688995 607,169 C 693.9808612440191,157.8995215311005 739.0717703349281,188.62679425837322 836,209 C 932.9282296650719,229.37320574162678 1081.6937799043064,239.39234449760767 1191,234 C 1300.3062200956936,228.60765550239233 1370.153110047847,207.80382775119617 1440,187 L 1440,500 L 0,500 Z" stroke="none" stroke-width="0" fill="#e38c3b" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
      </div>

      <div className='toybiblioy'>
        <div className='divEbook'>
          <img src={ebook} alt='Ebook' className='toEbook' />
        </div>
        <div className='katwapotoebook'>
          <p>
            Ξεκινάς τώρα την γυμναστική και νιώθεις ότι χρειάζεσαι καθοδήγηση; Έχουμε την τέλεια λύση για εσένα! Δημιουργήσαμε ένα εντελώς δωρεάν ebook που θα σε βοηθήσει να φτάσεις σε ένα βασικό επίπεδο φυσικής κατάστασης.<br/>
          </p>
          <Link to='/ebook' className='toebookbutton'>Θέλω το ebook!</Link>
        </div>      
        <br/><br/><br/><br/><br/><br/><br/>
      </div>
      
    </div>
  );
};

export default HomePage;