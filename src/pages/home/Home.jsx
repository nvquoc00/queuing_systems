import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import React, { useState } from "react";
import Calendar from "moedim";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";

const Home = () => {
  const [value, setValue] = useState(new Date());
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="main_content">
          <div className="left_content">
            <h2>Biểu đồ cấp số</h2>
            <div className="widgets">
              <Widget type="user" />
              <Widget type="product" />
              <Widget type="order" />
              <Widget type="earning" />
            </div>
            <div className="charts">
              <Chart
                title="Bảng thống kê theo tháng"
                year="2021"
                aspect={3 / 1}
              />
            </div>
          </div>
          <div className="right_content">
            <Featured />
            <div className="listContainer">
              <Calendar value={value} onChange={(d) => setValue(d)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
