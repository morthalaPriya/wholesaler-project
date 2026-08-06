import DotIcon from "../assets/Dot-Icon.png";
import ButtonIcon from "../assets/Button.png";
import Button2 from "../assets/Button-2.png";
import SearchIcon from "../assets/Searchicon.png";
import { NavLink } from "react-router-dom";
function Messages() {
    return (
        <div className="flex flex-col w-[1051.2px] h-fit bg-[#FFFFFF] pt-[32px] px-[32px] gap-[24px]">
            <div className="flex flex-col h-[68px] gap-[8px]">
                <div className="w-[831.2px] h-[36px]">
                    <h1 className="w-[246px] h-[36px] font-[Arial] font-normal text-[24px] leading-[36px] tracking-[0px] text-[#0A0A0A]">Communication Center</h1>
                </div>
                <div className="w-[831.2px] h-[36px]">
                    <p className="w-[332px] h-[24px] font-[Arial] font-[400] text-[16px] leading-[24px] text-[#717182]">
                        Chat with customers and manage your queries
                    </p>
                </div>
            </div>


            <div className="flex flex-col h-[835.6px] gap-[32px]">
                <div className="flex flex-row items-center w-[448px] h-[36px] rounded-[14px] bg-[#ECECF0] p-[3px]">
                    <div className="flex items-center justify-center w-[147.32px] h-[29px] rounded-[14px] border-[0.8px] border-[#E4E4E7] bg-[#FFFFFF] px-[8px] py-[4px]">
                        <p className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#0A0A0A]">Messages</p>
                    </div>
                    <NavLink
                        to="/messages/templates"
                        className="w-[222px] h-[29px] flex items-center justify-center">
                        <p className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#0A0A0A]">Templates</p>
                    </NavLink>
                    <NavLink
                        to="/messages/notifications"
                        className="w-[147.32px] h-[29px] flex items-center justify-center">
                        <p className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#0A0A0A]">Notifications</p>
                    </NavLink>
                </div>


                <div className="flex flex-row w-[831.2px] h-[743.6px] gap-[16px]">
                    <div className="w-[261.06px] h-fit rounded-[14px] border-[0.8px] border-black/10 bg-white">
                        <div className="flex flex-col w-[211.46px] h-[64px] mt-[24.8px] ml-[24.8px] gap-[12px]">
                            <h3 className="w-[103px] h-[16px] font-[Arial] font-normal text-[16px] leading-[16px] tracking-[0px] text-[#0A0A0A]">Conversations</h3>
                            <div className="flex items-center w-[211.46px] h-[36px] rounded-[8px] border-[0.8px] border-black/10 bg-[#F3F3F5] px-[12px] gap-[8px]">
                                <img src={SearchIcon} alt="Search" className="w-[16px] h-[16px] object-contain shrink-0" />
                                <input type="text" placeholder="Search conversations..." className="flex-1 bg-transparent outline-none font-[Arial] font-normal text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A] placeholder:text-[#717182]" />
                            </div>
                        </div>
                        <div className="flex flex-col w-[259.46px] h-[600px] gap-[12px]">
                            <div className="flex flex-col w-[259.46px] h-[80.8px] mt-[16px] border-b-[0.8px] border-black/10 bg-[#E9EBEF]">
                                <div className="flex items-center justify-between w-full h-full px-[16px] py-[12px]">
                                    <div className="flex items-center gap-[12px] flex-1 min-w-0">
                                        <div className="relative w-[40px] h-[40px] shrink-0">
                                            <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#ECECF0]">
                                                <span className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#0A0A0A]">A</span>
                                            </div>
                                            <div className="absolute bottom-[2px] right-[2px] w-[8px] h-[8px] rounded-full bg-[#22C55E] border-[1px] border-white"></div>
                                        </div>
                                        <div className="flex flex-col gap-[4px] flex-1 min-w-0">
                                            <h3 className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#0A0A0A]">ABC Retail Store</h3>
                                            <div className="flex items-center gap-[6px]">
                                                <p className="flex-1 truncate font-[Arial] font-normal text-[12px] leading-[16px] text-[#717182]">When will the order be shipped?</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="ml-[12px] shrink-0 font-[Arial] font-normal text-[12px] leading-[16px] text-[#717182]">1h</p>
                                </div>
                            </div>

                            <div className="flex flex-col w-[259.46px] h-[80.8px] border-b-[0.8px] border-black/10 bg-white">
                                <div className="flex flex-row items-center justify-between w-full h-[80px] px-[16px] py-[12px]">
                                    <div className="flex items-center gap-[12px]">
                                        <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#ECECF0]">
                                            <span className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#717182]">X</span>
                                        </div>
                                        <div className="flex flex-col gap-[4px]">
                                            <h3 className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#0A0A0A]">XYZ Market</h3>
                                            <p className="font-[Arial] font-normal text-[12px] leading-[16px] text-[#717182]">
                                                Thanks for the quick response!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col w-[259.46px] h-[80.8px] border-b-[0.8px] border-black/10 bg-white">
                                <div className="flex flex-row items-center justify-between w-full h-[80px] px-[16px] py-[12px]">
                                    <div className="flex items-center gap-[12px]">
                                        <div className="relative w-[40px] h-[40px] shrink-0">
                                            <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#ECECF0]">
                                                <span className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#0A0A0A]">Q</span>
                                            </div>
                                            <div className="absolute bottom-[2px] right-[2px] w-[8px] h-[8px] rounded-full bg-[#22C55E] border-[1px] border-white"></div>
                                        </div>
                                        <div className="flex flex-col gap-[4px]">
                                            <h3 className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#0A0A0A]">Quick Shop</h3>
                                            <div className="flex items-center gap-[6px]">
                                                <p className="font-[Arial] font-normal text-[12px] leading-[16px] text-[#717182]">
                                                    Do you have bulk discounts available?
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="font-[Arial] font-normal text-[12px] leading-[16px] text-[#717182]">2d</p>
                                </div>
                            </div>

                            <div className="flex flex-col w-[259.46px] h-[80.8px] border-b-[0.8px] border-black/10 bg-white">
                                <div className="flex flex-row items-center justify-between w-full h-[80px] px-[16px] py-[12px]">
                                    <div className="flex items-center gap-[12px]">
                                        <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#ECECF0]">
                                            <span className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#717182]">G</span>
                                        </div>
                                        <div className="flex flex-col gap-[4px]">
                                            <h3 className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#0A0A0A]">Global traders</h3>
                                            <p className="font-[Arial] font-normal text-[12px] leading-[16px] text-[#717182]">
                                                Products catalog looks great
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col w-[546.14px] h-[743.6px] rounded-[14px] border-[0.8px] border-black/10 bg-[#FFFFFF] gap-[24px]">
                        <div className="w-[544.54px] h-[106.8px] border-b-[0.8px] border-black/10">
                            <div className="flex flex-row justify-between w-[496.54px] h-[52px] mt-[24px] ml-[24px]">
                                <div className="flex flex-row items-center w-[184.14px] h-[52px] gap-[12px]">
                                    <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#ECECF0]">
                                        <span className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#0A0A0A]">A</span>
                                    </div>
                                    <div className="flex flex-col w-[132.14px] h-[52px]">
                                        <h3 className="w-[137px] h-[28px] font-[Arial] font-normal text-[18px] leading-[28px] tracking-[0px] text-[#0A0A0A]">ABC Retail Store</h3>
                                        <p className="w-[47px] h-[24px] font-[Arial] font-normal text-[16px] leading-[24px] tracking-[0px] text-[#717182]">Online</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center w-[36px] h-[36px] rounded-[8px]">
                                    <img src={DotIcon} alt="More" className="w-[16px] h-[16px]" />
                                </div>
                            </div>
                        </div>

                        <div className="w-[544.54px] h-[572.8px] flex flex-col">
                            <div className="flex flex-col w-[512.54px] mt-[16px] ml-[16px] gap-[16px]">
                                <div className="w-fit">
                                    <div className="flex flex-col w-fill rounded-[10px] bg-[#ECEEF2] px-[12px] py-[12px] gap-[4px]">
                                        <p className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#0A0A0A]">
                                            Hi! I have a question about your product catalog.
                                        </p>
                                        <p className="font-[Arial] font-normal text-[12px] leading-[16px] text-[#717182]">10:15 AM</p>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <div className="flex flex-col w-[358.77px] rounded-[10px] bg-[#030213] px-[12px] py-[12px] gap-[4px]">
                                        <p className="font-[Arial] font-normal text-[14px] leading-[20px] text-white">
                                            Hello! I'd be happy to help. What would you like to know?
                                        </p>
                                        <p className="font-[Arial] font-normal text-[12px] leading-[16px] text-white/70">10:16 AM</p>
                                    </div>
                                </div>
                                <div className="w-fit">
                                    <div className="flex flex-col w-fill rounded-[10px] bg-[#ECEEF2] px-[12px] py-[12px] gap-[4px]">
                                        <p className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#0A0A0A]">
                                            When will the order #12345 be shipped?
                                        </p>
                                        <p className="font-[Arial] font-normal text-[12px] leading-[16px] text-[#717182]">10:30 AM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-[68.8px] border-t-[0.8px] border-black/10 px-[16px] pt-[16.8px]">
                            <div className="flex flex-row items-center w-full h-[36px] gap-[8px]">
                                <button className="flex items-center justify-center w-[36px] h-[36px] rounded-[8px] border-[0.8px] border-black/10 bg-[#FFFFFF] shrink-0">
                                    <img src={ButtonIcon} alt="Attachment" className="w-[16px] h-[16px]" />
                                </button>
                                <input type="text" placeholder="Type your message..." className="flex-1 h-[36px] rounded-[8px] bg-[#F3F3F5] px-[12px] pt-[4px] pb-[4px] font-[Arial] font-normal text-[14px] leading-[100%] tracking-[0px] text-[#0A0A0A] placeholder:text-[#717182] focus:outline-none" />
                                <button className="w-[40px] h-[36px] rounded-[8px] bg-[#030213] flex items-center justify-center">
                                    <img src={Button2} alt="Send" className="w-[16px] h-[16px]" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Messages;