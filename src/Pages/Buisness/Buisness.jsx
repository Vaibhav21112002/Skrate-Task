import React from "react";
import "./style.css";
import Topbar from "../../Components/TopBar/Topbar";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Business = () => {
    return (
        <div className="home">
            <Topbar pageName="Business" userName="Stephen" />
            <div className="homeMainContent">
                <Sidebar />
                <div className="Space ">
                    <div className="emptySpace">
                    </div>
                    <div className="cardSpace">
                        <h1>Business</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Business;
