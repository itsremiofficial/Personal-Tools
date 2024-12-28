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
        <div
          className={`min-w-screen w-full dark:text-white min-h-screen flex `}
        >
          <Sidebar />
          <div className="grow flex flex-col min-h-screen">
            {/* BEGIN CONTENT AREA */}
            <Suspense>{children}</Suspense>
            {/* END CONTENT AREA */}
            <Portals />
          </div>
        </div>
      </div>
    </App>
  );
};

export default Dashboard;
