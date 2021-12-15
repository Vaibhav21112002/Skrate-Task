import React from "react";
import "./style.css";

const EmptyCard = (props) => {
    return (
        <div className="emptyContainer">
            <h1 className="emptyText">{props.title}</h1>
        </div>
    );
};

export default EmptyCard;
