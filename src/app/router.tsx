import { createBrowserRouter } from "react-router-dom"
import { DashboardLayout } from "../shared/components/layout/DashboardLayout";

import DashboardPage from "../features/dashboard/DashboardPage";
import TaskPage from "../features/tasks/TaskPage";
import NotesPage from "../features/notes/NotesPage";
import GithubPage from "../features/github/GithubPage";
import SettingPage from "../features/settings/SettingPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <DashboardPage />
            },
            {
                path: "tasks",
                element: <TaskPage />
            },
            {
                path: "notes",
                element: <NotesPage />
            },
            {
                path: "github",
                element: <GithubPage />
            },
            {
                path: "settings",
                element: <SettingPage />
            },

        ],
    },
]);
