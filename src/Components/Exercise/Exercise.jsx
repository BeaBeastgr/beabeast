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
import Trapezius from '../../Assets/Images/back.png';
import Lats from '../../Assets/Images/lats.png';
import Glutes from '../../Assets/Images/Glutes.png';
import Hamstrings from '../../Assets/Images/Hamstrings.png';
import Calves from '../../Assets/Images/Calves.png';
import Forearms from '../../Assets/Images/forearm.png';
import arrow from '../../Assets/Images/downarrow.png';
import exerciseTable from '../DB/ExercDB.js';

const muscleImages = {
  Triceps: Triceps,
  Biceps: Biceps,
  Deltoids: Deltoids,
  Pectorals: Pectorals,
  Quads: Quads,
  Abs: Abs,
  Adductors: Adductors,
  Obliques: Obliques,
  Back: Trapezius,
  Lats: Lats,
  Glutes: Glutes,
  Hamstrings: Hamstrings,
  Calves: Calves,
  Forearms: Forearms,
};

const Exercise = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { muscle } = queryString.parse(location.search);
  const [imageSrc, setImageSrc] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [showDetails, setShowDetails] = useState([]);
  
  useEffect(() => {
    if (!muscle) {
      navigate('/exercises');
    } else {
      if (muscleImages[muscle]) {
        setImageSrc(muscleImages[muscle]);
      }
      const muscleExercises = exerciseTable.find(group => group.muscleGroup === muscle);
      if (muscleExercises) {
        setExercises(muscleExercises.exercises);
      }
    }
  }, [muscle, navigate]);

  const toggleDetails = (index) => {
    setShowDetails(prevShowDetails => {
      const newShowDetails = [...prevShowDetails];
      newShowDetails[index] = !newShowDetails[index];
      return newShowDetails;
    });
  };

  return (
    <div className='Ebook'>
      <br/><br/>
      <div className='hAskhsh'>
        <div className='tonamekaitoimg'>
          {imageSrc ? (
            <img src={imageSrc} alt={muscle} className='tomuscleImg' />
          ) : (
            <p>Image not found</p>
          )}
          <span>{muscle}</span>
        </div>
        <br /><br />

        <div className='haskhshsmesa'>
          {exercises.map((exercise, index) => (
            <div key={index} className='askhsh-container'>
              <div className='askhsh' onClick={() => toggleDetails(index)}>
                <img src={exercise.ImageLink} alt={exercise.Onoma} className='askhsheimage' />
                <span>{exercise.Onoma}</span>
                <img src={arrow} alt='arrow' className='arrow' />
              </div>
              {showDetails[index] && (
                <div className='toapokatw'>
                  <br />
                  <div className='kentrohEikona'>
                    <img src={exercise.ImageLink} alt={exercise.Onoma} className='eikonaaskMegalh' />
                  </div>
                  <span>Επεξήγηση:</span><br /><br />
                  <span dangerouslySetInnerHTML={{ __html: exercise.Epeksigisi }}></span>
                  <br /><br />
                </div>
              )}
            </div>
          ))}
          <br /><br /><br /><br />
        </div>
        </div>
    </div>
  );
};

export default Exercise;
