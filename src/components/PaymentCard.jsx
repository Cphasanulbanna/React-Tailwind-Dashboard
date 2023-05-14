import React from "react";

function PaymentCard() {
    return (
        <div className="flex flex-col gap-[20px]">
            <h1 className="font-[500] text-black text-[16px]">Payement</h1>
            <div className="methods flex gap-[12px] items-center">
                <span className="tag">Cash</span>
                <span className="tag">Debit</span>
                <span className="tag px-[25px]">E-wallet</span>
            </div>
            <button className="text-white tag bg-orange p-[15px] rounded-[25px]">checkout</button>
        </div>
    );
}

export default PaymentCard;
