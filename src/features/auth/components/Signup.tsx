import { useState } from "react";
import { InputField } from "../../../shared/components/ui/InputField";
import { Button } from "../../../shared/components/ui/Button";
import { useAuthStore } from "../../../store/useAuthStore";

export function Signup() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const { signup } = useAuthStore();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            return alert("passwrod don't match")
        }
        signup({
            username: formData.username,
            email: formData.email,
            password: formData.password
        })
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <InputField
                label="Username"
                placeholder="Choose a username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />

            <InputField
                label="Email"
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />

            <InputField
                label="Password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />

            <InputField
                label="Confirm Password"
                type="password"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            />

            <Button type="submit" variant="primary" className="w-full py-4">
                Sign Up
            </Button>
        </form>
    );
}
