import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { Input, Select } from "antd";

const NewProfession = () => {
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
        <div className="title">Danh sách vai trò</div>
        <div className="content">
          <div className="title">Thông tin vai trò</div>
          <div id="left" className="container-page">
            <div className="profile__contentRight">
              <form>
                <div className="left">
                  <label className="userLogin__formTextLabel">
                    Tên vai trò: <span style={{ color: "#ff4747" }}>*</span>
                  </label>

                  <input placeholder="Nhập tên vai trò" />
                </div>
                <div className="left">
                  <label className="userLogin__formTextLabel">Mô tả:</label>
                  <div>
                    <textarea
                      placeholder="Nhập mô tả"
                      className="describe-textarea"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div id="checkbox">
            <div className="profile__contentRight">
              <form>
                <div className="left">
                  <label className="userLogin__formTextLabel">
                    Phân quyên chức năng:
                    <span style={{ color: "#ff4747" }}>*</span>
                  </label>
                  <div className="optionRole">
                    <div className="groupA">
                      <div className="titleRight">Nhóm chức năng A</div>
                      <div className="check">
                        <input
                          type="checkbox"
                          className="checkboxOption"
                        ></input>
                        <label for=""> Tất cả</label>
                      </div>
                      <div className="check">
                        <input
                          type="checkbox"
                          className="checkboxOption"
                        ></input>
                        <label for=""> Chức năng x</label>
                      </div>
                      <div className="check">
                        <input
                          type="checkbox"
                          className="checkboxOption"
                        ></input>
                        <label for=""> Chức năng y</label>
                      </div>
                      <div className="check">
                        <input
                          type="checkbox"
                          className="checkboxOption"
                        ></input>
                        <label for=""> Chức năng z</label>
                      </div>
                    </div>
                    <div className="groupA">
                      <div className="titleRight">Nhóm chức năng B</div>
                      <div className="check">
                        <input
                          type="checkbox"
                          className="checkboxOption"
                        ></input>
                        <label for=""> Tất cả</label>
                      </div>
                      <div className="check">
                        <input
                          type="checkbox"
                          className="checkboxOption"
                        ></input>
                        <label for=""> Chức năng x</label>
                      </div>
                      <div className="check">
                        <input
                          type="checkbox"
                          className="checkboxOption"
                        ></input>
                        <label for=""> Chức năng y</label>
                      </div>
                      <div className="check">
                        <input
                          type="checkbox"
                          className="checkboxOption"
                        ></input>
                        <label for=""> Chức năng z</label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="services">
            <div className="request">
              <span style={{ color: "#ff4747" }}>*</span> Là trường thông tin
              bắt buộc
            </div>
          </div>
          <div className="buttonHandleClick">
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

export default NewProfession;
