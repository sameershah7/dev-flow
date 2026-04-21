import { DashboardPage } from "../features/dashboard/DashboardPage";
import {createBrowserRouter} from "react-router-dom"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardPage />
    },

]);
