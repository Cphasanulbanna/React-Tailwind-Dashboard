import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

function LandingPage() {
    return (
        <section className="flex  w-[100%] h-[100vh] justify-between">
            <Sidebar />
            <section className="right w-[100%]">
                <Header />
            </section>
        </section>
    );
}

export default LandingPage;
