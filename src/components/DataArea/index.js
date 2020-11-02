import React, { useState, useEffect } from "react";
import DataTable from "../DataTable";
import API from "../../utils/API";
import DataContext from "../../utils/DataContext";
import Nav from "../Nav";


const DataArea = () => {
    const [developerState, setDeveloperState] = useState({
        users: [],
        order: "ascend",
        filteredUsers: [],
        headings: [
            { name: "Image", width: "10%", },
            { name: "Name", width: "10%", },
            { name: "Phone", width: "20%", },
            { name: "Email", width: "20%", },
            { name: "DOB", width: "10%", },
        ]
    });

    const handleSort = heading => {
        if (setDeveloperState.order === "descend") {
            setDeveloperState({
                order:"ascend"
            })
        } else {
            setDeveloperState({
                order:"descend"
            })
        }

    const compareFunction = (a,b) => {
        if (developerState.order === "ascend") {
            if (a[heading] === undefined) {
                return 1;
            } else if (b[heading] === undefined) {
                return -1;
            } else if (heading ==="name") {
                return a[heading].first.localeCompare(b[heading].first);
            } else {
                return b[heading] - a[heading];
            }
        }
    }
    const sortedUsers = developerState.filteredUsers.sort(compareFunction);
    setDeveloperState({
        ...developerState,
        filteredUsers: sortedUsers
    });    
    };

    const handleSearchChange = event => {
        const filter = event.target.value.replace(" ", "");
        const filteredList = developerState.users.filter(item => {
            let values = Object.values(item)
            .join("").toLowerCase();
            console.log("Values String :", values)
            return values.indexOf(filter.toLowerCase()) !== -1;
        });

        setDeveloperState({
            ...developerState,
            filteredUsers: filteredList
        });
    };


    useEffect(() => {
        API.getAllEmployees().then(results => {
            setDeveloperState({
                ...developerState,
                users: results.data.results,
                filteredUsers: results.data.results
            });
        });
        // eslint-disable-next-line
    }, []);

    return (
        <DataContext.Provider value={{ developerState, handleSearchChange, handleSort }}>
            <Nav />

            <div className="data-area">
                {developerState.filteredUsers.length > 0 ? <DataTable />
                : <div></div>
                }
            </div>
        </DataContext.Provider>
    );
}

export default DataArea;