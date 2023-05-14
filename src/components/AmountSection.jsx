import React from "react";

function AmountSection() {
    return (
        <div className="amount flex flex-col gap-[10px]">
            <div className="flex items-center justify-between items">
                <span className="font-[500] text-black text-[14px]">items</span>
                <span className="font-[500] text-green text-[14px] ">$ 102.10</span>
            </div>
            <div className="flex items-center justify-between items">
                <span className="font-[500] text-black text-[14px]">Discount</span>
                <span className="font-[500] text-red text-[14px] ">-$ 3.10</span>
            </div>
            <hr className="h-[1px] w-[100%] bg-black my-[4px]" />
            <div className="flex items-center justify-between total">
                <span className="font-[500] text-black text-[14px]">Total</span>
                <span className="font-[500] text-green text-[14px] ">-$ 99.0</span>
            </div>
        </div>
    );
}

export default AmountSection;
