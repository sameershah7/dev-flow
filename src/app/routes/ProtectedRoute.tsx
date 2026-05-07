import { Navigate, useLocation } from "react-router-dom";
import { type ReactNode } from "react";
import { useAuthStore } from "../../store/useAuthStore";

export function ProtectedRoute({ children }: { children: ReactNode }) {
    const user = useAuthStore((state) => state.user)
    const location = useLocation();

    if (!user) {
        return <Navigate to="/auth" state={{ from: location }} replace />;
    }

    return <>{children}</>;
}
