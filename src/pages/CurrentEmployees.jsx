import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/main.css";
import { useSelector } from "react-redux";
import DataTable from "react-data-table-component";

const columns = [
    {
        name: "First Name",
        selector: (row) => row.firstName,
        sortable: true,
    },
    {
        name: "Last Name",
        selector: (row) => row.lastName,
        sortable: true,
    },
    {
        name: "Start Date",
        selector: (row) => row.startDate,
        sortable: true,
    },
    {
        name: "Department",
        selector: (row) => row.department,
        sortable: true,
    },
    {
        name: "Date of Birth",
        selector: (row) => row.dateOfBirth,
        sortable: true,
    },
    {
        name: "Street",
        selector: (row) => row.street,
        sortable: true,
    },
    {
        name: "City",
        selector: (row) => row.city,
        sortable: true,
    },
    {
        name: "State",
        selector: (row) => row.state,
        sortable: true,
    },
    {
        name: "Zip Code",
        selector: (row) => row.zipCode,
        sortable: true,
    },
];
const CurrentEmployees = () => {
    const [filterText, setFilterText] = useState("");

    const data = useSelector((state) => state.employeeList);

    const filteredItems = data?.employeeList?.filter((employeeItem) =>
        isMatch(employeeItem, filterText)
    );
    console.log({ filteredItems });

    return (
        <div className="flex">
            <h2>Current Employees</h2>
            <div className="search">
                <label>Search: </label>
                <input
                    value={filterText}
                    name="search"
                    onChange={(e) => setFilterText(e.target.value)}
                />
            </div>
            <DataTable
                columns={columns}
                data={filteredItems}
                pagination
                responsive
                highlightOnHover
                pointerOnHover
                striped
            />

            <Link to="/" className="linkHome">Home</Link>
        </div>
    );
};

function isMatch(employeeItem, filterText) {
    for (const itemValue of Object.values(employeeItem)) {
        if (itemValue.toLowerCase().includes(filterText.trim().toLowerCase())) {
            return true;
        }
    }
}

export default CurrentEmployees;
