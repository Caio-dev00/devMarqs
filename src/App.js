import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div className="App">
            <Particles options={particlesOptions} init={particlesInit}/>
            <Header />

            <Home />

            <Footer/>
        </div>
    );
}

export default App;
