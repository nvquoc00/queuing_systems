import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
const circle = <FontAwesomeIcon icon={faCircle} />;

export const userColumns = [
  { field: "id", headerName: "Mã thiết bị", width: 100 },
  {
    field: "name",
    headerName: "Tên thiết bị",
    width: 100,
  },
  {
    field: "address",
    headerName: "Địa chỉ IP",
    width: 120,
  },

  {
    field: "activity",
    headerName: "Trạng thái hoạt động",
    width: 175,
    renderCell: (params) => {
      return (
        <>
          <p>
            <i className={`cellWithStatus ${params.row.activity}`}>{circle}</i>
            {params.row.activity}
          </p>
        </>
      );
    },
  },
  {
    field: "connection",
    headerName: "Trạng thái kết nối",
    width: 160,
    renderCell: (params) => {
      return (
        <>
          <p>
            <i className={`cellWithStatus ${params.row.connection}`}>
              {circle}
            </i>
            {params.row.connection}
          </p>
        </>
      );
    },
  },
  {
    field: "usedsv",
    headerName: "Dịch vụ sử dụng",
    width: 180,
  },
];
