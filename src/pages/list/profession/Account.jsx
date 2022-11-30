import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import AccountDT from "../../../components/datatable/profession/AccountDT";

const Account = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <AccountDT />
      </div>
    </div>
  );
};

export default Account;
