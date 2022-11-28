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
          <Link to="/device/listDevice" style={{ textDecoration: "none" }}>
            <li>
              <MonitorIcon className="icon" />
              <span>Thiết bị</span>
            </li>
          </Link>
          <Link to="/service/listService" style={{ textDecoration: "none" }}>
            <li>
              <ForumIcon className="icon" />
              <span>Dịch vụ</span>
            </li>
          </Link>
          <Link
            to="/issuedNo./listIssuedNo."
            style={{ textDecoration: "none" }}
          >
            <li>
              <LayersIcon className="icon" />
              <span>Cấp số</span>
            </li>
          </Link>
          <Link to="/statify/listStatify" style={{ textDecoration: "none" }}>
            <li>
              <InsertDriveFileIcon className="icon" />
              <span>Báo cáo</span>
            </li>
          </Link>
          <Link to="/setting/listSetting" style={{ textDecoration: "none" }}>
            <li>
              <SettingsApplicationsIcon className="icon" />
              <span>Cài đặt hệ thống</span>
            </li>
          </Link>

          <li></li>
          <li></li>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <li>
              <ExitToAppIcon style={{ color: "#ff7506" }} className="icon" />
              <span style={{ color: "#FF7506" }}>Đăng xuất</span>
            </li>
          </Link>
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
