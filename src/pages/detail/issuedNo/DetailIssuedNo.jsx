import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";

const DetailIssuedNo = () => {
  const [data, setData] = useState("");
  const rotate = <FontAwesomeIcon icon={faRotateLeft} />;
  const location = window.location.pathname;
  const id = location.slice(location.lastIndexOf("/") + 1);

  const q = query(collection(db, "issuedNo"), where("id", "==", `${id}`));

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
        <div className="title">Quản lý cấp số</div>
        <div className="content">
          <div className="title">Thông tin cấp số</div>
          <div id="left" className="container-page">
            <div className="profile__contentRight">
              <form>
                <div className="left">
                  <label className="userLogin__formTextLabel">
                    Họ và tên:{" "}
                    <span style={{ paddingLeft: "36px" }}>{data.user}</span>
                  </label>
                </div>
                <div className="left">
                  <label className="userLogin__formTextLabel">
                    Tên dịch vụ:{" "}
                    <span style={{ paddingLeft: "36px" }}>{data.service}</span>
                  </label>
                </div>
                <div className="left">
                  <label className="userLogin__formTextLabel">
                    Số thứ tự:{" "}
                    <span style={{ paddingLeft: "36px" }}>{data.id}</span>
                  </label>
                </div>
                <div className="left">
                  <label className="userLogin__formTextLabel">
                    Thời gian cấp:{" "}
                    <span style={{ paddingLeft: "36px" }}>{data.time}</span>
                  </label>
                </div>
                <div className="left">
                  <label className="userLogin__formTextLabel">
                    Hạn sử dụng:{" "}
                    <span style={{ paddingLeft: "36px" }}>{data.expiry}</span>
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
                    Nguồn cấp:{" "}
                    <span style={{ paddingLeft: "36px" }}>{data.source}</span>
                  </label>
                </div>
                <div className="right">
                  <label className="userLogin__formTextLabel">
                    Trạng thái:{" "}
                    <span style={{ paddingLeft: "36px" }}>{data.status}</span>
                  </label>
                </div>
                <div className="right">
                  <label className="userLogin__formTextLabel">
                    Số điện thoại:{" "}
                    <span style={{ paddingLeft: "36px" }}>{data.phone}</span>
                  </label>
                </div>
                <div className="right">
                  <label className="userLogin__formTextLabel">
                    Email{" "}
                    <span style={{ paddingLeft: "36px" }}>{data.email}</span>
                  </label>
                </div>
              </form>
            </div>
          </div>

          <div className="addNewDevice">
            <Link to={`/issuedNo./listIssuedNo./newIssuedNo.`} className="link">
              <i>{rotate}</i>
              Quạy lại
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailIssuedNo;
