import React from "react";
import "./style.css";
import Profile from "../../../../images/profile.jpeg";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import moment from "moment";

const getAgo = (date) => {
    let time = date.split("/");
    let newTime = time[0] + time[1] + time[2];
    return moment(newTime,"DDMMYYYY").fromNow();
};

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
                {job_postings &&
                    job_postings.map((job) => (
                        <div className="newCard">
                            <img src={Profile} alt="" className="userImage" />
                            <div className="newDetails">
                                <h2 className="type">{job.role}</h2>
                                <h3 className="place">
                                    {job.organization_name}
                                </h3>
                                <h3 className="location">{job.location}</h3>
                            </div>
                            <div className="timeago">
                                <h3 className="timesago">
                                    {getAgo(job.date_posted)}
                                </h3>
                            </div>
                            <div className="right-arrow">
                                <ArrowRightAltRoundedIcon
                                    onClick={() =>
                                        alert("A button was clicked")
                                    }
                                />
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default New;
