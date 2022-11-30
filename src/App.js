import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ResetPassword from "./pages/resetpw/ResetPassword";
import ForgotPassword from "./pages/forgotpw/ForgetPassword";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import DetailDevice from "./pages/detail/device/DetailDevice";
import Update from "./pages/update/device/Update";
import Device from "./pages/new/device/Device";
import Service from "./pages/list/service/Service";
import NewService from "./pages/new/service/NewService";
import DetailService from "./pages/detail/service/DetailService";
import UpdateService from "./pages/update/service/UpdateService";
import IssuedNo from "./pages/list/issuedNo/IssuedNo";
import NewIssuedNo from "./pages/new/issuedNo/NewIssuedNo";
import DetailIssuedNo from "./pages/detail/issuedNo/DetailIssuedNo";
import Report from "./pages/list/report/Report";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import "./index.css";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import Profession from "./pages/list/profession/Profession";
import NewProfession from "./pages/new/profession/NewProfession";
import ProfessionUpdate from "./pages/update/profession/ProfessionUpdate";
import Account from "./pages/list/profession/Account";
import NewAccount from "./pages/new/profession/NewAccount";
import AccountUpdate from "./pages/update/profession/AccountUpdate";
import History from "./pages/list/profession/History";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route path="enteremail" element={<ForgotPassword />} />
            <Route path="resetpw" element={<ResetPassword />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route
              path="profile"
              element={
                <RequireAuth>
                  <Single />
                </RequireAuth>
              }
            />
            <Route path="device/listDevice">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              <Route
                path="newDevice"
                element={
                  <RequireAuth>
                    <Device />
                  </RequireAuth>
                }
              />
              <Route
                path=":id"
                element={
                  <RequireAuth>
                    <DetailDevice />
                  </RequireAuth>
                }
              />
              <Route
                path=":id/updateDevice"
                action={({ params }) => {}}
                element={
                  <RequireAuth>
                    <Update />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="service/listService">
              <Route
                index
                element={
                  <RequireAuth>
                    <Service />
                  </RequireAuth>
                }
              />
              <Route
                path=":id"
                element={
                  <RequireAuth>
                    <DetailService />
                  </RequireAuth>
                }
              />
              <Route
                path=":id/updateService"
                element={
                  <RequireAuth>
                    <UpdateService />
                  </RequireAuth>
                }
              />
              <Route
                path="newService"
                element={
                  <RequireAuth>
                    <NewService />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="issuedNo./listIssuedNo.">
              <Route
                index
                element={
                  <RequireAuth>
                    <IssuedNo />
                  </RequireAuth>
                }
              />
              <Route
                path=":id"
                element={
                  <RequireAuth>
                    <DetailIssuedNo />
                  </RequireAuth>
                }
              />
              <Route
                path=":id/updateService"
                element={
                  <RequireAuth>
                    <UpdateService />
                  </RequireAuth>
                }
              />
              <Route
                path="newIssuedNo."
                element={
                  <RequireAuth>
                    <NewIssuedNo />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="statify/listStatify">
              <Route
                index
                element={
                  <RequireAuth>
                    <Report />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="setting/profession">
              <Route
                index
                element={
                  <RequireAuth>
                    <Profession />
                  </RequireAuth>
                }
              />
              <Route
                path="newProfession"
                element={
                  <RequireAuth>
                    <NewProfession />
                  </RequireAuth>
                }
              />
              <Route
                path=":id/updateProfession"
                element={
                  <RequireAuth>
                    <ProfessionUpdate />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="setting/account">
              <Route
                index
                element={
                  <RequireAuth>
                    <Account />
                  </RequireAuth>
                }
              />
              <Route
                path="newAccount"
                element={
                  <RequireAuth>
                    <NewAccount />
                  </RequireAuth>
                }
              />
              <Route
                path=":id/updateAccount"
                element={
                  <RequireAuth>
                    <AccountUpdate />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="setting/history">
              <Route
                index
                element={
                  <RequireAuth>
                    <History />
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
