import { DataGrid } from "@mui/x-data-grid";
import { historyColumns } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Input, Select, DatePicker, Space } from "antd";
import dayjs from "dayjs";
const { Search } = Input;
const { RangePicker } = DatePicker;
const plus = <FontAwesomeIcon icon={faPlus} />;
const HistoryDT = () => {
  const [data, setData] = useState([]);
  const dateFormat = "DD/MM/YYYY";
  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "history"));
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
      <div className="datatable" style={{ maxWidth: "100%" }}>
        <div className="datatableTitle">Danh sách vai trò</div>
        <div className="filterselect">
          <div
            className="rangeTime"
            style={{
              margin: "0px 20px 20px 20px",
            }}
          >
            <div className="connectionTitle">Chọn thời gian</div>
            <Space direction="vertical" size={7}>
              <RangePicker format={dateFormat} />
            </Space>
          </div>
          <div className="searchInput" style={{ marginLeft: "37%" }}>
            <div className="searchTitle">Từ khóa</div>
            <Search
              placeholder="Nhập từ khóa"
              onSearch={onSearch}
              enterButton
            />
          </div>
        </div>

        <DataGrid
          className="datagrid"
          rows={data}
          columns={historyColumns}
          pageSize={9}
          rowsPerPageOptions={[9]}
        />
      </div>
    </div>
  );
};

export default HistoryDT;
