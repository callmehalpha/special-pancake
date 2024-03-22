import React from 'react';
import './Erotic.css';

const Erotic = () => {
  return (
    <section className="t-wrapper">
        <div className="container paddings">
            <div className="row">
                <div className="col col-md-8 col-sm-6 t-left">
                    <span className="blackText">Erotica Stories</span>
                    <span className="bullet">
                        <ul className="bullet-style">
                        <li>Immerse yourself in captivating erotica narratives instantly accessible at your fingertips.</li>
                        <li>Engage with diverse themes and characters, igniting your imagination and desires.</li>
                        <li>Download our App now to embark on an unforgettable journey to the realm of erotic storytelling.</li>
                        <li>Explore a world of passion and excitement with our exclusive Story feature.</li>
                        </ul>
                    </span>

                    <button className="live-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Join waiting
                        list
                    </button>
                </div>

                <div className="col col-md-4 col-sm-6 t-right">
                    <img src="./images/erotica-img.png" alt='' width={370}/>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Erotic
