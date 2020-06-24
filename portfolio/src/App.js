import React, { useEffect } from 'react';
import gsap from "gsap";
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';

function App() {
  
  useEffect(() => {

    gsap.from(".title-container", {height:0, delay:0.5, duration:0.75, ease: "expo.out"});
    gsap.from(".name", {opacity:0, delay:1, duration:0.75});
    gsap.from(".sub-name", {opacity:0, delay:1, duration:0.75});

  }, []);
  
  return (
    
    <Switch>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    
  );
}

export default App;
