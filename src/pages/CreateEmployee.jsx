import React, { useState } from "react";
import "../style/main.css";
import { Link } from "react-router-dom";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateEmployee = () => {
    const [selectBirthDay, setSelectBirthDay] = useState(null);
    const [startDay, setStartDay] = useState(null);
    return (
        <div>
            <div className="flex">
                <Link to="/employeesList">View Current Employee</Link>
                <h2>Create Employee</h2>
                <form className="style-form flex">
                    <div className="flex">
                        <label htmlFor="firstName" className="style-label">
                            First Name :
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            className="style-input"
                        />
                        <label htmlFor="lastName" className="style-label">
                            Last Name :
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            className="style-input"
                        />
                        <label htmlFor="dateOfBirth" className="style-label">
                            Date of Birth :
                        </label>

                        <Datepicker
                            className="style-input cursor"
                            selected={selectBirthDay}
                            onChange={(date) => setSelectBirthDay(date)}
                            showYearDropdown
                            showMonthDropdown
                            maxDate={new Date()}
                        />
                        <label htmlFor="startDate" className="style-label">
                            Start Date :
                        </label>
                        <Datepicker
                            className="style-input cursor"
                            selected={startDay}
                            onChange={(date) => setStartDay(date)}
                            showYearDropdown
                            showMonthDropdown
                        />
                    </div>
                    <fieldset className="flex">
                        <legend className="style-fieldset">Address</legend>
                        <label htmlFor="street" className="style-label">
                            Street :
                        </label>
                        <input
                            type="text"
                            id="street"
                            className="style-input"
                        />
                        <label htmlFor="city" className="style-label">
                            City :
                        </label>
                        <input type="text" id="city" className="style-input" />
                        <label htmlFor="state" className="style-label">
                            State :
                        </label>
                        <select
                            name="state"
                            id="state"
                            className="style-select"
                        >
                            <option>Sales</option>
                            <option>Marketing</option>
                        </select>
                        <label htmlFor="zip-code" className="style-label">
                            Zip Code :
                        </label>
                        <input
                            id="zip-code"
                            type="number"
                            className="style-input"
                        />
                    </fieldset>
                    <div className="flex">
                        <label htmlFor="department" className="style-label">
                            Department :
                        </label>
                        <select
                            name="department"
                            id="department"
                            className="style-select"
                        >
                            <option>Sales</option>
                            <option>Marketing</option>
                            <option>Engineering</option>
                            <option>Human Resources</option>
                            <option>Legal</option>
                        </select>
                    </div>
                </form>
                <button className="save-button">Save</button>
            </div>
        </div>
    );
};

export default CreateEmployee;
