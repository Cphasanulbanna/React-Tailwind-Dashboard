import React from "react";

//components
import Cart from "./Cart";
import PaymentCard from "./PaymentCard";
import AmountSection from "./AmountSection";

function Billing() {
    return (
        <div className="flex flex-col justify-between h-[100%] p-[15px] rounded-[12px] overflow-hidden bg-grey">
            <div className="flex flex-col">
                <div className="flex items-center justify-between top mb-[15px]">
                    <h1 className="font-[500] text-black text-[20px]">Bills</h1>
                    <h1 className="font-[500] text-black text-[20px]">Order #1212</h1>
                </div>
                <div className="flex items-center type gap-[15px] mb-[15px]">
                    <span className="tag">Dine in</span>
                    <span className="tag">Take Away</span>
                    <span className="tag">Delivery</span>
                </div>
                <Cart />

                <AmountSection />
            </div>

            <PaymentCard />
        </div>
    );
}

export default Billing;
