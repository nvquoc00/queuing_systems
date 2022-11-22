import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="content">
          <div id="left" className="container-page">
            <div className="profile__content position-relative container-fluid">
              <div className="profile__contentLeft">
                <div>
                  <div>
                    <div>
                      <img
                        className="profile__contentLeftAvatar"
                        src={require("../../images/avatar1.png")}
                        alt="camera"
                      />
                    </div>
                    <div className="profile__contentLeftIcon">
                      <img
                        className="camera-icon"
                        src={require("../../images/camera.png")}
                        alt="camera"
                      />
                    </div>
                  </div>
                  <p className="profile__contentLeftName">Lê Quỳnh Ái Vân</p>
                </div>
              </div>
            </div>
          </div>
          <div id="right">
            <div className="profile__contentRight">
              <form>
                <div className="left">
                  <label className="userLogin__formTextLabel">
                    Tên người dùng
                  </label>
                  <input
                    type="email"
                    disabled={true}
                    placeholder="Lê Quỳnh Ái Vân"
                  />
                </div>
                <div className="left">
                  <label className="userLogin__formTextLabel">
                    Số điện thoại
                  </label>
                  <div>
                    <input disabled={true} placeholder="0767375921" />
                  </div>
                </div>
                <div className="left">
                  <label className="userLogin__formTextLabel">Email</label>
                  <div>
                    <input disabled={true} placeholder="adminSSO1@domain.com" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div id="right">
            <div className="profile__contentRight">
              <form>
                <div className="right">
                  <label className="userLogin__formTextLabel">
                    Tên đăng nhập
                  </label>
                  <input disabled={true} placeholder="lequynhaivan01" />
                </div>
                <div className="right">
                  <label className="userLogin__formTextLabel">Mật khẩu</label>
                  <div>
                    <input disabled={true} placeholder="311940211" />
                  </div>
                </div>
                <div className="right">
                  <label className="userLogin__formTextLabel">Vai trò</label>
                  <div>
                    <input disabled={true} placeholder="Kế toán" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
