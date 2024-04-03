import React from 'react';
import './Footer.css';
import facebookLogo from "./Images/face.png";
import github from './Images/github.png';
import linked from "./Images/Link.png";
import youtube from "./Images/Youtube.png"

export default function Footer() {

    return (
        <div className="container-fluid bg-dark bg-gradient text-white" style={{ minHeight: '150px' }}>
            <div className="container">
                <div className="row pt-4 d-flex justify-content-between">
                    <div className="col-sm-12 col-md-3 mb-3">
                        <h1 style={{ fontSize: '1.1rem' }} className="pb-2">ABOUT US</h1>
                        <hr width="60px" style={{ marginTop: '-8px' }} />

                        <p style={{ fontSize: '0.9rem', textAlign: 'justify', fontWeight: '400' }}>Energetic, hardworking,
                            innovative and ambitious person with a great passion for software engineering field.</p>
                    </div>
                    <div className="col-sm-12 col-md-3 mb-3">
                        <h1 style={{ fontSize: '1.1rem' }} className="pb-2">PROJECTS</h1>
                        <hr width="60px" style={{ marginTop: '-8px' }} />

                        <p style={{ fontSize: '0.9rem', textAlign: 'justify', fontWeight: '400' }} id="pharmacy">Pharmacy
                            Management System
                        </p>

                        <p style={{ fontSize: '0.9rem', textAlign: 'justify', fontWeight: '400' }} id="hardy">Web Base Of The
                            Particular
                            Institution</p>

                        <p style={{ fontSize: '0.9rem', textAlign: 'justify', fontWeight: '400' }} id="nic">Sri Lankan NIC
                            Calculator</p>
                    </div>
                    <div className="col-sm-12 col-md-3 mb-3">
                        <h1 style={{ fontSize: '1.1rem' }} className="pb-2">SOCIAL MEDIA</h1>
                        <hr width="60px" style={{ marginTop: '-8px' }} />

                        <p>
                            <a href="https://www.facebook.com/nghi.khanh.3" style={{ marginRight: '5px' }}><img
                                src={facebookLogo} alt="" width="30px" /></a>
                            <a href="https://www.linkedin.com/in/kh%C3%A1nh-nghi-14174724b/"
                                style={{ marginRight: '5px' }}><img src={linked} alt=""
                                    width="30px" /></a>
                            <a href="https://github.com/khanhnghi29" style={{ marginRight: '5px' }}><img src={github} alt=""
                                width="30px" /></a>
                            <a href="https://www.youtube.com/channel/UCGb_Prt5X_elyjNflt0b3AQ"
                                style={{ marginRight: '5px' }}><img src={youtube} alt=""
                                    width="30px" /></a>
                        </p>
                    </div>
                </div>

                <hr />

                <div className="pb-3" style={{ fontSize: '0.9rem', textAlign: 'justify', fontWeight: '300' }}>Created By <span
                    className="name">Khánh Nghi</span> | &#169; 2024 All rights reserved.</div>
            </div>
        </div>
    );
}