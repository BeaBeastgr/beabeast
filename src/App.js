import './App.css';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; 
import HomePage from './Components/HomePage/HomePage.jsx';
import Header from './Base/Header/Header.jsx';
import Footer from './Base/Footer/Footer.jsx';
import StartNow from './Components/StartNow/StartNow.jsx';
import Exercises from './Components/Exercises/Exercises.jsx';
import Ebook from './Components/Ebook/Ebook.jsx';
import Exercise from './Components/Exercise/Exercise.jsx';

function HomeWithHeader() {
  useDocumentTitle("Home");
  useScrollToTop();
  return <HomePage />;
}

function StartNowWithHeader() {
  useDocumentTitle("Start Now");
  useScrollToTop();
  return <StartNow />;
}

function ExercisesWithHeader() {
  useDocumentTitle("Exercises");
  useScrollToTop();
  return <Exercises />;
}

function ExerciseWithHeader() {
  useDocumentTitle("Exercise");
  useScrollToTop();
  return <Exercise />;
}

function EbookWithHeader() {
  useDocumentTitle("Ebook");
  useScrollToTop();
  return <Ebook />;
}

function useDocumentTitle(title) {
  const location = useLocation();
  useEffect(() => {
    document.title = title;
  }, [location, title]);
}

function useScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}

function App() {
  return (
    <Router>
      <Header /> 
        <Routes>
          <Route path="/" element={<HomeWithHeader />} /> 
          <Route path="/startnow" element={<StartNowWithHeader />} /> 
          <Route path="/exercises" element={<ExercisesWithHeader />} /> 
          <Route path="/exercise" element={<ExerciseWithHeader />} /> 
          <Route path="/ebook" element={<EbookWithHeader />} /> 
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
