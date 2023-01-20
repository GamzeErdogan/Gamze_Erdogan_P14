import React, { lazy, useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../app/features/employeeSlice";
import { useForm } from "react-hook-form";
import ErrorInput from '../components/ErrorInput';

const optionsState = [
    {
        label: "Alabama",
        value: "AL",
    },
    {
        label: "Alaska",
        value: "AK",
    },
    {
        label: "American Samoa",
        value: "AS",
    },
    {
        label: "Arizona",
        value: "AZ",
    },
    {
        label: "Arkansas",
        value: "AR",
    },
    {
        label: "California",
        value: "CA",
    },
    {
        label: "Colorado",
        value: "CO",
    },
    {
        label: "Connecticut",
        value: "CT",
    },
    {
        label: "Delaware",
        value: "DE",
    },
    {
        label: "District Of Columbia",
        value: "DC",
    },
    {
        label: "Federated States Of Micronesia",
        value: "FM",
    },
    {
        label: "Florida",
        value: "FL",
    },
    {
        label: "Georgia",
        value: "GA",
    },
    {
        label: "Guam",
        value: "GU",
    },
    {
        label: "Hawaii",
        value: "HI",
    },
    {
        label: "Idaho",
        value: "ID",
    },
    {
        label: "Illinois",
        value: "IL",
    },
    {
        label: "Indiana",
        value: "IN",
    },
    {
        label: "Iowa",
        value: "IA",
    },
    {
        label: "Kansas",
        value: "KS",
    },
    {
        label: "Kentucky",
        value: "KY",
    },
    {
        label: "Louisiana",
        value: "LA",
    },
    {
        label: "Maine",
        value: "ME",
    },
    {
        label: "Marshall Islands",
        value: "MH",
    },
    {
        label: "Maryland",
        value: "MD",
    },
    {
        label: "Massachusetts",
        value: "MA",
    },
    {
        label: "Michigan",
        value: "MI",
    },
    {
        label: "Minnesota",
        value: "MN",
    },
    {
        label: "Mississippi",
        value: "MS",
    },
    {
        label: "Missouri",
        value: "MO",
    },
    {
        label: "Montana",
        value: "MT",
    },
    {
        label: "Nebraska",
        value: "NE",
    },
    {
        label: "Nevada",
        value: "NV",
    },
    {
        label: "New Hampshire",
        value: "NH",
    },
    {
        label: "New Jersey",
        value: "NJ",
    },
    {
        label: "New Mexico",
        value: "NM",
    },
    {
        label: "New York",
        value: "NY",
    },
    {
        label: "North Carolina",
        value: "NC",
    },
    {
        label: "North Dakota",
        value: "ND",
    },
    {
        label: "Northern Mariana Islands",
        value: "MP",
    },
    {
        label: "Ohio",
        value: "OH",
    },
    {
        label: "Oklahoma",
        value: "OK",
    },
    {
        label: "Oregon",
        value: "OR",
    },
    {
        label: "Palau",
        value: "PW",
    },
    {
        label: "Pennsylvania",
        value: "PA",
    },
    {
        label: "Puerto Rico",
        value: "PR",
    },
    {
        label: "Rhode Island",
        value: "RI",
    },
    {
        label: "South Carolina",
        value: "SC",
    },
    {
        label: "South Dakota",
        value: "SD",
    },
    {
        label: "Tennessee",
        value: "TN",
    },
    {
        label: "Texas",
        value: "TX",
    },
    {
        label: "Utah",
        value: "UT",
    },
    {
        label: "Vermont",
        value: "VT",
    },
    {
        label: "Virgin Islands",
        value: "VI",
    },
    {
        label: "Virginia",
        value: "VA",
    },
    {
        label: "Washington",
        value: "WA",
    },
    {
        label: "West Virginia",
        value: "WV",
    },
    {
        label: "Wisconsin",
        value: "WI",
    },
    {
        label: "Wyoming",
        value: "WY",
    },
];
const optionsDepartment = [
    {
        label: "Sales",
        value: "1",
    },
    {
        label: "Marketing",
        value: "2",
    },
    {
        label: "Engineering",
        value: "3",
    },
    {
        label: "Human",
        value: "3",
    },
    {
        label: "Legal",
        value: "4",
    },
];
 
const Modal = lazy(() => import("gamze-modal"));
const DatePicker = lazy(() => import ('react-datepicker'), import('react-datepicker/dist/react-datepicker.css'));
const Select = lazy(()=>import('react-select'));

/*
Form is a component that contains a forum page.
The form page was done used react-hook-form.
*/
const Form = ({ logo }) => {
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

    //React states here........................
    const [selectBirthDay, setSelectBirthDay] = useState(null);
    const [birthDaySelected, setBirthDaySelected] = useState(true);
    const [startDay, setStartDay] = useState(null);
    const [startDaySelected, setStartDaySelected] = useState(true);
    const [selectDepartment, setSelectDepartment] = useState(null);
    const [selectState, setSelectState] = useState(null);
    const [showMdl, setShowMdl] = useState(false);

    //This function works if user does not select any date when submit button is clicked
    const handleSelectedValuesOnSubmit = async () => {
        if (!selectBirthDay) {
            setBirthDaySelected(false);
        }
        if (!startDay) {
            setStartDaySelected(false);
        }
    };

    //This function sends the information of the employee to Redux
    const onSubmit = async (employee) => {
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
        <>
            {showMdl ? (
                <Modal
                    show={true}
                    title="Success!!"
                    text="New employee has been created"
                    backgroundColor={"beige"}
                    image={logo}
                />
            ) : null}
            <form className="style-form flex" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex">
                    <label htmlFor="firstName" className="style-label">
                        First Name :{" "}
                    </label>
                    <input
                        placeholder="Enter the first name"
                        className="style-input"
                        {...register("firstName", {
                            required: true,
                            maxLength: 20,
                        })}
                    />
                    {errors.firstName && <ErrorInput />}

                    <label htmlFor="lastName" className="style-label">
                        Last Name :{" "}
                    </label>
                    <input
                        placeholder="Enter the last name"
                        className="style-input"
                        {...register("lastName", {
                            required: true,
                            maxLength: 20,
                        })}
                    />
                    {errors.lastName && <ErrorInput />}

                    <label htmlFor="dateOfBirth" className="style-label">
                        Date of Birth :{" "}
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
                        maxDate={new Date() - 18}
                    />
                    {!birthDaySelected && <ErrorInput />}

                    <label htmlFor="startDate" className="style-label">
                        Start Date :{" "}
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
                    />
                    {!startDaySelected && <ErrorInput />}
                </div>

                <fieldset className="flex">
                    <legend className="style-fieldset">Address</legend>
                    <label htmlFor="street" className="style-label">
                        Street :{" "}
                    </label>
                    <input
                        placeholder="Enter the street"
                        className="style-input"
                        {...register("street", { required: true })}
                    />
                    {errors.street && <ErrorInput />}

                    <label htmlFor="city" className="style-label">
                        City :{" "}
                    </label>
                    <input
                        placeholder="Enter the city"
                        className="style-input"
                        {...register("city", { required: true })}
                    />
                    {errors.city && <ErrorInput />}

                    <label htmlFor="state" className="style-label">
                        State :{" "}
                    </label>
                    
                    <Select
                        options={optionsState}
                        onChange={(e) => setSelectState(e.label)}
                        styles={{
                            control: (baseStyles, state) => ({
                                ...baseStyles,
                                width: "220px",
                                cursor: "pointer",
                            }),
                        }}
                    />
                    {errors.state && <ErrorInput />}

                    <label htmlFor="zip-code" className="style-label">
                        Zip Code :{" "}
                    </label>
                    <input
                        placeholder="Enter the zip code"
                        className="style-input"
                        {...register("zipCode", { required: true })}
                    />
                    {errors.zipCode && <ErrorInput />}
                </fieldset>

                <div className="flex style-department">
                    <label htmlFor="department" className="style-label">
                        Department :{" "}
                    </label>
                    <Select
                        options={optionsDepartment}
                        onChange={(e) => setSelectDepartment(e.label)}
                        styles={{
                            control: (baseStyles, state) => ({
                                ...baseStyles,
                                width: "220px",
                                cursor: "pointer",
                            }),
                        }}
                    />
                </div>

                <button
                    className="save-button cursor"
                    onClick={handleSelectedValuesOnSubmit}
                >
                    SAVE
                </button>
            </form>
        </>
    );
};

export default Form;
