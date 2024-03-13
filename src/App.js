import React from 'react';
import './App.css'
import Exam from './components/Exam/Exam';
import Hero from './components/Hero/Hero';
import Slide from './components/Slide/Slide';
import Room from './components/Room/Room';
import Erotic from './components/Erotic/Erotic';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';


function App() {
    return(
        <div classname="App">
            <Exam />   
            <Hero />
            <Slide />
            <Room />
            <Erotic />
            <Join />
            <Footer />
           
        </div>
       

    )
}


export default App;