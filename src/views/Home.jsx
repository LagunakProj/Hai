import { invoke } from "@tauri-apps/api/tauri";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {


    return (
        <div>
            <h1>HOME</h1>
            <Link to={'/dash'}>Library</Link>
            <br />
            <Link to={'/movies'}>Movies</Link>
            <br />
            <Link to={'/login'}>Login</Link>
            <br />
            <Link to={'/play-test'}>Play Test</Link>
            <br />
            <Link to={'/settings'}>Settings</Link>
        </div>
    );
};

export default Home;
