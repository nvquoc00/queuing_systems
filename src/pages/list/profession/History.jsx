import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import HistoryDT from "../../../components/datatable/profession/HistoryDT";

const History = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <HistoryDT />
      </div>
    </div>
  );
};

export default History;
