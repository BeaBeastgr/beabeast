import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import './exercise.css';

const Exercise = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { muscle } = queryString.parse(location.search);
  
    useEffect(() => {
      if (!muscle) {
        navigate('/exercises');
      }
    }, [muscle, navigate]);

  return (
    <div className='Ebook'>
      <h1>Exercise, epilextike to: {muscle}</h1>
    </div>
  );
};

export default Exercise;
