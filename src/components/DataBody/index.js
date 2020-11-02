import React, { useContext } from "react";
import DataContext from "../../utils/DataContext";


const DataBody = () => {
    const context = useContext(DataContext);

    function SetDate(date) {
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month = dateArray[1];
        const dayArray = dateArray[2].split("T");
        const day = dayArray[0];
        const dateFormat = [month, day, year].join("-");
        return dateFormat;
    }
    return (
        <tbody>
            {context.developerState.filteredUsers[0] !== undefined && context.developerState.filteredUsers[0].name !== undefined ? (context.developerState.filteredUsers.map(({ login, name, picture, phone, email, dob }) => {
                return (
                    <tr key={login.uuid}>
                        <td data-th="Image" className="align-middle">
                            <img
                                src={picture.medium}
                                alt={"profile image for employee named" + name.first + "" + name.last}
                                className="img-responsive"
                            />
                        </td>
                        <td data-th="Name" className="name-cell align-middle">
                            {name.first} {name.last}
                        </td>
                        <td data-th="Phone" className="align-middle">
                            {phone}
                        </td>
                        <td data-th="Email" className="align-middle">
                            <a href={"mailto:" + email} target="__blank"> {email}</a>
                        </td>
                        <td data-th="DOB" className="align-middle">
                            {SetDate(dob.date)}
                        </td>
                    </tr>
                );
            })
            ) : (
                    <></>
                )}
        </tbody>
    );
}

export default DataBody;