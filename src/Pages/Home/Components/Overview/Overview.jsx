import "./style.css";
const Overview = (props) => {
    const dashboard_stats = {
        profile_views: 50,
        mentorship_sessions: 5,
        jobs_applied: 3,
        skills_verified: 5,
    };
    return (
        <div className="overviewCards">
            <div className="overviewHeading">
                <h3>Overview</h3>
                <button className="overviewbtn">Dashboard</button>
            </div>
            <div className="overCards">
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
            </div>
        </div>
    );
};

export default Overview;
