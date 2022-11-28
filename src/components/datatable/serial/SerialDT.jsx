import "./style.scss";
import { DataGrid } from "@mui/x-data-grid";
import { serialColumns } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faArrowRotateBack } from "@fortawesome/free-solid-svg-icons";
import { Input, Select, DatePicker, Space } from "antd";
import dayjs from "dayjs";
const { Search } = Input;
const { RangePicker } = DatePicker;
const pencil = <FontAwesomeIcon icon={faPencil} />;
const rotate = <FontAwesomeIcon icon={faArrowRotateBack} />;

const SerialDT = (props) => {
  const id = props.id;
  const [data, setData] = useState([]);
  const dateFormat = "DD/MM/YYYY";
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "serial"));
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
        console.log(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const onSearch = (value) => console.log(value);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="table">
      <div className="datatable">
        <div className="filterselect">
          <div className="status">
            <div className="activityTitle">Trạng thái hoạt động</div>
            <Select
              defaultValue="Tất cả"
              style={{ width: 40 }}
              onChange={handleChange}
              options={[
                {
                  value: "Tất cả",
                  label: "Tất cả",
                },
                {
                  value: "Đã hoàn thành",
                  label: "Đã hoàn thành",
                },
                {
                  value: "Đã thực hiện",
                  label: "Đã thực hiện",
                },
                {
                  value: "Vắng",
                  label: "Vắng",
                },
              ]}
            />
          </div>
          <div className="rangeTime">
            <div className="connectionTitle">Chọn thời gian</div>
            <Space
              direction="vertical"
              size={6}
              style={{
                padding: "6px",
              }}
            >
              <RangePicker format={dateFormat} />
            </Space>
          </div>
          <div className="search">
            <div className="searchTitle">Từ khóa</div>
            <Search
              placeholder="Nhập từ khóa"
              onSearch={onSearch}
              enterButton
            />
          </div>
        </div>

        <DataGrid
          className="serial"
          rows={data}
          columns={serialColumns}
          pageSize={9}
          rowsPerPageOptions={[9]}
        />
      </div>
      <div className="updateService">
        <Link to={`/service/listService/${id}/updateService`} className="link">
          <i>{pencil}</i>
          Cập nhật danh sách
        </Link>
      </div>
      <div className="back">
        <Link to="/service/listService" className="link">
          <i>{rotate}</i>
          Quay lại
        </Link>
      </div>
    </div>
  );
};

export default SerialDT;
