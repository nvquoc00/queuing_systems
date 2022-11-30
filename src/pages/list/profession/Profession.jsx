import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import ProfessionDT from "../../../components/datatable/profession/ProfessionDT";

const Profession = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <ProfessionDT />
      </div>
    </div>
  );
};

export default Profession;
