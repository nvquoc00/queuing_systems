import { useState } from "react";
import "antd/dist/antd.css";
import "./resetpw.scss";
import {
  getAuth,
  updatePassword,
  reauthenticateWithPopup,
  EmailAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input, Space } from "antd";
import logo from "../../images/logo.png";
import bgFPW from "../../icons/bg-forgot.svg";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const user = auth.currentUser;
  const navigate = useNavigate();
  const loginAuth = getAuth();
  const EmailProvider = new EmailAuthProvider();
  const reauthWithEmail = () => {
    return reauthenticateWithPopup(loginAuth, EmailProvider);
  };
  const handleSubmitPassword = (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      return setError("Xác nhận mật khẩu không trùng khớp!");
    }

    updatePassword(user, password)
      .then(() => {
        console.log("123");
        navigate("/login");
      })
      .catch((e) => reauthWithEmail())
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="resetpw">
      <div className="container-fluid flex">
        <div className="left">
          <img src={logo} alt="" width="170px" />
          <h3>Đặt lại mật khẩu mới</h3>
          <form onSubmit={handleSubmitPassword}>
            <div className="resetPWForm">
              <label className="userLogin__formTextLabel">Mật khẩu*</label>

              <Space direction="vertical">
                <Input.Password
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder=""
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Space>
              <label className="userLogin__formTextLabel">
                Nhập lại mật khẩu*
              </label>

              <Space direction="vertical">
                <Input.Password
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  placeholder=""
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Space>
            </div>
            {error && <span className="error">{error}</span>}
            <button className="button--orange" type="submit">
              Xác nhận
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
export default ResetPassword;
