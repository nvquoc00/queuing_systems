import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import ReportDT from "../../../components/datatable/report/ReportDT";

const Report = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <ReportDT />
      </div>
    </div>
  );
};

export default Report;
