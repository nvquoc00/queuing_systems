import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { Input, Select, Checkbox } from "antd";
import SerialDT from "../../../components/datatable/serial/SerialDT";

const DetailService = () => {
  const { Search } = Input;
  const [data, setData] = useState("");
  const location = window.location.pathname;
  const id = location.slice(location.lastIndexOf("/") + 1);

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
      <div className="detailService">
        <Sidebar />
        <div className="detailServiceContainer">
          <Navbar />
          <div className="title">Quản lý dịch vụ</div>
          <div className="content">
            <div className="title">Thông tin dịch vụ</div>
            <div id="left" className="container-page">
              <div className="profile__contentRight">
                <form>
                  <div className="left">
                    <label className="userLogin__formTextLabel">
                      Mã dịch vụ:{" "}
                      <span style={{ paddingLeft: "38px", color: "#535261" }}>
                        {data.id}
                      </span>
                    </label>
                  </div>
                  <div className="left">
                    <label className="userLogin__formTextLabel">
                      Tên dịch vụ:{" "}
                      <span style={{ paddingLeft: "36px", color: "#535261" }}>
                        {data.name}
                      </span>
                    </label>
                  </div>
                  <div className="left">
                    <label className="userLogin__formTextLabel">
                      Mô tả:{" "}
                      <span style={{ paddingLeft: "76px", color: "#535261" }}>
                        {data.describe}
                      </span>
                    </label>
                  </div>
                </form>
              </div>
            </div>

            <div className="title2nd">Quy tắc cấp số</div>
            <div className="checkbox">
              <div className="checkbox1">
                <div>Tăng tự động từ:</div>
                <input placeholder="0001" /> <span> đến </span>
                <input placeholder="9999" />
              </div>
              <div className="checkbox1">
                <div>Prefix:</div>
                <input placeholder="0001" />
              </div>
              <div className="checkbox2">
                <div>Reset mỗi ngày</div>
                <div
                  style={{
                    color: "#535261",
                    fontWeight: "400",
                    fontSize: "16px",
                  }}
                >
                  Ví dụ: 201-2001
                </div>
              </div>
            </div>
          </div>
          <div className="tableSerial">
            <SerialDT id={data.id} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailService;
