import { useState, useEffect } from "react";
import { useAuthStore } from "../../../store/useAuthStore";

import { navIcons } from "../../config/navigation";
import profileImg from "../../../assets/vite.svg";
import { useTheme } from "../../hooks/useTheme";
import { useTaskStore } from "../../../store/useTaskStore";
import { useNoteStore } from "../../../store/useNoteStore";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/Button";

interface NavbarProps {
    onToggleSidebar: () => void;
}

export default function Navbar({ onToggleSidebar }: NavbarProps) {
    const { theme, toggleTheme } = useTheme()
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const logout = useAuthStore((state) => state.logout)
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

                <Button onClick={toggleTheme} variant="ghost">
                    {theme === "light" ? <navIcons.darkmode /> : <navIcons.lighMode />}
                </Button>

                {/* Profile Dropdown */}
                <Button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    variant="ghost"
                    className="flex items-center w-auto gap-x-4"
                >
                    <div className="w-8 h-8 rounded-full bg-surface border border-border overflow-hidden">
                        <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-sm font-medium text-text-main hidden md:block">Alex Smith</span>
                    <span className="text-text-muted"><navIcons.dropdown /></span>
                </Button>

                {/* Dropdown Menu  */}
                <ul className={`absolute right-0 mt-60 w-48 bg-bg border border-border rounded-xl shadow-xl py-2 transition-all duration-200 origin-top-right
                        ${isProfileOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
                >
                    <li className="px-4 py-2 text-xs font-semibold text-text-muted uppercase">Account</li>
                    <li>
                        <Link to={"settings#profile"}>
                            <Button className="w-full" variant="ghost">
                                <div className="flex gap-x-2 items-center">
                                    <navIcons.profile />
                                    <span>
                                        Profile
                                    </span>
                                </div>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to={"settings"}>
                            <Button className="w-full" variant="ghost">
                                <div className="flex gap-x-2 items-center">
                                    <navIcons.settings />
                                    <span>
                                        Settings
                                    </span>
                                </div>
                            </Button>
                        </Link>
                    </li>
                    <hr className="my-1 border-border" />
                    <li>
                        <Button
                            className="w-full text-error!"
                            variant="ghost"
                            onClick={() => logout()}
                        >
                            <div className="flex gap-x-2 items-center">
                                <navIcons.logout />
                                LogOut
                            </div>
                        </Button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

