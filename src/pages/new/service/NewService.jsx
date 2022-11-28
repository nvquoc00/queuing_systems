import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { Input, Select, Checkbox } from "antd";

const NewService = () => {
  const { Search } = Input;
  const navigate = useNavigate();
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <div className="newDevice">
        <Sidebar />
        <div className="newDeviceContainer">
          <Navbar />
          <div className="title">Quản lý dịch vụ</div>
          <div className="content">
            <div className="title">Thông tin dịch vụ</div>
            <div id="left" className="container-page">
              <div className="profile__contentRight">
                <form>
                  <div className="left">
                    <label className="userLogin__formTextLabel">
                      Mã dịch vụ: <span style={{ color: "#ff4747" }}>*</span>
                    </label>

                    <input placeholder="201" />
                  </div>
                  <div className="left">
                    <label className="userLogin__formTextLabel">
                      Tên dịch vụ: <span style={{ color: "#ff4747" }}>*</span>
                    </label>
                    <div>
                      <input placeholder="Khám tim mạch" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div id="right">
              <div className="profile__contentRight">
                <form>
                  <div className="describe">
                    <label className="userLogin__formTextLabel">Mô tả:</label>
                    <textarea placeholder="Mô tả dịch vụ" />
                  </div>
                </form>
              </div>
            </div>
            <div className="title2nd">Quy tắc cấp số</div>
            <div className="checkbox">
              <div className="checkbox1">
                <Checkbox>Tăng tự động từ:</Checkbox>
                <input placeholder="201" /> <span> đến </span>
                <input placeholder="201" />
              </div>
              <div className="checkbox2">
                <Checkbox>Prefix:</Checkbox>
                <input placeholder="201" />
              </div>
              <div className="checkbox3">
                <Checkbox>Surfix:</Checkbox>
                <input placeholder="201" />
              </div>
              <div className="checkbox4">
                <Checkbox>Reset mỗi ngày</Checkbox>
              </div>
              <div className="request" style={{ marginTop: "6px" }}>
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
                Thêm dich vụ
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewService;
