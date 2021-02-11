import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { scroller } from 'react-scroll';
import { faStar } from "@fortawesome/free-solid-svg-icons";

function About() {
    const scrollTo = (e) => {
        scroller.scrollTo(e.target.href.split('#')[1], {
            duration: 1000,
            delay: 0,
            smooth: "easeInOutQuart",
          });
        }
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
                        <p className="custom-color-blue">Hi! My name is <b>Muhammad <i>Saad</i> Mir</b>, I am 25 years old <i>Computer Scientist/Software Engineer</i> from <i>Islamabad, Pakistan.</i> I've completed my graduation in <i>Bachelors of Science in <b>Computer Science</b></i> from <i>COMSATS University Islamabad, Wah Campus</i> in January, 2020. Afterwards I've Joined <i>Medical Transcription &amp; Billing Company(MTBC)</i> as Software Engineer(MERN Stack Developer) in February, 2020.</p>
                        <p className="custom-color-blue">I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques are important to me. I am highly skilled in designing, testing, and developing software. I have thorough understanding of data structures and algorithms. I am Knowledgeable of back-end development best practices.</p>
                        <p className="custom-color-blue">My other hobbies includes playing cricket, swimming, watching movies, driving with some music &amp; some E-Gaming that includes MOHAA, Call of Duty 4, GTA V, PUBG and many more. For any queries, please refer to <a onClick={scrollTo} href="#contact-me">Contact</a> Section below.</p>
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