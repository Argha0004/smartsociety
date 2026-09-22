import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayouts";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Rules from "../pages/Rule";
import Jury from "../pages/Jury";
import ContactUs from "../pages/ContactUs";

// Auth Pages
import Register from "../pages/auth/Register";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";


function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>

                <Route element={<MainLayout />}>

                    {/* Home */}
                    <Route
                        path="/"
                        element={<Home />}
                    />

                    {/* About */}
                    <Route
                        path="/about"
                        element={<About />}
                    />

                    {/* Rules */}
                    <Route
                        path="/rules"
                        element={<Rules />}
                    />

                    {/* Jury */}
                    <Route
                        path="/jury"
                        element={<Jury />}
                    />

                    {/* Contact-Us */}
                    <Route
                        path="/contact-us"
                        element={<ContactUs />}
                    />

                    
                    {/* Auth */}

                    {/* Register */}
                    <Route
                        path="/register"
                        element={<Register />}
                    />
                    
                    {/* Sign In */}
                    <Route
                        path="/sign-in"
                        element={<SignIn />}
                    />

                    {/* Sign Up */}
                    <Route
                        path="/sign-up"
                        element={<SignUp />}
                    />
                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoute; 
