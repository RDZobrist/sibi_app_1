import React from "react";
import helpers from '../utils/helpers';
class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      surname: "",
      middleInitial: "",
      stateOfResidence:"",
      streetAddress: "",
      city: "",
      zipCode:"",
      country: "",
      password: "",
      password2: "",
      username:"",
      dob:"",
      telephoneNumber: "",
      mothersMaiden: "",
      companyOfEmployment: "",
      ocupation: "",
      emailAddress:""
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
    let p = this.state.firstName;
    console.log(p)
    // console.dir(this.state)
    // helpers.postSaved().then(function() {
    //   console.log(item.web_url);
    // });
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
      title: "",
      title1:"",
     });
    //  console.log(this.state);
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
                id="title"
                value={this.state.title}
                onChange={this.handleChange}
                placeholder="Mr. Mrs. Miss or Dr."
                required
              />
                            <h4 className="">
                <strong>Title1</strong>
              </h4>

             
              <input
                type="text"
                className="form-control text-center"
                id="title1"
                value={this.state.title1}
                onChange={this.handleChange}
                placeholder="Your last name"
                required
              />
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

export default Form;
