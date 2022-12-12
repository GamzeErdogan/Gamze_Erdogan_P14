import React, { useState } from "react";
import "../style/main.css";
import { Link } from "react-router-dom";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { optionsState } from "../data/selectOptions";
import { optionsDepartment } from "../data/selectOptions";

const customStyles = {
    control: (base) => ({
        ...base,
        height: 20,
        width: 225,
    }),
};

const CreateEmployee = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [selectBirthDay, setSelectBirthDay] = useState(null);
    const [startDay, setStartDay] = useState(null);
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [selectState, setSelectState] = useState(null);
    const [zipCode, setZipCode] = useState();
    const [selectDepartment, setSelectDepartment] = useState(null);

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(
            firstName,
            lastName,
            selectBirthDay,
            startDay,
            street,
            city,
            selectState,
            zipCode,
            selectDepartment
        );
    };
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
                            onChange={(name) => setFirstName(name.target.value)}
                        />
                        <label htmlFor="lastName" className="style-label">
                            Last Name :
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            className="style-input"
                            onChange={(name) => setLastName(name.target.value)}
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
                            styles={customStyles}
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
                            onChange={(street) =>
                                setStreet(street.target.value)
                            }
                        />
                        <label htmlFor="city" className="style-label">
                            City :
                        </label>
                        <input
                            type="text"
                            id="city"
                            className="style-input"
                            onChange={(city) => setCity(city.target.value)}
                        />
                        <label htmlFor="state" className="style-label">
                            State :
                        </label>

                        <Select
                            defaultValue={selectState}
                            onChange={(state) => setSelectState(state.label)}
                            options={optionsState}
                            styles={customStyles}
                        />
                        <label htmlFor="zip-code" className="style-label">
                            Zip Code :
                        </label>
                        <input
                            id="zip-code"
                            type="number"
                            className="style-input"
                            onChange={(zip) => setZipCode(zip.target.value)}
                        />
                    </fieldset>
                    <div className="flex style-department">
                        <label htmlFor="department" className="style-label">
                            Department :
                        </label>
                        <Select
                            defaultValue={selectState}
                            onChange={(department) =>
                                setSelectDepartment(department.label)
                            }
                            options={optionsDepartment}
                            styles={customStyles}
                        />
                    </div>
                </form>
                <button onClick={handleSubmit} className="save-button">Save</button>
            </div>
        </div>
    );
};

export default CreateEmployee;
