import React from 'react';
import './Erotic.css';

const Erotic = () => {
  return (
    <section className="t-wrapper">
        <div className="container paddings">
            <div class="row">
            <div class="col col-md-8 col-sm-6 t-left">
                <span className="blackText">Erotica Stories</span>
                    <span className="bullet">
                        <ul className="bullet-style">
                        <li>Immerse yourself in captivating erotica narratives instantly accessible at your fingertips.</li>
                        <li>Engage with diverse themes and characters, igniting your imagination and desires.</li>
                        <li>Download our App now to embark on an unforgettable journey to the realm of erotic storytelling.</li>
                        <li>Explore a world of passion and excitement with our exclusive Story feature.</li>
                        </ul>
                    </span>
                    <button className="live-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Join waiting list</button>
                         {/* <!-- Modal --> */}
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header border-0">
        <h5 class="modal-title w-100 text-center" id="staticBackdropLabel">Join waiting list</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-center">
        <small className="small-f">Be the first to know when we launch, and get exclusive offers and goodies</small>
      </div>
      <form>
          <div class="mb-3">
            <input type="text" class="form-control letter" placeholder="Your email address here " />
          </div>
          </form>
      <div class="modal-footer border-0">
        <button type="button" class="btn join">Join</button>
      </div>
    </div>
  </div>
</div>
                </div>

                <div class="col col-md-4 col-sm-6 t-right">
                <img src="./images/erotica-img.png" alt='' width={370} />
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default Erotic