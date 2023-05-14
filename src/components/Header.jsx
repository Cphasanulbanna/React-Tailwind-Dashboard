import React from "react";

function Header() {
    return (
        <header className="py-[20px] flex items-center justify-between border-b-[2px] border-grey border-solid">
            <div className="flex items-center w-[25%]">
                <div className="flex flex-col">
                    <span className="text-[14px]">Welcome to dashboard</span>
                    <h1 className="text-black font-[700] text-[22px]">Let's choose menu</h1>
                </div>
            </div>
            <div className="flex items-center rounded-[25px] relative bg-ash max-w-[380px] overflow-hidden w-[35%] ">
                <input
                    className="pl-[15px]"
                    type="text"
                    placeholder="Search menu"
                />
                <div className="w-[20px] absolute top-[50%] translate-y-[-50%] right-[15px] z-2">
                    <img
                        src="./assets/images/search.svg"
                        alt="search-icon"
                    />
                </div>
            </div>
            <div className="flex items-center justify-evenly w-[30%]">
                <div className="w-[20px] j-[20px] cursor-pointer">
                    <img
                        src="./assets/images/icon.png"
                        alt="bell"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <div className="w-[50px] h-[50px] rounded-[50%] overflow-hidden mr-[8px]">
                        <img
                            src="./assets/images/profile.png"
                            alt="profile-pic"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[12px] text-ash">Admin</span>
                        <h2 className="font-[500] text-black text-[14]">Alex Jorad</h2>
                    </div>
                    <div className="flex items-center justify-center bg-grey rounded-[25px] overflow-hidden cursor-pointer p-[12px] ml-[15px]">
                        <div className="w-[15px] h-[15px] mr-[10px]">
                            <img
                                src="./assets/images/add.png"
                                alt="add"
                            />
                        </div>
                        <span className="text-black text-[14px] font-[500]">Add new menu</span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
