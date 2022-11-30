import { DataGrid } from "@mui/x-data-grid";
import { accountColumns } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Input, Select } from "antd";
const { Search } = Input;
const plus = <FontAwesomeIcon icon={faPlus} />;
const AccountDT = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "accounts"));
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
                pathname: `/setting/account/${params.id}/updateAccount`,
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
        <div className="filterselect">
          <div className="status">
            <div
              className="activityTitle"
              style={{ fontWeight: "600", fontSize: "16px", color: "#282739" }}
            >
              Tên vai trò
            </div>
            <Select
              defaultValue="Tất cả"
              style={{ width: 280 }}
              onChange={handleChange}
              options={[
                {
                  value: "Tất cả",
                  label: "Tất cả",
                },
                {
                  value: "Kế toán",
                  label: "Kế toán",
                },
                {
                  value: "Quản lý",
                  label: "Quản lý",
                },
                {
                  value: "Admin",
                  label: "Admin",
                },
              ]}
            />
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
          columns={accountColumns.concat(updateColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
        />
      </div>
      <div className="addNewDevice">
        <Link to="/setting/account/newAccount" className="link">
          <i>{plus}</i>
          Thêm tài khoản
        </Link>
      </div>
    </div>
  );
};

export default AccountDT;
