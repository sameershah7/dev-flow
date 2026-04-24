import { createBrowserRouter } from "react-router-dom"
import { DashboardLayout } from "../shared/components/layout/DashboardLayout";
import DashboardPage from "../features/dashboard/DashboardPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <DashboardPage />
            },
        ],
    },
]);
