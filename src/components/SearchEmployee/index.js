import React, { useContext } from "react";
import "./Search.css";
import DataContext from "../../utils/DataContext";
import { Form } from "react-bootstrap";

const SearchEmployee = () => {
    const context = useContext(DataContext);

    return (
        <div className="searchInput">
            <Form.Group classname="form">
                <Form.Label id="form-label">Search Employees</Form.Label>
                <Form.Control type="search" id="form-control" placeholder="Search by: Name, Phone, Email, DOB"
                    onChange={e => context.handleSearchChange(e)}>
                </Form.Control>
                
            </Form.Group>
        </div>
    );
}

export default SearchEmployee;