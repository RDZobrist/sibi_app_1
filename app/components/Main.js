import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from "./children/Form";

class Main extends Component  {
    constructor(props){

        super(props);

        this.state = {
            givenName: "",
            surname: "",
            city: "",
            state: "",
            emailAddress: "",
            
        }

        
    }
}