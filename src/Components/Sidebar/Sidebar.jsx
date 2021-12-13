import React from "react";
import "./style.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
    const navigate = useNavigate();
    return (
        <div className="sidebar">
            <button className="home">
                <HomeRoundedIcon onClick={() => navigate("/")} />
            </button>
            <button className="dashboard">
                <DashboardRoundedIcon onClick={() => navigate("/dashboard")} />
            </button>
            <button>
                <SchoolRoundedIcon onClick={() => navigate("/school")} />
            </button>
            <button>
                <BusinessCenterRoundedIcon
                    onClick={() => navigate("/business")}
                />
            </button>
            <button>
                <PersonRoundedIcon onClick={() => navigate("/work")} />
            </button>
        </div>
    );
};

export default Sidebar;
