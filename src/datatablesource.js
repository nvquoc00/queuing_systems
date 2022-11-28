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

export const serviceColumns = [
  { field: "id", headerName: "Mã dịch vụ", width: 150 },
  {
    field: "name",
    headerName: "Tên dịch vụ",
    width: 210,
  },
  {
    field: "describe",
    headerName: "Mô tả",
    width: 220,
  },

  {
    field: "status",
    headerName: "Trạng thái hoạt động",
    width: 252,
    renderCell: (params) => {
      return (
        <>
          <p>
            <i className={`cellWithStatus ${params.row.status}`}>{circle}</i>
            {params.row.status}
          </p>
        </>
      );
    },
  },
];
export const serialColumns = [
  { field: "id", headerName: "Số thứ tự", width: 300 },
  {
    field: "status",
    headerName: "Trạng thái",
    width: 305,
    renderCell: (params) => {
      return (
        <>
          <p>
            <i className={`cellWithStatus ${params.row.status}`}>{circle}</i>
            {params.row.status}
          </p>
        </>
      );
    },
  },
];

export const issuedNoColumns = [
  { field: "id", headerName: "STT", width: 90 },
  {
    field: "user",
    headerName: "Tên Khách hàng",
    width: 140,
  },
  {
    field: "service",
    headerName: "Tên dịch vụ",
    width: 170,
  },

  {
    field: "time",
    headerName: "Thời gian cấp",
    width: 150,
  },
  {
    field: "expiry",
    headerName: "Hạn sử dụng",
    width: 150,
  },
  {
    field: "status",
    headerName: "Trạng thái",
    width: 115,
    renderCell: (params) => {
      return (
        <>
          <p>
            <i className={`cellWithStatus ${params.row.status}`}>{circle}</i>
            {params.row.status}
          </p>
        </>
      );
    },
  },
  {
    field: "source",
    headerName: "Nguồn cấp",
    width: 95,
  },
];
