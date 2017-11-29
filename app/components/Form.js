import React from "react";
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

    this.setState({ 
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
      emailAddress:"",
      telephoneNumber: "",
      mothersMaiden: ""
     });
     console.log(this.state);
  }

  render() {

    return (

      <div className="panel panel-default">
        <div className="panel-heading">
          <h2 className="panel-title text-center">Sibi</h2>
        </div>
        <div className="panel-body text-center">

          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
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
              />
              <br />
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
              <br />
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
              />
              <br />
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

              <br />
              <h4 className="">
                <strong>Country</strong>
              </h4>

             
              <input
                type="text"
                className="form-control text-center"
                id="country"
                value={this.state.country}
                onChange={this.handleChange}
                placeholder="Country"
                required
              />
              <br />
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
                placeholder="Confirm your password (they must match)"
                required
                
              />
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
                <strong>Mother's maiden name</strong>
              </h4>

             
              <input
                type="text"
                className="form-control text-center"
                id="mothersMaiden"
                value={this.state.mothersMaiden}
                onChange={this.handleChange}
                placeholder="Mom's last name before marriage"
                required
                
              />
              <br />
              <h4 className="">
                <strong>Occupation</strong>
              </h4>

             
              <input
                type="text"
                className="form-control text-center"
                id="ocupation"
                value={this.state.ocupation}
                onChange={this.handleChange}
                placeholder="Your profession"
                required
                
              />
              <br />
              <h4 className="">
                <strong>Place of employment</strong>
              </h4>

             
              <input
                type="text"
                className="form-control text-center"
                id="companyOfEmployment"
                value={this.state.companyOfEmployment}
                onChange={this.handleChange}
                placeholder="Where do you work?"
                required
                
              />
              <br />
              <button
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>

            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
