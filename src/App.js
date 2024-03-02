import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {

  const [progress, setProgress] = useState(0);

  const progressReachAt = (progress) => {
    setProgress(progress);
  }

  return (
    <Router>
      <LoadingBar height={3} color='#f11946' progress={progress} />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<News key="general" progressReachAt={progressReachAt} category="general"/>} />
        <Route exact path="/business1" element={<News key="business" progressReachAt={progressReachAt} category="business"/>} />
        <Route exact path="/health1" element={<News key="health" progressReachAt={progressReachAt} category="health"/>} />
        <Route exact path="/sports1" element={<News key="sports" progressReachAt={progressReachAt} category="sports"/>} />
        <Route exact path="/entertainment1" element={<News key="entertainment" progressReachAt={progressReachAt} category="entertainment"/>} />
        <Route exact path="/science1" element={<News key="science" progressReachAt={progressReachAt} category="science"/>} />
        <Route exact path="/technology1" element={<News key="technology" progressReachAt={progressReachAt} category="technology"/>} />
      </Routes>
    </Router>
  )
}

export default App;