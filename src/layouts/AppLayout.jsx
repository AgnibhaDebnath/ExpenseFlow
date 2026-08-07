import { useState } from "react";



import Topbar from "../Components/layout/Topbar";
import SideBar from "../Components/layout/Sidebar";
import { Outlet } from "react-router"

const AppLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <div className="h-screen flex flex-col">
            <Topbar setIsSidebarOpen={setIsSidebarOpen} />
            <div className="flex flex-1">
                <div className="hidden md:block w-60 h-full">
                    <SideBar />
                </div>
                <main className="flex-1 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
            {
                isSidebarOpen && (
                    <>
                        <div
                            className="fixed inset-0 bg-black opacity-30 md:hidden z-50"
                            onClick={() => setIsSidebarOpen(false)}
                        ></div>
                        <div className="fixed top-0 left-0 h-full w-60 bg-white shadow-lg z-50 md:hidden">
                            <SideBar onClose={() => setIsSidebarOpen(false)} />
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default AppLayout;