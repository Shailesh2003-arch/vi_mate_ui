import Navbar from "./Navbar.jsx";
import Sidebar from "./SideBar.jsx";
import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <div className="h-screen flex flex-col bg-zinc-950 text-white">

  <Navbar />

  <div className="flex flex-1 overflow-hidden">

    <Sidebar />

    <main className="flex-1 overflow-y-auto">
      <Outlet />
    </main>

  </div>

</div>
    );
}

export default MainLayout;