import React, {useState} from 'react';
import axios from 'axios';
import './Erotic.css';

const Erotic = () => {
    const [email, setEmail] = useState('');

    const handleJoin = () => {
        console.log('hello');
       /* axios.post('https://hookpnp.site/api/newsletters/subscribe', { email })
            .then(response => {
                console.log('API call successful:', response.data);

                setEmail('');
                /!* const modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
                 modal.hide();*!/
            })
            .catch(error => {
                console.error('API call failed:', error);
            });*/
    };
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
                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                         tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-md">
                            <div className="modal-content">
                                <div className="modal-header border-0">
                                    <h5 className="modal-title w-100 text-center" id="staticBackdropLabel">Join waiting
                                        list</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                </div>
                                <div className="modal-body text-center">
                                    <small className="small-f">Be the first to know when we launch, and get exclusive
                                        offers and goodies</small>
                                </div>

                                    <div className="mb-3">
                                        <input type="text" className="form-control letter"
                                               placeholder="Your email address here" value={email}
                                               onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                <div className="modal-footer border-0">
                                    <button type="button" className="btn join" onClick={handleJoin}>Join</button>
                                </div>
                            </div>
                        </div>
                    </div>
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
