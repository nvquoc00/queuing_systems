import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";

const DetailDevice = () => {
  const [data, setData] = useState("");
  const pencil = <FontAwesomeIcon icon={faPencil} />;
  const location = window.location.pathname;
  const id = location.slice(location.lastIndexOf("/") + 1);

  const q = query(collection(db, "devices"), where("id", "==", `${id}`));

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

  console.log(id);
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
                    Mã thiết bị:{" "}
                    <span style={{ paddingLeft: "36px" }}>{data.id}</span>
                  </label>
                </div>
                <div className="left">
                  <label className="userLogin__formTextLabel">
                    Tên thiết bị:{" "}
                    <span style={{ paddingLeft: "36px" }}>{data.name}</span>
                  </label>
                </div>
                <div className="left">
                  <label className="userLogin__formTextLabel">
                    Địa chỉ IP:{" "}
                    <span style={{ paddingLeft: "36px" }}>{data.address}</span>
                  </label>
                </div>
              </form>
            </div>
          </div>

          <div id="right">
            <div className="profile__contentRight">
              <form>
                <div className="right">
                  <label className="userLogin__formTextLabel">
                    Loại thiết bị:{" "}
                    <span style={{ paddingLeft: "36px" }}>{data.name}</span>
                  </label>
                </div>
                <div className="right">
                  <label className="userLogin__formTextLabel">
                    Tên đăng nhập:{" "}
                    <span style={{ paddingLeft: "36px" }}>{data.user}</span>
                  </label>
                </div>
                <div className="right">
                  <label className="userLogin__formTextLabel">
                    Mật khẩu:{" "}
                    <span style={{ paddingLeft: "36px" }}>{data.password}</span>
                  </label>
                </div>
              </form>
            </div>
          </div>

          <div className="service">
            <label className="userLogin__formTextLabel">
              Dịch vụ sử dụng:{" "}
              <div className="content-service">{data.usedsv}</div>
            </label>
          </div>
          <div className="addNewDevice">
            <Link
              to={`/device/listDevice/${data.id}/updateDevice`}
              className="link"
            >
              <i>{pencil}</i>
              Cập nhật thiết bị
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailDevice;
