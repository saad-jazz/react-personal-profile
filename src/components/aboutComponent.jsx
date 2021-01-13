import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

function About() {
    return(
        <section id="about-me">
            <div className="container-fluid aboutDiv">
                <div className="row">
                    <div className="col-lg-12 custom-mid">
                        <h3 className="custom-color-blue">About Me</h3>
                        <div className="custom-star">
                            <div className="custom-line-dark"/>
                            <div className="icon">
                                <i>
                                    <FontAwesomeIcon className="custom-color-blue" icon={faStar}/>
                                </i>
                            </div>
                            <div className="custom-line-dark"/>
                        </div>
                    </div>
                </div>
                <div className="row custom-pad custom">
                    <div className="col-sm-6">
                        <p className="custom-color-blue">Cicero famously orated against his political opponent Lucius Sergius Catilina. Occasionally the first Oration against Catiline is taken for type specimens: Quo usque tandem abutere, Catilina, patientia nostra? Quam diu etiam furor iste tuus nos eludet? (How long, O Catiline, will you abuse our patience? And for how long will that madness of yours mock us?</p>
                        <p className="custom-color-blue">There's lot of hate out there for a text that amounts to little more than garbled words in an old language. The villagers are out there with a vengeance to get that Frankenstein, wielding torches and pitchforks, wanting to tar and feather it at the least, running it out of town in shame.</p>
                        <p className="custom-color-blue">Lorem Ipsum actually is usefull in the design stage as it focuses our attention on places where the content is a dynamic block coming from the CMS (unlike static content elements that will always stay the same.) Blocks of Lorem Ipsum with a character count range provide a obvious reminder to check and re-check that the design and the content model match up.</p>
                    </div>
                    <div className="col-sm-6">
                        <h3 className="custom-color-blue">Highlights</h3>
                        <ul className="custom-color-blue">
                            <li className="custom-color-blue">Working as Software Engineer[MERN Stack] at MTBC From Feb-2020 to Present</li>
                            <ul className="custom-color-blue">
                                <li className="custom-color-blue">Smooth Transitioning of Carecloud's Monthly data on Realtime.</li>
                                <li className="custom-color-blue">Porposed and Developed Salestax solution for MTBC &amp; Carecloud using Avalara(Avatax).</li>
                                <li className="custom-color-blue">Provided Finance Team with the Interface through which they can run multiple queries on Salesforce and save it into Oracle EBS System.</li>
                            </ul>
                            <li className="custom-color-blue">Completed Bachelors of Science in Computer Science from COMSATS University Islamabad, Wah Campus in Jan-2020 with CGPA of 3.38</li>
                            <ul className="custom-color-blue">
                                <li className="custom-color-blue">Web Development, Database Development, Artificial Intelligence, Machine Learning, Digital Image Processing, Automata Theory, Compiler Construction &amp; Design and Analysis of Algorithms</li>
                            </ul>
                            <li className="custom-color-blue">Completed Intermediate of Computer Science from Punjab College of Science, Blue Area, Islamabad in Jan-2015, with Percentage of 62% </li>
                        <li className="custom-color-blue">Completed Matriculation (Science Group) from Islamabad Model College for Boys F-8/4, Islamabad in Jan-2013, with Percentage of 68%</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;