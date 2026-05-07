import { Navigate } from "react-router-dom";
import { type ReactNode } from "react";
import { useAuthStore } from "../../store/useAuthStore";

export function PublicRoute({ children }: { children: ReactNode }) {
    const user = useAuthStore((state) => state.user);

    if (user) {
        return <Navigate to="/" replace />;
    }
    return <>{children}</>;
}
