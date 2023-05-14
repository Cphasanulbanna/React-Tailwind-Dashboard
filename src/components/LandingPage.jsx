import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Menu from "./Menu";

function LandingPage() {
    return (
        <section className="flex  w-[100%] h-[100vh] justify-between">
            <Sidebar />
            <section className="right w-[100%]">
                <Header />
                <section className="middle flex justify-between mt-[25px]">
                    <div className="left-box flex flex-col">
                        <Menu />
                    </div>
                    <div className="right"></div>
                </section>
            </section>
        </section>
    );
}

export default LandingPage;
