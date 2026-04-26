import { createBrowserRouter } from "react-router-dom"
import { DashboardLayout } from "../shared/components/layout/DashboardLayout";

import DashboardPage from "../features/dashboard/DashboardPage";
import TaskPage from "../features/tasks/TaskPage";
import NotesPage from "../features/notes/NotesPage";

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
        ],
    },
]);
