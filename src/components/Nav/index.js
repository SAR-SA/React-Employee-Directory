import React from "react";
import SearchEmployee from "../SearchEmployee";
import "./Nav.css";

function Nav() {
    return (
        <nav className="navbar col-6">
            <div className="search-area">
                <SearchEmployee />
            </div>
        </nav>
    );
}

export default Nav;