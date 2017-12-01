

// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";

// Include the Main Component
import Header from "./components/Header";
import Form from "./components/Form";

// This code here allows us to render our main component (in this case "Main")
ReactDOM.render(<div className="main-container">
    <Header />
    <Form />
</div>, document.getElementById("app"));