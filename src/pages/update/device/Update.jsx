import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { useNavigate, useParams } from "react-router-dom";
import "./style.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { Typography, Select } from "antd";

const DetailDevice = () => {
  const [data, setData] = useState("");
  const { id } = useParams();

  const navigate = useNavigate();
  const { Option } = Select;
  const { Title } = Typography;
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

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  let options = data.usedsv;
  const currentOp = [
    "Khám tim mạch, Khám Sản - Phụ khoa",
    "Khám răng hàm mặt",
    "Khám tai mũi họng",
    "Khám hô hấp",
    "Khám tổng quát",
  ];

  const children = [];

  console.log(children);
  for (let i = 0; i <= options?.split(", ")?.length; i++) {
    i === 0
      ? children.push(<Option key={i}>Tất cả</Option>)
      : children.push(<Option key={i}>{options?.split(", ")[i - 1]}</Option>);
  }

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

                  <input placeholder={data.id} />
                </div>
                <div className="left">
                  <label className="userLogin__formTextLabel">
                    Tên thiết bị: <span style={{ color: "#ff4747" }}>*</span>
                  </label>
                  <div>
                    <input placeholder={data.name} />
                  </div>
                </div>
                <div className="left">
                  <label className="userLogin__formTextLabel">
                    Địa chỉ IP: <span style={{ color: "#ff4747" }}>*</span>
                  </label>
                  <div>
                    <input placeholder={data.address} />
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
                      defaultValue="Kiosk"
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
                  <input type="email" placeholder={data.user} />
                </div>
                <div className="right">
                  <label className="userLogin__formTextLabel">
                    Mật khẩu: <span style={{ color: "#ff4747" }}>*</span>
                  </label>
                  <div>
                    <input placeholder={data.password} />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="service-select">
            <label className="userLogin__formTextLabel">
              Dịch vụ sử dụng: <span style={{ color: "#ff4747" }}>*</span>
            </label>

            <div className="box-select">
              <Select
                mode="multiple"
                style={{ width: "100%" }}
                placeholder="Please select"
                defaultValue={currentOp}
                onChange={handleChange}
              >
                {children}
              </Select>
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
              onClick={() => navigate(-2)}
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
  );
};

export default DetailDevice;
