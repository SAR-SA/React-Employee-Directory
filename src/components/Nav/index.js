import React from "react";
import SearchEmployee from "../SearchEmployee";
import "./Nav.css";

function Nav() {
    return (
        <nav className="navbar">
            <div className="search-area">
                <SearchEmployee />
            </div>
        </nav>
    );
}

export default Nav;