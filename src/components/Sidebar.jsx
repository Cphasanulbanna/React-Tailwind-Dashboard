import React, { useState } from "react";

//images
import logoutGrey from "../../public/assets/images/logout-grey.svg";
import logoutOrange from "../../public/assets/images/logout-orange.svg";

function Sidebar() {
    //states
    const [id, setId] = useState("1");

    const options = [
        {
            id: 1,
            image: "../../public/assets/images/home-grey.svg",
            orangeImage: "../../public/assets/images/home-orange.svg",
        },
        {
            id: 2,
            image: "../../public/assets/images/shedule-grey.svg",
            orangeImage: "../../public/assets/images/shedule-orange.svg",
        },
        {
            id: 3,
            image: "../../public/assets/images/settings-grey.svg",
            orangeImage: "../../public/assets/images/settings-orange.svg",
        },
        {
            id: 4,
            image: "../../public/assets/images/preoperty-collect-grey.svg",
            orangeImage: "../../public/assets/images/property-collect-orange.svg",
        },
        {
            id: 5,
            image: "../../public/assets/images/property-grey.svg",
            orangeImage: "../../public/assets/images/property-analysis-orange.svg",
        },
    ];

    return (
        <>
            <div className="flex flex-col justify-between px-[30px] py-[20px] h-[100vh] ">
                <div className="w-[70px]  cursor-pointer mb-[35px]">
                    <img
                        src="/assets/images/logo.png"
                        alt="logo"
                    />
                </div>
                <ul className="pl-[20px]">
                    {options?.map((option) => (
                        <li
                            key={option?.id}
                            className="icon"
                            onMouseEnter={() => setId(option?.id)}
                            onMouseLeave={() => setId(null)}
                        >
                            <img
                                className="transition"
                                src={id === option?.id ? option?.orangeImage : option?.image}
                                alt="icon"
                            />
                        </li>
                    ))}
                </ul>
                <div className="pl-[20px] pb-[45px]">
                    <div
                        className="w-[30px] h-[30px] cursor-pointer"
                        onMouseEnter={() => setId("6")}
                        onMouseLeave={() => setId(null)}
                    >
                        <img
                            className="transition"
                            src={id === "6" ? logoutOrange : logoutGrey}
                            alt="logout"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
