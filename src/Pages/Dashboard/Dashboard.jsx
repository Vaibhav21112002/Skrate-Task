import React from "react";
import "./style.css";
import Topbar from "../../Components/TopBar/Topbar";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Dashboard = () => {
    return (
        <div className="home">
            <Topbar pageName="Dashboard" userName="Stephen" />
            <div className="homeMainContent">
                <Sidebar />
                <div className="Space ">
                    <div className="emptySpace">
                    </div>
                    <div className="cardSpace">
                        <h1>Dashboard</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
