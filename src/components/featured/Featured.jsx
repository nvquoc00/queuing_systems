import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "react-circular-progressbar/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
const circle = <FontAwesomeIcon icon={faCircle} />;

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Tổng quan</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <img
            className="chartimg"
            src={require("../../images/chart90.png")}
            alt="chart"
          />
        </div>
        <div id="data_number">
          <p className="amount">4.221</p>
          <p className="title">
            <img
              className="device"
              src={require("../../images/monitor.png")}
              alt="monitor"
            />
            Thiết bị
          </p>
        </div>
        <div id="status">
          <p className="desc">
            <i className="active_device">{circle}</i>
            &nbsp;Đang hoạt động
          </p>
          <p className="desc">
            <i>{circle}</i>&nbsp;Ngưng hoạt động
          </p>
        </div>
        <div id="data_device">
          <p>3.799</p>
          <p>422</p>
        </div>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <img
            className="chartimg"
            src={require("../../images/chart76.png")}
            alt="chart"
          />
        </div>
        <div id="data_number">
          <p className="amount">276</p>
          <p className="title">
            <img
              className="serviceimg"
              src={require("../../images/service.png")}
              alt="service"
            />
            Dịch vụ
          </p>
        </div>
        <div id="status">
          <p className="desc">
            <i className="active_service">{circle}</i>
            &nbsp;Đang hoạt động
          </p>
          <p className="desc">
            <i>{circle}</i>&nbsp;Ngưng hoạt động
          </p>
        </div>
        <div id="data_service">
          <p>210</p>
          <p>66</p>
        </div>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <img
            className="chartimg"
            src={require("../../images/chart86.png")}
            alt="chart"
          />
        </div>
        <div id="data_number">
          <p className="amount">4.221</p>
          <p className="title">
            <img
              className="layer"
              src={require("../../images/layers.png")}
              alt="layers"
            />
            Cấp số
          </p>
        </div>
        <div id="status">
          <p className="desc">
            <i className="used_order">{circle}</i>
            &nbsp;Đã sử dụng
          </p>
          <p className="desc">
            <i>{circle}</i>&nbsp;Đang chờ
          </p>
          <p className="desc">
            <i className="missing">{circle}</i>&nbsp;Bỏ qua
          </p>
        </div>
        <div id="data_order">
          <p>3.721</p>
          <p>486</p>
          <p>32</p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
