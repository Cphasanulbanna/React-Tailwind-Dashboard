import React from "react";

function Cart() {
    const cart = [
        {
            id: 1,
            name: "Peru Beans",
            price: "$60",
            image: "../../public/assets/images/product1.png",
        },
        {
            id: 2,
            name: "indonasian Beans",
            price: "$100",
            image: "../../public/assets/images/product2.png",
        },
        {
            id: 3,
            name: "china Beans",
            price: "$50",
            image: "../../public/assets/images/product3.png",
        },
    ];
    return (
        <div className="flex flex-col gap-[30px] max-h-[230px] overflow-y-scroll">
            {cart?.map((item) => (
                <div
                    key={item?.id}
                    className="flex items-center divide-y product divide-grey"
                >
                    <div className="image w-[70px] h-[70px] rounded-[10px] mr-[12px] overflow-hidden">
                        <img
                            src={item?.image}
                            alt="product"
                        />
                    </div>
                    <div className="flex justify-between gap-[15px]">
                        <div className="right flex flex-col gap-[10px]">
                            <h2 className="text-black text-[16px] font-[500]">{item?.name}</h2>
                            <span className="text-[14px] text-black">Beans = 75% + 250g</span>
                            <span className="text-black text-[16px] font-[500]">{item?.price}</span>
                        </div>
                        <div className="flex gap-[10px] items-center">
                            <span className="font-[700] flex items-center justify-center w-[25px] h-[25px]  text-black p-[5px] cursor-pointer  rounded-[50%] overflow-hidden border-black border-solid border-[2px]">
                                -
                            </span>
                            <span className="font-[600]">1</span>
                            <span className="font-[700] flex items-center justify-center  w-[25px] h-[25px]  text-black p-[5px] cursor-pointer  rounded-[50%] overflow-hidden border-black border-solid border-[2px]">
                                +
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Cart;
