import React from 'react'
import './Footer.css';
import { Facebook } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import { Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="container paddings">
          <div class="row">
          
          <div class = "col-sm f-left">
            <img src="./images/foot-logo.png" alt='brand-logo' className="foot-img"/>
            <div className="foot-icon">
              <span><Facebook /></span> &nbsp; &nbsp;
              <span><Twitter /></span> &nbsp; &nbsp;
              <span><LinkedIn /></span> &nbsp; &nbsp;
              <span><Instagram /></span> &nbsp; &nbsp;
            </div>
            <div  className="copy">
            <span>Copyright &copy; 2024 hookPNP, All Right Reserved</span>
            </div>
          </div>

          <div class="col-sm">
          
          <div className="flexStart f-menu">

            <a href= "#">About us</a>
            <a href="#">How it works</a>
            <a href= "#">FAQs</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
   
          </div>
          </div>
          </div>
        </div>
        
    </section>
  )
}

export default Footer