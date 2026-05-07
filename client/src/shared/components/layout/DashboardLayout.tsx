import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../navigation/Sidebar.tsx"
import Navbar from "../navigation/Navbar.tsx";

export function DashboardLayout() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const handleToggleSidebar = () => {
        setIsMobileOpen((prev) => !prev);
    };

    const handleCloseSidebar = () => {
        setIsMobileOpen(false);
    };

    return (
        <div className="min-h-screen flex bg-bg text-text-main">
            <Sidebar
                isMobileOpen={isMobileOpen}
                onCloseMobile={handleCloseSidebar}
            />

            <main className="flex-1 h-screen">
                <Navbar onToggleSidebar={handleToggleSidebar} />

                <div className="h-[calc(100vh-4rem)] p-4 md:p-6 overflow-y-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}

