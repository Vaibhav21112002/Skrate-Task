import "./style.css";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
const Upcoming = () => {
    const upcoming_sessions = [
        {
            mentor_name: "Himanshu",
            timings: "14.00 - 15.00",
            date: "15/12/21",
            session_type: "Mentorship",
        },
        {
            mentor_name: "Vedant",
            timings: "12.00 - 13.00",
            date: "16/12/21",
            session_type: "Review",
        },
    ];
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
                {upcoming_sessions.map((session) => (
                    <div className="upcomingCard">
                        <img
                            src="https://en-media.thebetterindia.com/uploads/2018/03/French_Marigold_-_October_Birthday_Flower_-_Tagetes_patula.jpg"
                            alt="flower"
                            className="userImage"
                        />
                        <h3 className="upcomingName">{session.mentor_name}</h3>
                        <div className="date-time-upcoming">
                            <h4 className="upcomingTime">{session.timings}</h4>
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
