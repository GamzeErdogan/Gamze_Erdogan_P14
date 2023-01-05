import React, { useState } from "react";
import "../style/main.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { optionsState } from "../data/selectOptions";
import { optionsDepartment } from "../data/selectOptions";
import { useDispatch } from "react-redux";
import { addEmployee } from "../app/features/employeeSlice";
import { useForm } from "react-hook-form";
import Select from "react-select";
import Modal from "gamze-modal";

const CreateEmployee = () => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            startDate: null,
            dateOfBirth: null,
        },
    });

    //React states here........................//
    const [selectBirthDay, setSelectBirthDay] = useState(null);
    const [birthDaySelected, setBirthDaySelected] = useState(true);
    const [startDay, setStartDay] = useState(null);
    const [startDaySelected, setStartDaySelected] = useState(true);
    const [selectDepartment, setSelectDepartment] = useState(null);
    const [selectState, setSelectState] = useState(null);
    const [showMdl, setShowMdl] = useState(false);

    const handleSelectedValuesOnSubmit = () => {
        if (!selectBirthDay) {
            setBirthDaySelected(false);
        }
        if (!startDay) {
            setStartDaySelected(false);
        }
    };

    const onSubmit = (employee) => {
        dispatch(
            addEmployee({
                ...employee,
                dateOfBirth: selectBirthDay.toLocaleDateString(),
                startDate: startDay.toLocaleDateString(),
                state: selectState,
                department: selectDepartment,
            })
        );
        setShowMdl(true);
        reset();
    };

    return (
        <div>
            <div className="flex">
                <Link to="/employeesList" className="linkStyle">
                    View Current Employee
                </Link>
                <h2 className="headerColor">Create Employee</h2>
                {showMdl ? (
                    <Modal
                        show={true}
                        title="Succes"
                        text="New employe has been created"
                        backgroundColor={"beige"}
                        image={logo}
                    />
                ) : null}
                <form
                    className="style-form flex"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="flex">
                        <label htmlFor="firstName" className="style-label">
                            First Name :
                        </label>
                        <input
                            {...register("firstName", {
                                required: true,
                                maxLength: 20,
                            })}
                            placeholder="Enter the first name"
                            className="style-input"
                        />
                        {errors.firstName && (
                            <span style={{ color: "red", fontSize: "13px" }}>
                                *This field is required
                            </span>
                        )}
                        <label htmlFor="lastName" className="style-label">
                            Last Name :
                        </label>
                        <input
                            {...register("lastName", {
                                required: true,
                                maxLength: 20,
                            })}
                            placeholder="Enter the last name"
                            className="style-input"
                        />
                        {errors.lastName && (
                            <span style={{ color: "red", fontSize: "13px" }}>
                                *This field is required
                            </span>
                        )}
                        <label htmlFor="dateOfBirth" className="style-label">
                            Date of Birth :
                        </label>

                        <DatePicker
                            className="style-input cursor"
                            selected={selectBirthDay}
                            placeholderText="Choose the birthday"
                            onChange={(date) => {
                                date
                                    ? setBirthDaySelected(true)
                                    : setBirthDaySelected(false);
                                setSelectBirthDay(date);
                            }}
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            maxDate={new Date()}
                        />

                        {!birthDaySelected ? (
                            <span style={{ color: "red", fontSize: "13px" }}>
                                *This field is required
                            </span>
                        ) : null}
                        <label htmlFor="startDate" className="style-label">
                            Start Date :
                        </label>
                        <DatePicker
                            className="style-input cursor"
                            selected={startDay}
                            placeholderText="Date of start"
                            onChange={(date) => {
                                date
                                    ? setStartDaySelected(true)
                                    : setStartDaySelected(false);
                                setStartDay(date);
                            }}
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            // yearDropdownItemNumber={10}
                            // yearItemNumber={5}
                            // styles={customStyles}
                        />
                        {!startDaySelected ? (
                            <span style={{ color: "red", fontSize: "13px" }}>
                                *This field is required
                            </span>
                        ) : null}
                    </div>
                    <fieldset className="flex">
                        <legend className="style-fieldset">Address</legend>
                        <label htmlFor="street" className="style-label">
                            Street :
                        </label>
                        <input
                            {...register("street", { required: true })}
                            placeholder="Enter the street"
                            className="style-input"
                        />
                        {errors.street && (
                            <span style={{ color: "red", fontSize: "13px" }}>
                                *This field is required
                            </span>
                        )}
                        <label htmlFor="city" className="style-label">
                            City :
                        </label>
                        <input
                            {...register("city", { required: true })}
                            placeholder="Enter the city"
                            className="style-input"
                        />
                        {errors.city && (
                            <span style={{ color: "red", fontSize: "13px" }}>
                                *This field is required
                            </span>
                        )}
                        <label htmlFor="state" className="style-label">
                            State :
                        </label>
                        <Select
                            options={optionsState}
                            styles={{
                                control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    width: "220px",
                                    cursor: "pointer",
                                }),
                            }}
                            onChange={(e) => setSelectState(e.label)}
                        />
                        {errors.state && (
                            <span style={{ color: "red", fontSize: "13px" }}>
                                *This field is required
                            </span>
                        )}

                        <label htmlFor="zip-code" className="style-label">
                            Zip Code :
                        </label>
                        <input
                            {...register("zipCode", { required: true })}
                            placeholder="Enter the zip code"
                            className="style-input"
                        />
                        {errors.zipCode && (
                            <span style={{ color: "red", fontSize: "13px" }}>
                                *This field is required
                            </span>
                        )}
                    </fieldset>
                    <div className="flex style-department">
                        <label htmlFor="department" className="style-label">
                            Department :
                        </label>
                        <Select
                            options={optionsDepartment}
                            styles={{
                                control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    width: "220px",
                                    cursor: "pointer",
                                }),
                            }}
                            onChange={(e) => setSelectDepartment(e.label)}
                        />
                    </div>

                    <button
                        className="save-button cursor"
                        onClick={handleSelectedValuesOnSubmit}
                    >
                        SAVE
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateEmployee;
