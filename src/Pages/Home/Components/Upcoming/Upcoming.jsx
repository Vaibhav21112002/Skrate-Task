import "./style.css";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import Profile from "../../../../images/profile.jpeg";
const Upcoming = ({ upcoming_sessions }) => {
    return (
        <div className="overviewCards upcoming">
            <div className="overviewHeading upcomingHeading">
                <h3>Upcoming Sessions</h3>
                <button
                    className="overviewbtn"
                    onClick={() => alert("A button was Clicked")}
                >
                    View All
                </button>
            </div>
            <div className="upcomingCards">
                {upcoming_sessions &&
                    upcoming_sessions.map((session) => (
                        <div className="upcomingCard">
                            <img
                                src={Profile}
                                alt="flower"
                                className="userImage"
                            />
                            <h3 className="upcomingName">
                                {session.mentor_name}
                            </h3>
                            <div className="date-time-upcoming">
                                <h4 className="upcomingTime">
                                    {session.timings}
                                </h4>
                                <h4 className="upcomingDate">{session.date}</h4>
                            </div>
                            <button className="upcoming-card-button">
                                {session.session_type}
                            </button>
                            <div className="right-arrow">
                                <ArrowRightAltRoundedIcon />
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Upcoming;
