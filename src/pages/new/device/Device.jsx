import React from "react";
import "./device.scss";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { Input, Select } from "antd";

const Device = () => {
  const { Search } = Input;
  const navigate = useNavigate();
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="newDevice">
      <Sidebar />
      <div className="newDeviceContainer">
        <Navbar />
        <div className="title">Quản lý thiết bị</div>
        <div className="content">
          <div className="title">Thông tin thiết bị</div>
          <div id="left" className="container-page">
            <div className="profile__contentRight">
              <form>
                <div className="left">
                  <label className="userLogin__formTextLabel">
                    Mã thiết bị: <span style={{ color: "#ff4747" }}>*</span>
                  </label>

                  <input placeholder="Nhập mã thiết bị" />
                </div>
                <div className="left">
                  <label className="userLogin__formTextLabel">
                    Tên thiết bị: <span style={{ color: "#ff4747" }}>*</span>
                  </label>
                  <div>
                    <input placeholder="Nhập tên thiết bị" />
                  </div>
                </div>
                <div className="left">
                  <label className="userLogin__formTextLabel">
                    Địa chỉ IP: <span style={{ color: "#ff4747" }}>*</span>
                  </label>
                  <div>
                    <input placeholder="Nhập địa chỉ IP" />
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
                    Loại thiết bị: <span style={{ color: "#ff4747" }}>*</span>
                  </label>
                  <div>
                    <Select
                      defaultValue="Chọn loại thiết bị"
                      style={{ width: 480 }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "Kiosk",
                          label: "Kiosk",
                        },
                        {
                          value: "Display counter",
                          label: "Display counter",
                        },
                      ]}
                    />
                  </div>
                </div>
                <div className="right">
                  <label className="userLogin__formTextLabel">
                    Tên đăng nhập: <span style={{ color: "#ff4747" }}>*</span>
                  </label>
                  <input type="email" placeholder="Nhập tài khoản" />
                </div>
                <div className="right">
                  <label className="userLogin__formTextLabel">
                    Mật khẩu: <span style={{ color: "#ff4747" }}>*</span>
                  </label>
                  <div>
                    <input placeholder="Nhập mật khẩu" />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="services">
            <label className="userLogin__formTextLabel">
              Dịch vụ sử dụng: <span style={{ color: "#ff4747" }}>*</span>
            </label>

            <div>
              <input placeholder="Nhập dịch vụ sử dụng" />
            </div>
            <div className="request">
              <span style={{ color: "#ff4747" }}>*</span> Là trường thông tin
              bắt buộc
            </div>
          </div>
          <div className="buttonclick">
            <button
              className="button--white"
              type="submit"
              onClick={() => navigate(-1)}
            >
              Hủy bỏ
            </button>
            <button className="button--orange" type="submit">
              Thêm thiết bị
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Device;
