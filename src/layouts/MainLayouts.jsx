import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainContainer from "../constant/MainContainer";

function MainLayouts() {
    return (
        <div className="min-h-screen flex flex-col">

            {/* Header */}
            <Header />

            {/* Page Content */}
            <main className="flex-1">
                <MainContainer>
                    <Outlet />
                </MainContainer>
            </main>

            {/* Footer */}
            <Footer />


        </div>
    );
}

export default MainLayouts; 
