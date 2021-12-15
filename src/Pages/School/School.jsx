import React from "react";
import "./style.css";
import Topbar from "../../Components/TopBar/Topbar";
import Sidebar from "../../Components/Sidebar/Sidebar";

const School = ({ userName }) => {
    return (
        <div className="home">
            <Topbar pageName="School" userName={userName} />
            <div className="homeMainContent">
                <Sidebar />
                <div className="Space ">
                    <div className="emptySpace"></div>
                    <div className="cardSpace">
                        <h1>School</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default School;
