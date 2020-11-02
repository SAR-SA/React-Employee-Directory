import React, { useContext } from "react";
import DataBody from "../DataBody";
import DataContext from "../../utils/DataContext";
import "./DataTable.css";

const DataTable = () => {
    const context = useContext(DataContext);

    return (
        <div className="datatable mt-5">
        <h className="note">*Click on <u>Name</u> to sort by alphabetical order</h>
            <table id="table" className="table table-striped table-hover table-condensed">
            <thead>
                <tr>
                    {context.developerState.headings.map(({ name, width }) => {
                        return (
                            <th
                                className="col"
                                key={name}
                                style={{ width }}
                                onClick={() => {
                                    context.handleSort(name.toLowerCase());
                                }}
                            >
                                {name}
                                <span className="name"></span>
                            </th>
                        );
                    })}
                </tr>
            </thead>
            <DataBody />
            </table>
        </div>
    );
}

export default DataTable