import React from "react";
import "./style.css";
import Profile from "../../../../images/profile.jpeg";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";

const New = ({ job_postings }) => {
    return (
        <div className="overviewCards new">
            <div className="overviewHeading newHeading">
                <h3>New Job Postings</h3>
                <button
                    className="overviewbtn"
                    onClick={() => alert("A button was Clicked")}
                >
                    View All
                </button>
            </div>
            <div className="newCards">
                {job_postings && job_postings.map((job) => (
                    <div className="newCard">
                        <img src={Profile} alt="" className="userImage" />
                        <div className="newDetails">
                            <h2 className="type">{job.role}</h2>
                            <h3 className="place">{job.organization_name}</h3>
                            <h3 className="location">{job.location}</h3>
                        </div>
                        <div className="timeago">
                            <h3 className="timesago">{job.date_posted}</h3>
                        </div>
                        <div className="right-arrow">
                            <ArrowRightAltRoundedIcon />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default New;
