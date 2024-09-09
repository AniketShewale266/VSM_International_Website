import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
// import './App.css';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import Footer from './components/Footer';
// import AboutUs from './pages/AboutUsModern';
import AboutUsModern from './pages/AboutUs';
import { Outlet } from 'react-router-dom';
// import AboutUsElegant from './pages/AboutUsElegant';

function App() {
    return (
        <div className="App">
            <NavBar />
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default App;
