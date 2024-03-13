import React from 'react';
import Marquee from 'react-fast-marquee';
import './Slide.css';

function Slide() {
  return (
    <div className="b-cont">
        <Marquee play>
            <div className="button-wrapper">
                <button>London</button>
            </div>
            <div className="button-wrapper" >
                <button>Madrid</button>
            </div>
            <div className="button-wrapper">
                <button>Abuja</button>
            </div>
            <div className="button-wrapper">
                <button>Accra</button>
            </div>
            <div className="button-wrapper">
                <button>Berlin</button>
            </div>
            <div className="button-wrapper">
                <button>Amsterdam</button>
            </div>
            <div className="button-wrapper">
                <button>Nairobi</button>
            </div>
            <div className="button-wrapper">
                <button>South Korea</button>
            </div>
            <div className="button-wrapper">
                <button>China</button>
            </div>
            <div className="button-wrapper">
                <button>Liverpool</button>
            </div>
            <div className="button-wrapper">
                <button>Lagos</button>
            </div>
            <div className="button-wrapper">
                <button>Port-Harcourt</button>
            </div>
            <div className="button-wrapper">
                <button>Singapore</button>
            </div>
            <div className="button-wrapper">
                <button>Delhi</button>
            </div>
            <div className="button-wrapper">
                <button>Abu-Dhabi</button>
            </div>
            
            <div className="button-wrapper">
                <button>Germany</button>
            </div>
            <div className="button-wrapper">
                <button>Russia</button>
            </div>
            <div className="button-wrapper">
                <button>Budapest</button>
            </div>
            <div className="button-wrapper">
                <button>Turkey</button>
            </div>
            <div className="button-wrapper">
                <button>Huruguay</button>
            </div>
        </Marquee>
    </div>
  )
}

export default Slide