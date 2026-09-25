import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

import { InputField, Button } from "../../components/FormComponent";
import FestivalBadge from "../../components/FestivalBadge";

function GoogleIcon({ className }) {
    return (
        <svg viewBox="0 0 24 24" className={className}>
            <path
                fill="#4285F4"
                d="M23.52 12.27c0-.85-.08-1.66-.22-2.45H12v4.63h6.47c-.28 1.5-1.13 2.77-2.4 3.62v3h3.88c2.27-2.09 3.57-5.17 3.57-8.8z"
            />
            <path
                fill="#34A853"
                d="M12 24c3.24 0 5.96-1.07 7.95-2.92l-3.88-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.26v3.1C3.24 21.3 7.28 24 12 24z"
            />
            <path
                fill="#FBBC05"
                d="M5.27 14.27a7.2 7.2 0 010-4.54v-3.1H1.26a12 12 0 000 10.74l4.01-3.1z"
            />
            <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.44-3.44C17.95 1.19 15.24 0 12 0 7.28 0 3.24 2.7 1.26 6.63l4.01 3.1c.95-2.85 3.6-4.98 6.73-4.98z"
            />
        </svg>
    );
}

function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: wire up auth submission
    };

    return (
        <main className="overflow-hidden bg-brand-gradient py-16">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-md">
                    <div
                        className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-[rgba(237,217,181,0.18)]
              bg-white/3
              p-8
              backdrop-blur-[18px]
              shadow-[0_24px_80px_rgba(0,0,0,0.55)]
            "
                    >
                        {/* Badge */}
                        <div className="flex justify-center">
                            <FestivalBadge>CFCCF 2027</FestivalBadge>
                        </div>

                        {/* Heading */}
                        <h1 className="cinzel text-center text-3xl font-bold uppercase leading-tight tracking-wide text-accent-light">
                            Create Account
                        </h1>

                        <p className="mt-2 text-center text-sm text-white/50">
                            Join the CFCC Festival community
                        </p>

                        {/* Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="mt-8 flex flex-col gap-5"
                        >
                            {/* Email */}
                            <div className="relative">
                                <InputField
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    required
                                    inputClassName="w-full py-3 pl-10 pr-4 text-sm"
                                />
                                <Mail
                                    className="pointer-events-none absolute left-3 top-9.5 h-4 w-4 text-accent-light/50"
                                    strokeWidth={1.8}
                                />
                            </div>

                            {/* Password */}
                            <div className="relative">
                                <InputField
                                    label="Password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter password"
                                    required
                                    inputClassName="w-full py-3 pl-10 pr-10 text-sm"
                                />
                                <Lock
                                    className="pointer-events-none absolute left-3 top-9.5 h-4 w-4 text-accent-light/50"
                                    strokeWidth={1.8}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="absolute right-3 top-9 text-accent-light/50 transition-colors hover:text-accent-light"
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-4 w-4" strokeWidth={1.8} />
                                    ) : (
                                        <Eye className="h-4 w-4" strokeWidth={1.8} />
                                    )}
                                </button>
                            </div>

                            {/* Submit */}
                            <Button
                                type="submit"
                                className="
                  mt-2
                  w-full
                  rounded-lg
                  border-0!
                  bg-primary-light
                  py-3
                  text-sm
                  font-semibold
                  uppercase
                  tracking-wide
                  text-accent-light
                  transition-all
                  duration-300
                  hover:bg-rose-dark
                "
                            >
                                Create Account
                            </Button>
                        </form>

                        {/* Divider */}
                        <div className="my-6 flex items-center gap-3">
                            <div className="h-px flex-1 bg-accent-light/15" />
                            <span className="text-[10px] uppercase tracking-widest text-white/40">
                                Or continue with
                            </span>
                            <div className="h-px flex-1 bg-accent-light/15" />
                        </div>

                        {/* Google */}
                        <Button
                            type="button"
                            className="
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-lg
                bg-transparent
                py-3
                text-sm
                font-semibold
                text-accent-light
                transition-all
                duration-300
                hover:bg-accent-light/10
              "
                        >
                            <GoogleIcon className="h-4 w-4" />
                            Continue with Google
                        </Button>

                        {/* Sign in link */}
                        <p className="mt-6 text-center text-sm text-white/50">
                            Already have an account?{" "}
                            <Link
                                to="/sign-in"
                                className="font-semibold text-accent-light transition-colors hover:text-cream-light"
                            >
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default SignUp;