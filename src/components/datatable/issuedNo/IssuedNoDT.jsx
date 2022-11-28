import "./style.scss";
import { DataGrid } from "@mui/x-data-grid";
import { issuedNoColumns } from "../../../datatablesource";
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

const IssuedNoDT = (props) => {
  const id = props.id;
  const [data, setData] = useState([]);
  const dateFormat = "DD/MM/YYYY";
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "issuedNo"));
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
                pathname: `/issuedNo./listIssuedNo./${params.id}`,
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
  const onSearch = (value) => console.log(value);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="table">
      <div className="datatable">
        <div className="datatableTitle">Quản lý cấp số</div>
        <div className="filterselect">
          <div className="status">
            <div className="activityTitle">Tên dịch vụ</div>
            <Select
              defaultValue="Tất cả"
              style={{ width: 180 }}
              onChange={handleChange}
              options={[
                {
                  value: "Tất cả",
                  label: "Tất cả",
                },
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
          <div className="status" style={{ marginLeft: 20 }}>
            <div className="activityTitle">Tình trạng</div>
            <Select
              defaultValue="Tất cả"
              style={{ width: 180 }}
              onChange={handleChange}
              options={[
                {
                  value: "Tất cả",
                  label: "Tất cả",
                },
                {
                  value: "Đang chờ",
                  label: "Đang chờ",
                },
                {
                  value: "Đã sử dụng",
                  label: "Đã sử dụng",
                },
                {
                  value: "Bỏ qua",
                  label: "Bỏ qua",
                },
              ]}
            />
          </div>
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
          columns={issuedNoColumns.concat(viewColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
        />
      </div>
      <div className="newIssuedNo">
        <Link to={`/issuedNo./listIssuedNo./newIssuedNo.`} className="link">
          <i>{plus}</i>
          Cấp số mới
        </Link>
      </div>
    </div>
  );
};

export default IssuedNoDT;
