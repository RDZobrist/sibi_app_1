import React from "react";
import { withRouter } from 'react-router'
import helpers from '../utils/helpers';
class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prefix:"",      
      firstName: "",
      surname: "",
      middleInitial: "",
      stateOfResidence:"",
      streetAddress: "",
      city: "",
      zipCode:"",
      password: "",
      password2: "",
      username:"",
      dob:"",
      telephoneNumber: "",
      emailAddress:"",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    // this.props.submitting();
    
    
    //         fetch('/').then( resjson => {
    //             // take `router` from `this.props` and push new location
    //             this.props.router.push("/success")
    //         }).catch(err => {
    //             // take `router` from `this.props` and push new location
    //             this.props.router.push("/Error_message_vault")
    //         })
        
  
    
  
    
    helpers.postSaved(
      this.state.prefix, 
      this.state.firstName, 
      this.state.middleInitial, 
      this.state.surname, 
      this.state.streetAddress, 
      this.state.city, 
      this.state.stateOfResidence, 
      this.state.zipCode, 
      this.state.emailAddress, 
      this.state.username, 
      this.state.password,
      this.state.telephoneNumber,
      this.state.dob)
      .then(()=> {
        console.log("Posted to MongoDB");
      });

    this.setState({ 
      firstName: "",
      surname: "",
      middleInitial: "",
      stateOfResidence:"",
      streetAddress: "",
      city: "",
      zipCode:"",
      password: "",
      password2: "",
      username:"",
      dob:"",
      emailAddress:"",
      telephoneNumber: "",
      prefix:"",
     });
                                                                                                                                                                                                                 
    }
  render() {

    return (
<div className="container">
      <div className="panel panel-default myPanel">
        <div className="panel-heading myPanelHeading">
          <h2 className="panel-title text-center ">Registration Form</h2>
        </div>
        <div className="panel-body text-center">

          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
       
                            <h4 className="">
                <strong>Title</strong>
              </h4>

             
              <input
                type="text"
                className="form-control text-center"
                id="prefix"
                value={this.state.prefix}
                onChange={this.handleChange}
                placeholder="Mr. Mrs. Ms. or Dr."
                required
              />
              <br />
            <div className="row">
            <div className="col-xs-4">
              <h4 className="">
                <strong>First name</strong>
              </h4>
              <input
                type="text"
                className="form-control text-center"
                id="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                placeholder="Your first name"
                required
              />  </div>         
              <div className="col-xs-4">
              
               <h4 className="">
                <strong>Middle initial</strong>
              </h4>

             
              <input
                type="text"
                className="form-control text-center"
                id="middleInitial"
                value={this.state.middleInitial}
                onChange={this.handleChange}
                placeholder="Middle initial only"
                required
              />
              </div>
                         <div className="col-xs-4">

              <h4 className="">
                <strong>Surname</strong>
              </h4>

             
              <input
                type="text"
                className="form-control text-center"
                id="surname"
                value={this.state.surname}
                onChange={this.handleChange}
                placeholder="Your last name"
                required
              />

              </div></div>
              <br />
             
              <h4 className="">
                <strong>Street Address</strong>
              </h4>
              <input
                type="text"
                className="form-control text-center"
                id="streetAddress"
                value={this.state.streetAddress}
                onChange={this.handleChange}
                placeholder="12345 your house blvd"
                required
              />
              <br />  
              <div className="row">
                <div className="col-xs-4">
                    <h4 className="">
                      <strong>City</strong>
                    </h4>
              <input
                type="text"
                className="form-control text-center"
                id="city"
                value={this.state.city}
                onChange={this.handleChange}
                placeholder="City of residence"
                required
              /></div>
                            <div className="col-xs-4">

              <h4 className="">
                <strong>State</strong>
              </h4>
              <input
                type="text"
                className="form-control text-center"
                id="stateOfResidence"
                value={this.state.stateOfResidence}
                onChange={this.handleChange}
                placeholder="State"
                required
              />
              </div>
              <div className="col-xs-4">
                <h4 className="">
                  <strong>Zip Code</strong>
               </h4>
               <input
                type="text"
                className="form-control text-center"
                id="zipCode"
                value={this.state.zipCode}
                onChange={this.handleChange}
                placeholder="33445"
                required
                />
             </div>
             </div>
             <br />
             <h4 className="">
                <strong>Date of birth</strong>
              </h4>

             
              <input
                type="text"
                className="form-control text-center"
                id="dob"
                value={this.state.dob}
                onChange={this.handleChange}
                placeholder="01/02/2003"
                required
                
              />
              <br />
              <h4 className="">
                <strong>Telephone number</strong>
              </h4>

             
              <input
                type="text"
                className="form-control text-center"
                id="telephoneNumber"
                value={this.state.telephoneNumber}
                onChange={this.handleChange}
                placeholder="480-212-2121"
                required 
                
              />
              <br />
              <h4 className="">
                <strong>Email Address</strong>
              </h4>

             
              <input
                type="text"
                className="form-control text-center"
                id="emailAddress"
                value={this.state.emailAddress}
                onChange={this.handleChange}
                placeholder="you@yourEmailAddress.com"
                required
                
              />
              <br />
              <h4 className="">
                <strong>Username</strong>
              </h4>

             
              <input
                type="text"
                className="form-control text-center"
                id="username"
                value={this.state.username}
                onChange={this.handleChange}
                placeholder="Your Sibi Username"
                required
                
              />
              <br />
              <h4 className="">
                <strong>Password</strong>
              </h4>

             
              <input
                type="password"
                className="form-control text-center"
                id="password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="Insert Super strong password here"
                required
                
              />
              <br />
              <h4 className="">
                <strong>Confirm your password</strong>
              </h4>

             
              <input
                type="password"
                className="form-control text-center"
                id="password2"
                value={this.state.password2}
                onChange={this.handleChange}
                placeholder="They must match"
                required
                
              />
              <br />
              
              
              
              
             
              <button
                type="submit"
                className="btn submit-btn"
              >
                Submit
              </button>

            </div>
          </form>
        </div>
      </div></div>
    );
  }
  

}

const mapStateToProps = (state) => {return {}}
const mapDispatchToProps = (dispatch) => {
    return {
        submitting: () => dispatch({type:'submitting'}),
    }
}

export default  Form; 