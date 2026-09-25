import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import IntroVideo from "../components/IntroVideo";

function MainLayouts() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Intro Video */}
            <IntroVideo />

            {/* Header */}
            <Header />

            {/* Page Content */}
            <main className="flex-1 w-full">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default MainLayouts;
