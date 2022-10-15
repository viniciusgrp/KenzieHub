import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../page/Dashboard";
import Login from "../page/Login";
import SignupElem from "../page/Signup";

function RoutesMain() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignupElem />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to={"/login"} />} />
    </Routes>
  );
}

export default RoutesMain;
