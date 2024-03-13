import React from 'react'
import './Hero.css';

const Hero = () => {
    return (
        <div className= "hero-wrapper">
        
         <section className="paddings  flexCenter hero-container">
         
            <div className="hero-des">
            
            <img src="./images/red-hart.png" alt="" className="red-hart"/>
            <img src="./images/red-heart.png" alt="" className="red-heart"/>
            
            
                <h3 className="hero-title"> The home of pleasure</h3>
                <h6 className="hero-sl">Bringing pleasure to your fingertips</h6>
                <img src= "./images/love-letter.png" className="love-letter" alt='img' />
                    <div className="btn-style">
                        <a href="#"> <button className="button-play">
                             Available on PlayStore (soon)
                        </button>
                        </a>
                        <a href="#">  <button className="button-store">
                            Available on AppleStore (soon)
                        </button>  
                        </a> 
                    </div> 
                    <div className="frame-img">
                        <img src="./images/frame.png" alt="frame" width={700}/>
                    </div>   
                </div>
        </section>
       </div>
    )
}

export default Hero