import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import './exercise.css';
import Triceps from '../../Assets/Images/triceps.png';
import Biceps from '../../Assets/Images/biceps.png'; 
import Deltoids from '../../Assets/Images/deltoid.png'; 
import Pectorals from '../../Assets/Images/pectorals.png';
import Quads from '../../Assets/Images/quadricep.png';
import Abs from '../../Assets/Images/abs.png';
import Adductors from '../../Assets/Images/adductors.png';
import Obliques from '../../Assets/Images/oblique.png';
import Trapezius from '../../Assets/Images/trapezius.png';
import Lats from '../../Assets/Images/lats.png';
import Glutes from '../../Assets/Images/Glutes.png';
import Hamstrings from '../../Assets/Images/Hamstrings.png';
import Calves from '../../Assets/Images/Calves.png';
import Forearms from '../../Assets/Images/forearm.png';
import abs1 from '../../Assets/ImageAskhsewn/abs1.png';
import arrow from '../../Assets/Images/downarrow.png';

const muscleImages = {
  Triceps: Triceps,
  Biceps: Biceps,
  Deltoids: Deltoids,
  Pectorals: Pectorals,
  Quads: Quads,
  Abs: Abs,
  Adductors: Adductors,
  Obliques: Obliques,
  Trapezius: Trapezius,
  Lats: Lats,
  Glutes: Glutes,
  Hamstrings: Hamstrings,
  Calves: Calves,
  Forearms: Forearms,
  // Πρόσθεσε όλες τις μυϊκές ομάδες με τις αντίστοιχες εικόνες τους εδώ
};

const Exercise = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { muscle } = queryString.parse(location.search);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    if (!muscle) {
      navigate('/exercises');
    } else if (muscleImages[muscle]) {
      setImageSrc(muscleImages[muscle]);
    }
  }, [muscle, navigate]);

  return (
    <div className='Ebook'>
      <br/><br/>
      <div className='tonamekaitoimg'>
          {imageSrc ? (
            <img src={imageSrc} alt={muscle} className='tomuscleImg' />
          ) : (
            <p>Image not found</p>
          )}
            <span>{muscle}</span>
      </div>
      <br/><br/>
      <div className='haskhshsmesa'>
        <div className='askhsh'>
            <img src={abs1} alt='' className='askhsheimage'/>
            <span>Onoma askhshs</span>
            <img src={arrow} alt='' className='arrow' />
        </div>
        <div className='toapokatw'>
          <br/>
          <div className='kentrohEikona'>
            <img src={abs1} alt='' className='eikonaaskMegalh' />
          </div>
          <span>Epeksigisi:</span><br/><br/>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eos dolore ipsa unde ullam reiciendis similique corrupti repellat? Perspiciatis necessitatibus adipisci sunt amet, labore vero sapiente delectus. Facilis, optio velit!
          </span>
          <br/><br/>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
