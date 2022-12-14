import "./style.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import IssuedNoDT from "../../../components/datatable/issuedNo/IssuedNoDT";

const IssuedNo = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <IssuedNoDT />
      </div>
    </div>
  );
};

export default IssuedNo;
