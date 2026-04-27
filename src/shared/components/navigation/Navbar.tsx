import { useState, useEffect } from "react";

import { navIcons } from "../../config/navigation";
import profileImg from "../../../assets/vite.svg";
import { useTheme } from "../../hooks/useTheme";
import { useTaskStore } from "../../../store/useTaskStore";
import { useNoteStore } from "../../../store/useNoteStore";
import { useLocation } from "react-router-dom";

interface NavbarProps {
    onToggleSidebar: () => void;
}

export default function Navbar({ onToggleSidebar }: NavbarProps) {
    const { theme, toggleTheme } = useTheme()
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const { pathname } = useLocation();

    const setSearchTaskQuery = useTaskStore(s => s.setSearchQuery);
    const setSearchNoteQuery = useNoteStore(s => s.setSearchQuery);

    const handleSearch = (value: string) => {
        setSearchQuery(value);

        if (pathname === "/tasks" || pathname === "/dashboard") {
            setSearchTaskQuery(value);
        } else if (pathname === "/notes") {
            setSearchNoteQuery(value);
        }
    };

    useEffect(() => {
        setSearchQuery("");
        setSearchTaskQuery("");
        setSearchNoteQuery("");
    }, [pathname]);

    return (
        <nav className="h-16 bg-bg/80 backdrop-blur-md border-b border-border flex justify-between items-center sticky top-0 z-30 lg:px-4">
            {/* Left Side */}
            <div className="flex items-center gap-4">
                <button
                    onClick={onToggleSidebar}
                    className="p-2 hover:bg-hover text-text-main rounded-lg md:hidden transition-colors"
                >
                    <navIcons.menu />
                </button>
                <h1 className="md:text-md lg:text-lg font-bold text-text-main tracking-tight">Dashboard</h1>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-6">
                <div className="hidden sm:flex items-center bg-surface border border-border focus-within:border-primary focus-within:bg-bg px-3 py-1.5 rounded-full transition-all">
                    <span className="text-text-muted"><navIcons.search /></span>
                    <input
                        className="bg-transparent border-none outline-0 text-sm ml-2 w-48 text-text-main placeholder:text-text-muted"
                        placeholder="Search anything..."
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </div>

                <button
                    onClick={toggleTheme}
                    className="px-3 py-1 rounded border border-border bg-surface text-text-main hover:bg-hover transition-colors"
                >
                    {theme === "light" ? <navIcons.darkmode /> : <navIcons.lighMode />}
                </button>

                {/* Profile Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                        onBlur={() => setTimeout(() => setIsProfileOpen(false), 200)}
                        className="flex items-center gap-2 p-1 pr-2 hover:bg-hover rounded-full transition-all"
                    >
                        <div className="w-8 h-8 rounded-full bg-surface border border-border overflow-hidden">
                            <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-sm font-medium text-text-main hidden md:block">Alex Smith</span>
                        <span className="text-text-muted"><navIcons.dropdown /></span>
                    </button>

                    {/* Dropdown Menu  */}
                    <ul className={`absolute right-0 mt-2 w-48 bg-bg border border-border rounded-xl shadow-xl py-2 transition-all duration-200 origin-top-right
                        ${isProfileOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
                    >
                        <li className="px-4 py-2 text-xs font-semibold text-text-muted uppercase">Account</li>
                        <li>
                            <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-text-main hover:bg-hover hover:text-primary transition-colors">
                                <navIcons.profile />Profile
                            </button>
                        </li>
                        <li>
                            <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-text-main hover:bg-hover hover:text-primary transition-colors">
                                <navIcons.settings /> Settings
                            </button>
                        </li>
                        <hr className="my-1 border-border" />
                        <li>
                            <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-error hover:bg-error/10 transition-colors">
                                <navIcons.logout />LogOut
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

