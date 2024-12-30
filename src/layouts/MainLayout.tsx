import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="flex relative">
      <Sidebar />
      <div className="main-content flex flex-col min-h-screen ml-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
