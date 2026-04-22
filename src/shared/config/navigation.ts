import {
    LayoutDashboard,
    CheckSquare,
    StickyNote,
    GitBranch,
    Settings,
    SquareChevronLeft,
    SquareChevronRight,
    Search,
    User,
    LogOut,
    ChevronDown,
    Menu
} from "lucide-react";

// 1. Navigation Links
export const sidebarItems = [
    { name: "Dashboard", path: "/", icon: LayoutDashboard },
    { name: "Tasks", path: "/tasks", icon: CheckSquare },
    { name: "Notes", path: "/notes", icon: StickyNote },
    { name: "GitHub", path: "/github", icon: GitBranch },
    { name: "Settings", path: "/settings", icon: Settings },
];

export const sidebarIcons = {
    expand: SquareChevronRight,
    collapse: SquareChevronLeft,
};


export const navIcons = {
    search: Search,
    profile: User,
    logout: LogOut,
    dropdown: ChevronDown,
    menu: Menu,
    settings: Settings,
};


