import { useState } from "react";
import "antd/dist/antd.css";
import "./forgotpw.scss";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import bgFPW from "../../icons/bg-forgot.svg";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const handleSubmitEmail = (e) => {
    e.preventDefault();
    console.log(email);
    navigate(`/resetpw`, { state: { email: `${email}` } });
  };
  return (
    <div className="forgotpw">
      <div className="container-fluid flex">
        <div className="left">
          <img src={logo} alt="" width="170px" />
          <h3>Đặt lại mật khẩu</h3>
          <form onSubmit={handleSubmitEmail}>
            <div className="loginForm">
              <label className="userLogin__formTextLabel">
                Vui lòng nhập lại email để đặt lại mật khẩu*
              </label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <button
              className="button--white"
              type="submit"
              onClick={() => navigate("/login")}
            >
              Hủy
            </button>
            <button className="button--orange" type="submit">
              Tiếp tục
            </button>
          </form>
        </div>
      </div>

      <div className="right">
        <div className="queuing">
          <div className="queuing__bg-img">
            <img src={bgFPW} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
