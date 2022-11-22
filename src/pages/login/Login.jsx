import { useContext, useState } from "react";
import "antd/dist/antd.css";
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import logo from "../../images/logo.png";
import bg from "../../images/login.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEyeSlash} />;
const circleExclamation = <FontAwesomeIcon icon={faCircleExclamation} />;

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(false);

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/profile");
      })
      .catch((error) => {
        setError(true);
      });
  };
  const togglePasswordVisiblity = () => {
    setHidePassword(hidePassword ? false : true);
  };

  return (
    <div className="login">
      <div className="container-fluid flex">
        <div className="left">
          <img src={logo} alt="" width="170px" />
          <form onSubmit={handleLogin}>
            <div className="loginForm">
              <label className="userLogin__formTextLabel">Tên đăng nhập*</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="userLogin__formTop">
              <label className="userLogin__formTextLabel">Mật khẩu*</label>
              <div>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type={hidePassword ? "text" : "password"}
                />
                <span>
                  <i className="field-icon" onClick={togglePasswordVisiblity}>
                    {eye}
                  </i>
                </span>
              </div>
            </div>
            <div className="userLogin__formTextNav">
              <NavLink className="userLogin__formTextForget" to="/enteremail">
                Quên mật khẩu?
              </NavLink>
            </div>
            <div className="text-center userLogin__bottom">
              <button
                className="button--orange userLogin__button"
                type="submit"
              >
                Đăng nhập
              </button>
              {error && (
                <span>
                  <i>{circleExclamation}</i>Sai mật khẩu hoặc tên đăng nhập!
                </span>
              )}
            </div>
          </form>
        </div>
      </div>

      <div className="right">
        <div className="queuing">
          <div className="queuing__bg-img">
            <img src={bg} alt="" />
          </div>
          <div className="queuing__title">
            <p>Hệ thống</p>
            <span>QUẢN LÝ XẾP HÀNG</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
