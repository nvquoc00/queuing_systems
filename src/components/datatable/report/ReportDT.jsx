import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { reportColumns } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Input, Select, DatePicker, Space } from "antd";
import dayjs from "dayjs";
const { Search } = Input;
const { RangePicker } = DatePicker;
const file = <FontAwesomeIcon icon={faFileArrowDown} />;

const ReportDT = (props) => {
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

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }
  return (
    <div className="table">
      <div className="datatable">
        <div className="filterselect">
          <div
            className="rangeTime"
            style={{
              margin: "0px 20px 20px 20px",
            }}
          >
            <div className="connectionTitle">Chọn thời gian</div>
            <Space direction="vertical" size={4}>
              <RangePicker format={dateFormat} />
            </Space>
          </div>
        </div>

        <DataGrid
          className="serial"
          rows={data}
          columns={reportColumns}
          pageSize={9}
          rowsPerPageOptions={[9]}
          components={{
            Toolbar: CustomToolbar,
          }}
        />
      </div>
      <div className="newIssuedNo">
        <button className="link" type="submit">
          <i>{file}</i>
          Tải về
        </button>
      </div>
    </div>
  );
};

export default ReportDT;
