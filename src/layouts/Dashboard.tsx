import { PropsWithChildren, Suspense } from "react";
import App from "../App";
import Portals from "./Portals";
import Sidebar from "./Sidebar";
const Dashboard = ({ children }: PropsWithChildren) => {
  return (
    <App>
      {/* BEGIN MAIN CONTAINER */}
      <div className="relative">
        {/* PRELOADER */}
        <Sidebar />
        <div className="main-content flex flex-col min-h-screen ml-auto">
          {/* BEGIN CONTENT AREA */}
          <Suspense>{children}</Suspense>
          {/* END CONTENT AREA */}
          <Portals />
        </div>
      </div>
    </App>
  );
};

export default Dashboard;
