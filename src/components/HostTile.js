import React from "react";

function HostTile({host}){
    const {full_name, email, phone_number, address, verified} = host
    console.log(host.verified)
    return(
        <div>
            <h2> Name: {full_name}</h2>
            <h4> Email: {email}</h4>
            <h4> Phone Number: {phone_number} </h4>
            <h5> Verified Host : {verified} </h5>
        </div>
    )
}

export default HostTile