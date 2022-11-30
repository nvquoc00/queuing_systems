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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const dots = <FontAwesomeIcon icon={faEllipsisVertical} />;

  const items = [
    {
      label: (
        <a href="http://localhost:3000/setting/profession">Quản lý vai trò</a>
      ),
      key: "profession",
    },
    {
      label: (
        <a href="http://localhost:3000/setting/account">Quản lý tài khoản</a>
      ),
      key: "account",
    },
    {
      label: (
        <a href="http://localhost:3000/setting/history">Nhật ký người dùng</a>
      ),
      key: "history",
    },
  ];
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
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
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
          <div>
            <li>
              <Dropdown menu={{ items }}>
                <Space>
                  <SettingsApplicationsIcon className="icon" />
                  <span>Cài đặt hệ thống</span>
                  <i className="settingsystem">{dots}</i>
                  <DownOutlined />
                </Space>
              </Dropdown>
            </li>
          </div>

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
