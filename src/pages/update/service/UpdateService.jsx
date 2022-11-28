import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import "./style.scss";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { Input, Select, Checkbox } from "antd";

const UpdateService = () => {
  const { Search } = Input;
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const { id } = useParams();
  const q = query(collection(db, "services"), where("id", "==", `${id}`));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setData({ id: doc.id, ...doc.data() });
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(data);
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

                    <input value={data.id} />
                  </div>
                  <div className="left">
                    <label className="userLogin__formTextLabel">
                      Tên dịch vụ: <span style={{ color: "#ff4747" }}>*</span>
                    </label>
                    <div>
                      <input value={data.name} />
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
                    <textarea value={data.describe} />
                  </div>
                </form>
              </div>
            </div>
            <div className="title2nd">Quy tắc cấp số</div>
            <div className="checkbox">
              <div className="checkbox1">
                <Checkbox>Tăng tự động từ:</Checkbox>
                <input placeholder="0001" /> <span> đến </span>
                <input placeholder="9999" />
              </div>
              <div className="checkbox2">
                <Checkbox>Prefix:</Checkbox>
                <input placeholder="0001" />
              </div>
              <div className="checkbox3">
                <Checkbox>Surfix:</Checkbox>
                <input placeholder="0001" />
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
                Cập nhật
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateService;
