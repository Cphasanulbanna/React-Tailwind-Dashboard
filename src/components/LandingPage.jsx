import React from "react";

//components
import Sidebar from "./Sidebar";
import Header from "./Header";
import MenuOptions from "./MenuOptions";
import Menu from "./Menu";
import Billing from "./Billing";

function LandingPage() {
    return (
        <section className="flex  w-[100%] h-[100vh] justify-between">
            <Sidebar />
            <section className="right w-[100%]">
                <Header />
                <section className="middle flex gap-[20px] mt-[25px] mr-[30px] ">
                    <div className="flex flex-col left-box w-[70%] sm2:w-[48%] sm3:w-[43%] sm1:w-[53%]  1180:w-[58%] base:w-[45%]">
                        <MenuOptions />
                        <Menu />
                    </div>
                    <div className="right w-[28%] pb-[40px] sm2:w-[50%] sm3:w-[55%] sm1:w-[45%] 1180:w-[38%] base:w-[52%]">
                        <Billing />
                    </div>
                </section>
            </section>
        </section>
    );
}

export default LandingPage;
