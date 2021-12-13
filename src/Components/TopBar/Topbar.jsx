import React from "react";
import "./style.css";

const Topbar = (props) => {
    return (
        <div className="topbar">
            <div className="pageName">
                <h3 className="pageName">{props.pageName}</h3>
            </div>
            <div className="user-info">
                <img
                    src="https://media.istockphoto.com/photos/portrait-of-afro-american-male-student-with-backpack-picture-id1255022286?b=1&k=20&m=1255022286&s=170667a&w=0&h=_NVHIKVIdMwKI52uy_Dc6WhPUFBWyFUr7oJAIC8A6cs="
                    alt="image"
                    className="userImage"
                />
                <div className="user-name">
                    <h3 className="user-name">{props.userName}</h3>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
