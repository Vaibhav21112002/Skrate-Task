import React from "react";
import "./style.css";
import Topbar from "../../Components/TopBar/Topbar";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Work = ({ userName }) => {
    return (
        <div className="home">
            <Topbar pageName="Work" userName={userName} />
            <div className="homeMainContent">
                <Sidebar />
                <div className="Space ">
                    <div className="emptySpace"></div>
                    <div className="cardSpace">
                        <h1>Work</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
