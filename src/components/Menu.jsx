import React from "react";

function Menu() {
    const products = [
        {
            id: 1,
            name: "Indonasian Beans",
            description: "lorem ipsum doler sit amet ipsum doler consecutive amet di escop",
            price: "$10",
            type: ["25%", "50%", "75%", "100%"],
            quantity: [250, 500, 750],
            image: "./assets/images/product1.png",
        },
        {
            id: 2,
            name: "Costarica Beans",
            description: "lorem ipsum doler sit amet ipsum doler consecutive amet di escop",
            price: "$10",
            type: ["25%", "50%", "75%", "100%"],
            quantity: [250, 500, 750],
            image: "./assets/images/product2.png",
        },
        {
            id: 3,
            name: "Chineese Beans",
            description: "lorem ipsum doler sit amet ipsum doler consecutive amet di escop",
            price: "$10",
            type: ["25%", "50%", "75%", "100%"],
            quantity: [250, 500, 750],
            image: "./assets/images/product3.png",
        },
        {
            id: 4,
            name: "Ethiopian Beans",
            description: "lorem ipsum doler sit amet ipsum doler consecutive amet di escop",
            price: "$10",
            type: ["25%", "50%", "75%", "100%"],
            quantity: [250, 500, 750],
            image: "./assets/images/product4.png",
        },
        {
            id: 5,
            name: "Egyptian Beans",
            description: "lorem ipsum doler sit amet ipsum doler consecutive amet di escop",
            price: "$10",
            type: ["25%", "50%", "75%", "100%"],
            quantity: [250, 500, 750],
            image: "./assets/images/product1.png",
        },
        {
            id: 6,
            name: "Peru Beans",
            description: "lorem ipsum doler sit amet ipsum doler consecutive amet di escop",
            price: "$10",
            type: ["25%", "50%", "75%", "100%"],
            quantity: [250, 500, 750],
            image: "./assets/images/product2.png",
        },
    ];
    return (
        <div className="mt-[25px] pb-[40px]">
            <h1 className="title text-[24px] font-[700] text-black mb-[20px]">Beans Menu</h1>
            <div className="grid grid-cols-2 menu-box gap-[25px] overflow-y-auto max-h-[460px]">
                {products?.map((product) => (
                    <div
                        key={product?.id}
                        className="flex flex-col product bg-ash p-[20px] rounded-[20px] overflow-hidden"
                    >
                        <div className="flex justify-between top">
                            <div className="image w-[150px] rounded-[12px] mr-[12px] overflow-hidden">
                                <img
                                    src={product?.image}
                                    alt="product"
                                />
                            </div>
                            <div className="flex flex-col right gap-[8px]">
                                <h2 className="title font-[500] text-black text-[20px]">
                                    {product?.name}
                                </h2>
                                <p className="text-gray text-[14px]">{product?.description}</p>
                                <h3 className="text-black text-[18px] font-[500]">
                                    {product?.price}
                                </h3>
                            </div>
                        </div>
                        <button className="mt-[15px] text-[16px]">View Deatails</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;
