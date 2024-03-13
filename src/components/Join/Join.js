import React from 'react';
import './Join.css';

const Join = () => {
    return (
        <section className="j-wrapper">
            <div className="container paddings">
                <div class="row">
                <div class="col col-md-8 col-sm-6 j-left">
                   <span className="j-text">Be the first to know</span> 
                  <br />
                  <br />
                        <button className="j-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Join waiting list</button>
                    </div>

                <div className="col col-md-4 col-sm-6 j-right">
                    <div className="image-cont">
                     <img src="./images/join-img.png" alt="img"/>
                    </div>
                </div>
                </div>
                

            </div>
        </section>
    )
}
export default Join