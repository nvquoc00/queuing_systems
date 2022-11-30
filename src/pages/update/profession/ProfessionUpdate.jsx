import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";

const ProfessionUpdate = () => {
  const [data, setData] = useState("");
  const rotate = <FontAwesomeIcon icon={faRotateLeft} />;
  const navigate = useNavigate();

  const { id } = useParams();
  const q = query(collection(db, "jobs"), where("id", "==", `${id}`));

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

                  <input value={data.job} />
                </div>
                <div className="left">
                  <label className="userLogin__formTextLabel">Mô tả:</label>
                  <div>
                    <textarea
                      value={data.describe}
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
                          checked
                        ></input>
                        <label htmlFor=""> Tất cả</label>
                      </div>
                      <div className="check">
                        <input
                          type="checkbox"
                          className="checkboxOption"
                          checked
                        ></input>
                        <label htmlFor=""> Chức năng x</label>
                      </div>
                      <div className="check">
                        <input
                          type="checkbox"
                          className="checkboxOption"
                          checked
                        ></input>
                        <label htmlFor=""> Chức năng y</label>
                      </div>
                      <div className="check">
                        <input
                          type="checkbox"
                          className="checkboxOption"
                          checked
                        ></input>
                        <label htmlFor=""> Chức năng z</label>
                      </div>
                    </div>
                    <div className="groupA">
                      <div className="titleRight">Nhóm chức năng B</div>
                      <div className="check">
                        <input
                          type="checkbox"
                          className="checkboxOption"
                        ></input>
                        <label htmlFor=""> Tất cả</label>
                      </div>
                      <div className="check">
                        <input
                          type="checkbox"
                          className="checkboxOption"
                        ></input>
                        <label htmlFor=""> Chức năng x</label>
                      </div>
                      <div className="check">
                        <input
                          type="checkbox"
                          className="checkboxOption"
                        ></input>
                        <label htmlFor=""> Chức năng y</label>
                      </div>
                      <div className="check">
                        <input
                          type="checkbox"
                          className="checkboxOption"
                        ></input>
                        <label htmlFor=""> Chức năng z</label>
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
              Cập nhật
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionUpdate;
