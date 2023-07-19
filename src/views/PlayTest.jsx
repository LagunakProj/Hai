import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player';
import configData from "../config.json";

const PlayTest = () => (
    <div>
        <h1>Play Test</h1>
        <Link to={'/'}>Home</Link>
        <ReactPlayer
            controls={true}
            width={"100%"}
            height={"100%"}
            className="react-player"
            url={`http://${configData.CLIENTIP}:${configData.MEDIAPORT}/media/series/eee/ssn_01/01`}
        />

    </div>
);

export default PlayTest;
