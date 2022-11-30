import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { Input, Select, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const NewAccount = () => {
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
        <div className="title">Quản lý tài khoản</div>
        <div className="content" style={{ height: 600 }}>
          <div className="title">Thông tin tài khoản</div>
          <div id="left" className="container-page">
            <div className="profile__contentRight">
              <form>
                <div className="left">
                  <label className="userLogin__formTextLabel">
                    Họ tên: <span style={{ color: "#ff4747" }}>*</span>
                  </label>

                  <input placeholder="Nhập họ tên" />
                </div>
                <div className="left">
                  <label className="userLogin__formTextLabel">
                    Số điện thoại: <span style={{ color: "#ff4747" }}>*</span>
                  </label>
                  <div>
                    <input placeholder="Nhập số điện thoại" />
                  </div>
                </div>
                <div className="left">
                  <label className="userLogin__formTextLabel">
                    Email: <span style={{ color: "#ff4747" }}>*</span>
                  </label>
                  <div>
                    <input placeholder="Nhập email" />
                  </div>
                </div>
                <div className="left">
                  <label className="userLogin__formTextLabel">
                    Vai trò: <span style={{ color: "#ff4747" }}>*</span>
                  </label>
                  <div>
                    <Select
                      defaultValue="Chọn vai trò"
                      style={{ width: 480 }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "Kế toán",
                          label: "Kế toán",
                        },
                        {
                          value: "Quản lý",
                          label: "Quản lý",
                        },
                        {
                          value: "Admin",
                          label: "Admin",
                        },
                      ]}
                    />
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
                    Tên đăng nhập: <span style={{ color: "#ff4747" }}>*</span>
                  </label>
                  <input type="email" placeholder="Nhập tên đăng nhập" />
                </div>
                <div className="right">
                  <label className="userLogin__formTextLabel">
                    Tên đăng nhập: <span style={{ color: "#ff4747" }}>*</span>
                  </label>
                  <div>
                    <Space direction="vertical">
                      <Input.Password
                        placeholder="Nhập mật khẩu"
                        iconRender={(visible) =>
                          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                      />
                    </Space>
                  </div>
                </div>
                <div className="right">
                  <label className="userLogin__formTextLabel">
                    Nhập lại mật khẩu:{" "}
                    <span style={{ color: "#ff4747" }}>*</span>
                  </label>
                  <div>
                    <Space direction="vertical">
                      <Input.Password
                        placeholder="Nhập lại mật khẩu"
                        iconRender={(visible) =>
                          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                      />
                    </Space>
                  </div>
                </div>
                <div className="right">
                  <label className="userLogin__formTextLabel">
                    Tình trạng: <span style={{ color: "#ff4747" }}>*</span>
                  </label>
                  <div>
                    <Select
                      defaultValue="Hoạt động"
                      style={{ width: 480 }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "Hoạt động",
                          label: "Hoạt động",
                        },
                        {
                          value: "Ngưng hoạt động",
                          label: "Ngưng hoạt động",
                        },
                      ]}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="services" style={{ top: "700px" }}>
            <div className="request">
              <span style={{ color: "#ff4747" }}>*</span> Là trường thông tin
              bắt buộc
            </div>
          </div>
          <div className="buttonclick" style={{ top: "760px" }}>
            <button
              className="button--white"
              type="submit"
              onClick={() => navigate(-1)}
            >
              Hủy bỏ
            </button>
            <button
              className="button--orange"
              type="submit"
              onClick={() => navigate(-1)}
            >
              Thêm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAccount;
