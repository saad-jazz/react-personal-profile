import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Project() {
    return(
        <section id="my-projects">
            <div className="container-fluid projectDiv">
                <div className="row">
                    <div className="col-lg-12 custom-mid">
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
                <div className="row custom-pad">
                    <div className="col-sm-6">
                        <p className="custom-color-white">Cicero famously orated against his political opponent Lucius Sergius Catilina. Occasionally the first Oration against Catiline is taken for type specimens: Quo usque tandem abutere, Catilina, patientia nostra? Quam diu etiam furor iste tuus nos eludet? (How long, O Catiline, will you abuse our patience? And for how long will that madness of yours mock us?</p>
                        <p className="custom-color-white">There's lot of hate out there for a text that amounts to little more than garbled words in an old language. The villagers are out there with a vengeance to get that Frankenstein, wielding torches and pitchforks, wanting to tar and feather it at the least, running it out of town in shame.</p>
                        <p className="custom-color-white">Lorem Ipsum actually is usefull in the design stage as it focuses our attention on places where the content is a dynamic block coming from the CMS (unlike static content elements that will always stay the same.) Blocks of Lorem Ipsum with a character count range provide a obvious reminder to check and re-check that the design and the content model match up.</p>
                    </div>
                    <div className="col-sm-6">
                        <p className="custom-color-white">Cicero famously orated against his political opponent Lucius Sergius Catilina. Occasionally the first Oration against Catiline is taken for type specimens: Quo usque tandem abutere, Catilina, patientia nostra? Quam diu etiam furor iste tuus nos eludet? (How long, O Catiline, will you abuse our patience? And for how long will that madness of yours mock us?</p>
                        <p className="custom-color-white">There's lot of hate out there for a text that amounts to little more than garbled words in an old language. The villagers are out there with a vengeance to get that Frankenstein, wielding torches and pitchforks, wanting to tar and feather it at the least, running it out of town in shame.</p>
                        <p className="custom-color-white">Lorem Ipsum actually is usefull in the design stage as it focuses our attention on places where the content is a dynamic block coming from the CMS (unlike static content elements that will always stay the same.) Blocks of Lorem Ipsum with a character count range provide a obvious reminder to check and re-check that the design and the content model match up.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;