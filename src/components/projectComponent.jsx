import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Project() {
    return(
        <section id="my-projects">
            <div className="container-fluid projectDiv">
                <div className="row">
                    <div className="col-lg-12 custom-mid custom">
                        <h3 className="custom-color-white">Projects</h3>
                        <div className="custom-star">
                            <div className="custom-line-light"/>
                            <div className="icon">
                                <i>
                                    <FontAwesomeIcon className="custom-color-white" icon={faStar}/>
                                </i>
                            </div>
                            <div className="custom-line-light"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <ul className="custom-color-white tester custom"> 
                            <li><b>Final Year Project: Centralized E-Portal for ICCI <i>(MERN Stack | Material UI).</i></b></li>
                            <li>Artist Management System; <a className="custom-color-white" target="_blank" rel="noreferrer" href="http://www.thenxtproduction.com">The NXT Production</a> <i>(Wordpress).</i></li>
                            <li>Portfolio for PakTechX; <a className="custom-color-white" target="_blank" rel="noreferrer" href="https://www.paktechx.com">PakTechX</a> <i>(Wordpress).</i></li>
                            <li>Real Estate Web Solution; <a className="custom-color-white" target="_blank" rel="noreferrer" href="http://www.afnanassociates.com">Afnan Associates</a> <i>(Wordpress).</i></li> 
                            <li>Doctors Management System <i>(J2EE).</i></li>
                            <li>Customized ERP Solution <i>(J2EE).</i></li>
                            <li>Automatic Number Plate Detection <i>(MATLAB/DIP).</i></li>
                            <li>Emotion Detection using Audio <i>(Python/ML).</i></li>
                            <li>Voice Recognition <i>(Python/ML).</i></li>
                            <li>Attendance System using QR/BarCode &amp; Biometrics <i>(C#).</i></li>
                            <li>E-Voting System using QR/BarCode &amp; Biometrics <i>(C#).</i></li>
                            <li>Inventory System, Pay Roll Slip &amp; Mini Compiler <i>(C#).</i></li>
                            <li>Thai Walks Management System <i>(C#).</i></li>
                            <li>Grocery Store Management System <i>(C#).</i></li>
                            <li>Various Mgt. Systems involving File Handling &amp; Database <i>(C#, Java).</i></li>
                            <li>Music Player &amp; Calculator <i>(Android).</i></li>
                            <li>Typing Master, Tic Tac Toe, Diary Management System <i>(C++).</i></li>
                        </ul>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
        </section>
    );
}

export default Project;