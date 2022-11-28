import "./style.scss";
import { DataGrid } from "@mui/x-data-grid";
import { serviceColumns } from "../../../datatablesource";
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
const ServiceDT = () => {
  const [data, setData] = useState([]);
  const dateFormat = "DD/MM/YYYY";
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "services"));
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

  const viewColumn = [
    {
      field: "action",
      headerName: "",
      width: 80,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={{
                pathname: `/service/listService/${params.id}`,
                query: `${params}`,
              }}
            >
              <div className="viewButton">Chi tiết</div>
            </Link>
          </div>
        );
      },
    },
  ];
  const updateColumn = [
    {
      field: "update",
      headerName: "",
      width: 80,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={{
                pathname: `/service/listService/${params.id}/updateService`,
                query: `${params}`,
              }}
            >
              <div className="updateButton">Cập nhật</div>
            </Link>
          </div>
        );
      },
    },
  ];
  const onSearch = (value) => console.log(value);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="table">
      <div className="datatable">
        <div className="datatableTitle">Danh sách thiết bị</div>
        <div className="filterselect">
          <div className="selectactivity">
            <div className="activityTitle">Trạng thái hoạt động</div>
            <Select
              defaultValue="Tất cả"
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                {
                  value: "Tất cả",
                  label: "Tất cả",
                },
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
          <div className="selectconnection">
            <div className="connectionTitle">Chọn thời gian</div>
            <Space
              direction="vertical"
              size={12}
              style={{
                padding: "6px",
              }}
            >
              <RangePicker format={dateFormat} />
            </Space>
          </div>
          <div className="searchInput">
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
          columns={serviceColumns.concat(viewColumn, updateColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
        />
      </div>
      <div className="addNewDevice">
        <Link to="/service/listService/newService" className="link">
          <i>{plus}</i>
          Thêm dịch vụ
        </Link>
      </div>
    </div>
  );
};

export default ServiceDT;
