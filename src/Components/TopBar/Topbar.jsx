import React from "react";
import "./style.css";
import Profile from "../../images/profile.jpeg";

const Topbar = (props) => {
    
    return (
        <div className="topbar">
            <div className="pageName">
                <h3 className="pageName">{props.pageName}</h3>
            </div>
            <div className="user-info">
                <img src={Profile} alt="user" className="userImage" />
                <div className="user-name">
                    <h3 className="user-name">{props.userName}</h3>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
