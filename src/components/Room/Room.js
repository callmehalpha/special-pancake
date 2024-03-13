import React from 'react';
import './Room.css';

const Room = () => {
  return (
    <section className= "r-wrapper">
           <div class="container paddings">
            <div class="row">
            
            <div class="col col-md-4 col-sm-6 r-left">
                <img src="./images/live-img.png"  alt='' width={370}/>
                </div>

                <div class="col col-md-8 col-sm-6 r-right">
                <span className="blackText">Live Room</span>
                    <span className="bullet">
                        <ul className="bullet-style">
                            <li>Experience captivating live performances by talented courtesans with instant access upon payment.</li>
                            <li>Engage interactively by gifting virtual tokens to your favorite courtesans in real-time.</li>
                            <li>Download our App now to unlock a world of unforgettable live entertainment.</li>
                            <li>Indulge in the allure of live entertainment like never before with our exclusive Live Courtesan Rooms.</li>
                        </ul>
                    </span>
                    <button className="live-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Join waiting list</button>
                </div>
                </div>
            </div>
        
    </section>
  )
}

export default Room