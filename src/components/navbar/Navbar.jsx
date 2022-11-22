import "./navbar.scss";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Notifications from "../../images/Vector.png";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import BreadCrumb from "../breadcrumb/BreadCrumb";
import avatar from "../../images/avatar.png";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <BreadCrumb />
        <div className="items">
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <div className="icon">
              <img src={Notifications} alt="" className="notifi" />
            </div>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <img src={avatar} alt="" className="avatar" />
            <div className="profile__name">
              <p className="hello">Xin chào</p>
              <p className="name">Lê Quỳnh Ái Vân</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
