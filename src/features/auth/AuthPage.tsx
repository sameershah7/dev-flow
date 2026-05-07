import { useState } from "react";
import { InputField } from "../../shared/components/ui/InputField";
import googleImg from "../../../public/google-img.png"
import { Button } from "../../shared/components/ui/Button";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";


export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-50 p-4">
            <div className="w-full max-w-md p-8 bg-bg border border-border rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold text-center mb-6">
                    {isLogin ? "Login" : "Create Account"}
                </h2>

                <Button variant="ghost" className="flex itmes-center justify-center gap-x-4  w-full my-6">
                    <img src={googleImg} alt="Google" className="w-5 h-5" />
                    Continue with Google
                </Button>

                <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-border"></span></div>
                    <div className="relative flex justify-center text-xs uppercase"><span className="bg-bg px-3 text-text-main">Or use email</span></div>
                </div>

                {isLogin ? <Login /> : <Signup />}

                <p className="mt-6 text-center text-sm text-text-main">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    <Button
                        variant="ghost"
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? "Sign up" : "Log in"}
                    </Button>
                </p>
            </div>
        </div>
    );
}
