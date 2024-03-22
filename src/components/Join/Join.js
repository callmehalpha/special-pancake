import React, {useState} from 'react';
import './Join.css';

const Join = () => {
    const [email, setEmail] = useState('');

    return (
        <section className="j-wrapper">
            <div className="container paddings">
                <div className="row">
                    <div className="col col-md-8 col-sm-6 j-left">
                        <span className="j-text">Be the first to know</span>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                            <input type="text" className="form-control letter"
                                   placeholder="Your email address here" value={email}
                                   onChange={(e) => setEmail(e.target.value)}/>
                        <button className="j-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Join waiting
                            list
                        </button>
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
