import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Settings = () => {

    return (
        <div>
            <h1>Play Test</h1>
            <Link to={'/'}>Home</Link>
            <div>
                <span>CLient IP: </span>
                <input type="text" value={"192.168.1.90"}></input>
            </div>
            <button>Apply </button>

        </div >
    );
};

export default Settings;
