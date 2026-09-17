import { BrowserRouter, Routes, Route } from "react-router-dom";


import MainLayout from "../layouts/MainLayouts";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Rules from "../pages/Rule";
import Jury from "../pages/Jury";
import ContactUs from "../pages/ContactUs";

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
                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoute; 
