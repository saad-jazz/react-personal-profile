import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { GoogleSpreadsheet } from "google-spreadsheet";

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            msg:'',
            disp: 'none',
            btn: false,
            visitors: 'Loading...'
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit = async e => {
        this.setState({btn: true});
        e.preventDefault();
        let SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
        let SHEET_ID = process.env.REACT_APP_SHEET_ID;
        let CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
        let PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY;
        let doc = new GoogleSpreadsheet(SPREADSHEET_ID);
        const {name, email, msg} = this.state;
        const appendSpreadsheet = async (row) => {
            try {
              await doc.useServiceAccountAuth({
                client_email: CLIENT_EMAIL,
                private_key: PRIVATE_KEY,
              });
              // loads document properties and worksheets
              await doc.loadInfo();
          
              const sheet = doc.sheetsById[SHEET_ID];
              await sheet.addRow(row);
            } catch (e) {
              console.error('Error: ', e);
            }
          };
          let date = new Date();
          date.setHours(date.getHours()+5);
          const newRow = { Name: name, Email: email, Message: msg, TimeStamp: date};
          await appendSpreadsheet(newRow);
          this.setState({disp:'block', name: '', email: '', msg: '', btn: false});
          setTimeout(
            () => this.setState({ disp:'none' }), 
            5000
          );
    }

    handleInputChange = e => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }
    async componentDidMount() {
        let SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
        let SHEET_ID = process.env.REACT_APP_V_SHEET_ID;
        let CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
        let PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY;
        let doc = new GoogleSpreadsheet(SPREADSHEET_ID);
        const appendSpreadsheet = async () => {
            try {
              await doc.useServiceAccountAuth({
                client_email: CLIENT_EMAIL,
                private_key: PRIVATE_KEY,
              });
              await doc.loadInfo();
              const sheet = doc.sheetsById[SHEET_ID];
              let v = await sheet.getRows();
              this.setState({visitors: parseInt(v[0].Visitor_Count)+1});
              v[0].Visitor_Count = this.state.visitors;
              await v[0].save();
            } catch (e) {
              console.error('Error: ', e);
            }
          };
          await appendSpreadsheet();
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
                    <div className="row bottomDiv ">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <form autoComplete="on" className="form custom-color-blue custom" id="formContact" name="formContact" onSubmit={this.handleSubmit} >
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
                                    <label htmlFor="msg" className="custom-color-blue col-2 col-form-label" >Message</label>
                                    <div className="col-10">
                                        <textarea autoComplete="msg" rows="6" className="form-control" name="msg" id="msg" required type="textarea" value={this.state.msg} onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                                <div className="form-group row response" style={{display:this.state.disp}}>
                                    <div className="col-md-12">
                                        <p className="custom-color-white">Response Submitted...</p>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary btn-m float-right custom-btn-green" type="submit" disabled={this.state.btn}>Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-3"></div>
                        <div className="col-md-12">
                            <p className="visitors custom-color-blue">Visitors: {this.state.visitors}</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    
}

export default Contact;