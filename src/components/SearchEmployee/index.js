import React, { useContext } from "react";
import "./Search.css";
import DataContext from "../../utils/DataContext";
import { Form } from "react-bootstrap";

const SearchEmployee = () => {
    const context = useContext(DataContext);

    return (
        <div className="searchinput">
            <Form.Group classname="form">
                <Form.Label>Search Employees</Form.Label>
                <Form.Control type="search" placeholder="Name, Phone, Email, DOB"
                    onChange={e => context.handleSearchChange(e)}>
                </Form.Control>
                <button className="btn" type="submit">
                    Search
            </button>
            </Form.Group>
        </div>
    );
}

export default SearchEmployee;