import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MonitorIcon from "@mui/icons-material/Monitor";
import ForumIcon from "@mui/icons-material/Forum";
import LayersIcon from "@mui/icons-material/Layers";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import logo from "../../images/logo.png";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img className="logo" src={logo} alt="logoAlta" />
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <MonitorIcon className="icon" />
              <span>Thiết bị</span>
            </li>
          </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <ForumIcon className="icon" />
              <span>Dịch vụ</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <LayersIcon className="icon" />
              <span>Cấp số</span>
            </li>
          </Link>
          <li>
            <InsertDriveFileIcon className="icon" />
            <span>Báo cáo</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Cài đặt hệ thống</span>
          </li>
          <li></li>
          <li></li>

          <li>
            <ExitToAppIcon style={{ color: "#ff7506" }} className="icon" />
            <span style={{ color: "#FF7506" }}>Đăng xuất</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
