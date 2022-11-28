import "./style.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import ServiceDT from "../../../components/datatable/service/ServiceDT";

const Service = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <ServiceDT />
      </div>
    </div>
  );
};

export default Service;
