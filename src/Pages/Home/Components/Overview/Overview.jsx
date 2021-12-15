import "./style.css";
const Overview = ({ dashboard_stats }) => {
    return (
        <div className="overviewCards">
            <div className="overviewHeading">
                <h3>Overview</h3>
                <button
                    className="overviewbtn"
                    onClick={() => alert("A button was Clicked")}
                >
                    Dashboard
                </button>
            </div>
            {dashboard_stats && <div className="overCards">
                <div className="card1">
                    <h2 className="cardName">Profile Views</h2>
                    <h2 className="cardNumber">
                        {dashboard_stats.profile_views}
                    </h2>
                </div>
                <div className="card1">
                    <h2 className="cardName">Mentorship Sessions</h2>
                    <h2 className="cardNumber">
                        {dashboard_stats.mentorship_sessions}
                    </h2>
                </div>
                <div className="card1">
                    <h2 className="cardName">Jobs Applied</h2>
                    <h2 className="cardNumber">
                        {dashboard_stats.jobs_applied}
                    </h2>
                </div>
                <div className="card1">
                    <h2 className="cardName">Skills Verified</h2>
                    <h2 className="cardNumber">
                        {dashboard_stats.skills_verified}
                    </h2>
                </div>
            </div>}
        </div>
    );
};

export default Overview;
