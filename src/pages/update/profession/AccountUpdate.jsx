import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { Input, Select, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const AccountUpdate = () => {
  const [data, setData] = useState("");
  const rotate = <FontAwesomeIcon icon={faRotateLeft} />;
  const navigate = useNavigate();

  const { id } = useParams();
  const q = query(collection(db, "accounts"), where("id", "==", `${id}`));

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

  console.log(data.job);
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

                  <input value={data.name} />
                </div>
                <div className="left">
                  <label className="userLogin__formTextLabel">
                    Số điện thoại: <span style={{ color: "#ff4747" }}>*</span>
                  </label>
                  <div>
                    <input value={data.phone} />
                  </div>
                </div>
                <div className="left">
                  <label className="userLogin__formTextLabel">
                    Email: <span style={{ color: "#ff4747" }}>*</span>
                  </label>
                  <div>
                    <input value={data.email} />
                  </div>
                </div>
                <div className="left">
                  <label className="userLogin__formTextLabel">
                    Vai trò: <span style={{ color: "#ff4747" }}>*</span>
                  </label>
                  <div>
                    <Select
                      defaultValue="Kế toán"
                      style={{ width: 480 }}
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
                  <input type="email" value={data.user} />
                </div>
                <div className="right">
                  <label className="userLogin__formTextLabel">
                    Tên đăng nhập: <span style={{ color: "#ff4747" }}>*</span>
                  </label>
                  <div>
                    <Space direction="vertical">
                      <Input.Password
                        value={data.password}
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
                        value={data.password}
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
              Cập nhật
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountUpdate;
