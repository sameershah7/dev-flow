import { useState } from "react";
import { InputField } from "../../../shared/components/ui/InputField";
import { Button } from "../../../shared/components/ui/Button";
import { useAuthStore } from "../../../store/useAuthStore";

export function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });
    const { login } = useAuthStore();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(formData)
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <InputField
                label="Email"
                placeholder="Email or username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />

            <InputField
                label="Password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />

            <Button type="submit" variant="primary" className="w-full py-4">
                Login
            </Button>
        </form>
    );
}
