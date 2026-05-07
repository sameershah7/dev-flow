
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { sidebarItems, sidebarIcons } from "../../config/navigation";
import Logo from "../../../assets/vite.svg";

interface SidebarProps {
    isMobileOpen: boolean;
    onCloseMobile: () => void;
}

export default function Sidebar({ isMobileOpen, onCloseMobile }: SidebarProps) {
    const { expand: OpenIcon, collapse: CloseIcon } = sidebarIcons;

    const [isCollapsed, setIsCollapsed] = useState(() => {
        const saved = localStorage.getItem("isCollapsed");
        return saved === "true" && window.innerWidth > 768;
    });

    useEffect(() => {
        if (window.innerWidth > 768) {
            localStorage.setItem("isCollapsed", JSON.stringify(isCollapsed));
        }
    }, [isCollapsed]);

    const toggleDesktopCollapse = () => {
        setIsCollapsed((prev) => !prev);
    };

    return (
        <>
            <div
                className={`fixed inset-0 bg-text-main/40 z-40 transition-opacity duration-300 md:hidden 
                ${isMobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={onCloseMobile}
            />

            <aside
                className={`
                fixed inset-y-0 left-0 z-50 bg-bg text-text-main transition-all duration-300 ease-in-out group/sidebar
                md:relative md:translate-x-0 border-r border-border 
                ${isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
                ${isCollapsed ? "md:w-16" : "md:w-60 w-64"}
            `}
            >
                <div className="p-4 flex justify-between items-center h-16 border-b border-border">
                    <img
                        src={Logo}
                        alt="Logo"
                        className={`w-8 h-8 transition-all ${isCollapsed
                            ? "md:block md:group-hover/sidebar:hidden"
                            : "block"
                            }`}
                    />

                    <button
                        onClick={toggleDesktopCollapse}
                        className={`cursor-pointer hidden ${isCollapsed
                            ? "group-hover/sidebar:block m-auto"
                            : "md:block"
                            }`}
                    >
                        {isCollapsed ? <OpenIcon /> : <CloseIcon />}
                    </button>

                    <button onClick={onCloseMobile} className="md:hidden p-1">
                        <CloseIcon />
                    </button>
                </div>

                <nav className="mt-2">
                    <ul>
                        {sidebarItems.map((item) => {
                            const Icon = item.icon;

                            return (
                                <li
                                    key={item.path}
                                    className="group/item relative px-2 mb-1"
                                >
                                    <NavLink
                                        to={item.path}
                                        onClick={() =>
                                            window.innerWidth < 768 &&
                                            onCloseMobile()
                                        }
                                        className={({ isActive }) => `
                                            flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors
                                            ${isActive
                                                ? "bg-active text-primary"
                                                : "text-text-muted hover:bg-hover"
                                            }
                                            ${isCollapsed
                                                ? "md:justify-center"
                                                : ""
                                            }`}>
                                        <Icon className="w-5 h-5 flex-shrink-0" />

                                        <span
                                            className={`transition-opacity duration-200 
                                            ${isCollapsed
                                                    ? "md:hidden"
                                                    : "block"
                                                }`}>
                                            {item.name}
                                        </span>
                                    </NavLink>

                                    {isCollapsed && (
                                        < span
                                            className="absolute left-14 top-1/2 -translate-y-1/2 z-[60] hidden md:block
                                    whitespace-nowrap bg-surface text-text-main text-xs px-2 py-1 rounded border border-border
                                    pointer-events-none opacity-0 group-hover/item:opacity-100 transition-opacity"
                                        >
                                            {item.name}
                                        </span>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </aside >
        </>
    );
}
