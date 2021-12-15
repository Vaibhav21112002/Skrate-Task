import React, { useEffect } from "react";
import "./style.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { useNavigate, useLocation } from "react-router-dom";
const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        console.log(location.pathname);
    });
    return (
        <div className="sidebar">
            <button
                className={`home ${location.pathname === "/" && "conditional"}`}
            >
                <HomeRoundedIcon onClick={() => navigate("/")} />
            </button>
            <button className={`dashboard ${location.pathname === "/dashboard" && "conditional"}`}>
                <DashboardRoundedIcon onClick={() => navigate("/dashboard")} />
            </button>
            <button className={`school ${location.pathname === "/school" && "conditional"}`}>
                <SchoolRoundedIcon onClick={() => navigate("/school")} />
            </button>
            <button className={`business ${location.pathname === "/business" && "conditional"}`}>
                <BusinessCenterRoundedIcon
                    onClick={() => navigate("/business")}
                />
            </button>
            <button className={`work ${location.pathname === "/work" && "conditional"}`}>
                <PersonRoundedIcon onClick={() => navigate("/work")} />
            </button>
        </div>
    );
};

export default Sidebar;
