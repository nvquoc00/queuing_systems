import { DataGrid } from "@mui/x-data-grid";
import { professionColumns } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Input } from "antd";
const { Search } = Input;
const plus = <FontAwesomeIcon icon={faPlus} />;
const ProfessionDT = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "jobs"));
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

  const updateColumn = [
    {
      field: "update",
      headerName: "",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={{
                pathname: `/setting/profession/${params.id}/updateProfession`,
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
        <div className="datatableTitle">Danh sách vai trò</div>
        <div className="filterselect" style={{ paddingBottom: "16px" }}>
          <div className="searchInput" style={{ marginLeft: "65%" }}>
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
          columns={professionColumns.concat(updateColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
        />
      </div>
      <div className="addNewDevice">
        <Link to="/setting/profession/newProfession" className="link">
          <i>{plus}</i>
          Thêm vai trò
        </Link>
      </div>
    </div>
  );
};

export default ProfessionDT;
