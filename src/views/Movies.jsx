import React from "react";
import { useState, useEffect } from "react";

const Movies = () => {
    const imgurl = "https://image.tmdb.org/t/p/original/";
    const test_imag = {
        0: "/t/p/w300_and_h450_bestv2/tXmTHdrZgNsULqCbThK2Dt2X9Wt.jpg",
        1: "/t/p/w600_and_h900_bestv2/3ioy4m1Zq84tgYRAv5QTKs6D44t.jpg",
        2: "/t/p/w300_and_h450_bestv2/eFcQY6Uti3zi7vqBglEURwNrayT.jpg",
    };
    const [data, setData] = useState({});
    useEffect(() => {
        fetch("http://localhost:5000/api/movies")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                console.log(data);
            });
    }, []);
    return (
        <div>
            <h1>MOVIES LIST</h1>
            {Object.keys(data).map((keyName, i) => (
                <ul className="travelcompany-input" key={i}>
                    <img src={imgurl + test_imag[i]} alt="Logo" width={200} height={300} />
                    <li>
                        <span className="input-label">Title: {data[keyName]['title']}</span>
                    </li>
                    <li>
                        <span className="input-label">Duration: {data[keyName]['duration']}</span>
                    </li>
                    <li>
                        <span className="input-label">Released Date: {data[keyName]['released']}</span>
                    </li>
                </ul>
            ))}
        </div>
    );
};

export default Movies;
