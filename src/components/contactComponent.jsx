import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            msg:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit = e => {
        e.preventDefault();
        alert(this.state.name);
        alert(this.state.email);
        alert(this.state.msg);
    }

    handleInputChange = e => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }

    render(){
        return(
            <section id="contact-me">
                <div className="container-fluid contactDiv">
                    <div className="row">
                        <div className="col-lg-12 custom-mid">
                            <h3 className="custom-color-blue">Contact</h3>
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
                    <div className="row bottomDiv">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <form autoComplete="on" className="form" id="formContact" name="formContact" role="form" onSubmit={this.handleSubmit}>
                                <div className="form-group row">
                                    <label htmlFor="name" className="col-2 col-form-label">Name</label>
                                    <div className="col-10">
                                        <input autoComplete="name" className="form-control" name="name" id="name" required type="text" value={this.state.name} onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="email" className="col-2 col-form-label">Email</label>
                                    <div className="col-10">
                                        <input autoComplete="email" className="form-control" name="email" id="email" required type="email" value={this.state.email} onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="msg" className="col-2 col-form-label">Message</label>
                                    <div className="col-10">
                                        <textarea autoComplete="msg" rows="6" className="form-control" name="msg" id="msg" required type="textarea" value={this.state.msg} onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary btn-m float-right" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </section>
        );
    }
    
}

export default Contact;