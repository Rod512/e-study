import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';

const App = () => {
  return (
    <>
      <Navbar/>
      <main>
      
        <div id='home'>
          <Home/>
        </div>

        <div id='about'>
          <About/>
        </div>

        <div id='courses'>
          <Courses/>
        </div>

      </main>
    </>
  );
};

export default App;