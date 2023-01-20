import React from "react";
import "../style/main.css";
import { Link } from "react-router-dom";
import Form from "../components/Form";

/* 
CreateEmployee is a component that displays form.
*/
const CreateEmployee = ({ logo }) => {
    return (
        <div>
            <div className="flex">
                <Link to="/employeesList" className="linkStyle">
                    View Current Employee
                </Link>
                <h2 className="headerColor">Create Employee</h2>
                <Form logo={logo} />
            </div>
        </div>
    );
};

export default CreateEmployee;
