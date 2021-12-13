import React from "react";
import "./style.css";
import Topbar from "../../Components/TopBar/Topbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Overview from "./Components/Overview/Overview";
import Upcoming from "./Components/Upcoming/Upcoming";
import New from "./Components/New/New";
const Home = () => {
    return (
        <div className="home">
            <Topbar pageName="Skrate" userName="Stephen" />
            <div className="homeMainContent">
                <Sidebar />
                <div className="homeInfoCards">
                    <div className="twoCard">
                        <Overview className="overHome" />
                        <Upcoming className="overComing" />
                    </div>
                    <div className="oneCard">
                        <New />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
