import React from "react";

//images
import homeGrey from "../../public/assets/images/home-grey.svg";
import scheduleGrey from "../../public/assets/images/shedule-grey.svg";
import settingsGrey from "../../public/assets/images/settings-grey.svg";
import logoutGrey from "../../public/assets/images/logout-grey.svg";
import propertyCollectGrey from "../../public/assets/images/preoperty-collect-grey.svg";
import propertyGrey from "../../public/assets/images/property-grey.svg";

function Sidebar() {
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
                    <li className="icon">
                        <img
                            src={homeGrey}
                            alt="icon"
                        />
                    </li>
                    <li className="icon">
                        <img
                            src={scheduleGrey}
                            alt="icon"
                        />
                    </li>
                    <li className="icon">
                        <img
                            src={propertyCollectGrey}
                            alt="icon"
                        />
                    </li>
                    <li className="icon">
                        <img
                            src={propertyGrey}
                            alt="icon"
                        />
                    </li>
                    <li className="icon">
                        <img
                            src={settingsGrey}
                            alt="icon"
                        />
                    </li>
                </ul>
                <div className="pl-[20px] pb-[45px]">
                    <div className="w-[30px] h-[30px] cursor-pointer ">
                        <img
                            src={logoutGrey}
                            alt="logout"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
