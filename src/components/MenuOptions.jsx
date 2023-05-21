import React from "react";

function MenuOptions() {
    const menu = [
        { id: 1, name: "Coffee", image: "./assets/images/icon.png" },
        { id: 2, name: "Tea", image: "./assets/images/icon.png" },
        { id: 3, name: "Beans", image: "./assets/images/beans.png" },
        { id: 4, name: "Juices", image: "./assets/images/juices.png" },
        { id: 5, name: "Snacks", image: "./assets/images/snacks.png" },
    ];
    return (
        <div>
            <ul className="flex items-center gap-[20px] 1080:overflow-x-scroll">
                {menu?.map((item) => (
                    <li
                        key={item?.id}
                        className="1080:min-w-[150px] menu-item flex items-center cursor-pointer bg-ash py-[10px] px-[14px] rounded-[25px] overflow-hidden hover:bg-orange transition"
                    >
                        <div className="menu-icon w-[30px] h-[30px] flex items-center bg-grey p-[7px] rounded-[50%] overflow-hidden">
                            <img
                                src={item?.image}
                                alt="menu"
                            />
                        </div>
                        <span className="menu text-gray ml-[5px] text-[14px] font-[500]">
                            {item?.name}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MenuOptions;
