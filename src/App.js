import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import School from "./Pages/School/School";
import Buisness from "./Pages/Buisness/Buisness";
import Work from "./Pages/Work/Work";

const App = () => {
    const [info, setInfo] = useState({});
    const URL = "https://mocki.io/v1/bb11aecd-ba61-44b9-9e2c-beabc442d818";
    const getData = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setInfo(data);
        console.log(data);
    };

    useEffect(() => {
        getData();
    }, []);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home info={info} />} />
                <Route path="/dashboard" element={<Dashboard userName = {info.full_name}/>} />
                <Route path="/school" element={<School userName = {info.full_name}/>} />
                <Route path="/business" element={<Buisness userName = {info.full_name}/>} />
                <Route path="/work" element={<Work userName = {info.full_name}/>} />
            </Routes>
        </Router>
    );
};

export default App;
