import React, { useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { Input, Select, Modal } from "antd";

const NewIssuedNo = () => {
  const [open, setOpen] = useState(false);

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
        <div className="title">Quản lý cấp số</div>
        <div className="issued">
          <div className="heading">Cấp số mới</div>
          <div className="opt">
            <div className="selectUser">Dịch vụ khách hàng lựa chọn</div>
            <Select
              defaultValue="Chọn dịch vụ"
              style={{ width: 400 }}
              onChange={handleChange}
              options={[
                {
                  value: "Khám Sản - Phụ khoa",
                  label: "Khám Sản - Phụ khoa",
                },
                {
                  value: "Khám răng hàm mặt",
                  label: "Khám răng hàm mặt",
                },
                {
                  value: "Khám tai mũi họng",
                  label: "Khám tai mũi họng",
                },
                {
                  value: "Khám hô hấp",
                  label: "Khám hô hấp",
                },
                {
                  value: "Khám tim mạch",
                  label: "Khám tim mạch",
                },
                {
                  value: "Khám tổng quát",
                  label: "Khám tổng quát",
                },
              ]}
            />
          </div>
          <div className="buttonclick">
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
              onClick={() => setOpen(true)}
            >
              In số
            </button>
            <Modal
              title="Số thứ tự được cấp"
              centered
              open={open}
              onCancel={() => setOpen(false)}
              afterClose={() => navigate("/issuedNo./listIssuedNo./2001201")}
            >
              <p className="issuedNo">2001201</p>
              <p className="infor">DV: Khám răng hàm mặt (tại quầy số 1)</p>
              <div className="footer">
                <p>Thời gian cấp: 09:30 11/10/2021</p>
                <p>Hạn sử dụng: 17:30 11/10/2021</p>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewIssuedNo;
