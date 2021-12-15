import React, { useState, useEffect } from "react";
import "./style.css";
import Topbar from "../../Components/TopBar/Topbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Overview from "./Components/Overview/Overview";
import Upcoming from "./Components/Upcoming/Upcoming";
import New from "./Components/New/New";
const Home = () => {
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
        <div className="home">
            <Topbar pageName="Skrate" userName="Stephen" />
            <div className="homeMainContent">
                <Sidebar />
                <div className="homeInfoCards">
                    <div className="twoCard">
                        <Overview
                            className="overHome"
                            dashboard_stats={info.dashboard_stats}
                        />
                        <Upcoming
                            className="overComing"
                            upcoming_sessions={info.upcoming_sessions}
                        />
                    </div>
                    <div className="oneCard">
                        <New job_postings={info.job_postings} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
