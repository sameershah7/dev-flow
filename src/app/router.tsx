import { createBrowserRouter } from "react-router-dom"
import { DashboardLayout } from "../shared/components/layout/DashboardLayout";
import { PublicRoute } from "./routes/PublicRoute";
import { ProtectedRoute } from "./routes/ProtectedRoute";

import DashboardPage from "../features/dashboard/DashboardPage";
import TaskPage from "../features/tasks/TaskPage";
import NotesPage from "../features/notes/NotesPage";
import GithubPage from "../features/github/GithubPage";
import SettingPage from "../features/settings/SettingPage";
import AuthPage from "../features/auth/AuthPage";

export const router = createBrowserRouter([
    {
        path: "/auth",
        element:
            <PublicRoute>
                <AuthPage />
            </PublicRoute>
        ,
    },
    {
        path: "/",
        element:
            <ProtectedRoute>
                <DashboardLayout />
            </ProtectedRoute>
        ,
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
