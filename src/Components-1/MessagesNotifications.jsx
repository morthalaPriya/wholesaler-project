import { NavLink } from "react-router-dom";
import MessagesIcon1 from "../assets/messagesicon-1.png";
import MessagesIcon2 from "../assets/messagesicon-2.png";
import MessagesIcon3 from "../assets/messagesicon-3.png";
import MessagesIcon4 from "../assets/messagesicon-4.png";
function MessagesNotifications() {
    return (
        <div className="flex flex-col w-[1166px] h-[730px] bg-[#FFFFFF] pt-[32px] px-[32px] gap-[24px]">
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

            <div className="flex flex-col h-[546px] gap-[32px]">
                <div className="flex flex-row items-center w-[448px] h-[36px] rounded-[14px] bg-[#ECECF0] p-[3px]">
                    <NavLink
                        to="/messages"
                        className="w-[222px] h-[29px] flex items-center justify-center">
                        <p className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#0A0A0A]">Messages</p>
                    </NavLink>
                    <NavLink
                        to="/messages/templates"
                        className="w-[147.32px] h-[29px] flex items-center justify-center">
                        <p className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#0A0A0A]">Templates</p>
                    </NavLink>
                    <div className="flex items-center justify-center w-[147.32px] h-[29px] rounded-[14px] border-[0.8px] border-[#E4E4E7] bg-[#FFFFFF] px-[8px] py-[4px]">
                        <p className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#0A0A0A]">Notifications</p>
                    </div>
                </div>

                <div className="flex flex-col w-[846.4px] h-[478px] rounded-[14px] border-[0.8px] border-black/10 bg-[#FFFFFF]">
                    <div className="w-[844.8px] h-[70px]  pt-[24px] pl-[24px]">
                        <div className="w-[796.8px] h-[16px]">
                            <h2 className="font-[Arial] font-[400] text-[16px] leading-[16px] text-[#0A0A0A]">
                                Notification Preference
                            </h2>
                        </div>
                        <div className="w-[796.6px] h-[24px] mt-[10px]">
                            <p className="font-[Arial] font-[400] text-[16px] leading-[24px] text-[#717182]">
                                Manage how and when you receive notifications
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col w-[796.8px] h-[358.4px] mt-[24.8px] ml-[24.8px] gap-[12px]">
                        <div className="flex flex-row items-center justify-between w-[796.8px] h-[77.6px] rounded-[10px] border-[0.8px] border-black/10 bg-[#FFFFFF] px-[16px]">
                            <div className="flex flex-row items-center w-[309.11px] h-[44px] gap-[12px]">
                                <div className="flex items-center justify-center w-[20px] h-[20px]">
                                    <img src={MessagesIcon1} className="w-[16.67px] h-[15.83px]" />
                                </div>
                                <div className="flex flex-col w-[277.11px] h-[44px]">
                                    <div className="w-[277.11px] h-[24px]">
                                        <p className="font-[Arial] font-[400] text[16px] leading-[24px] text-[#0A0A0A]">New Messages</p>
                                    </div>
                                    <div className="w-[282px] h-[20px]">
                                        <p className="font-[Arial] fonr-[400] text-[14px] leading-[20px] text-[#717182]">
                                            Get notified when you receive new messages
                                        </p>

                                    </div>
                                </div>

                            </div>
                            <button className="flex items-center w-[32px] h-[18.4px] rounded-full border-[0.8px] border-black/0 bg-[#030213] pl-[14px]">
                                <span className="w-[16px] h-[16px] rounded-full bg-[#FFFFFF]"></span>
                            </button>
                        </div>

                        <div className="flex flex-row items-center justify-between w-[796.8px] h-[77.6px] rounded-[10px] border-[0.8px] border-black/10 bg-[#FFFFFF] px-[16px]">
                            <div className="flex flex-row items-center w-[309.11px] h-[44px] gap-[12px]">
                                <div className="flex items-center justify-center w-[20px] h-[20px]">
                                    <img src={MessagesIcon2} className="w-[16.67px] h-[15.83px]" />
                                </div>
                                <div className="flex flex-col w-[277.11px] h-[44px]">
                                    <div className="w-[277.11px] h-[24px]">
                                        <p className="font-[Arial] font-[400] text[16px] leading-[24px] text-[#0A0A0A]">New Orders</p>
                                    </div>
                                    <div className="w-[282px] h-[20px]">
                                        <p className="font-[Arial] fonr-[400] text-[14px] leading-[20px] text-[#717182]">
                                            Receive alerts for new customer orders
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <button className="flex items-center w-[32px] h-[18.4px] rounded-full border-[0.8px] border-black/0 bg-[#030213] pl-[14px]">
                                <span className="w-[16px] h-[16px] rounded-full bg-[#FFFFFF]"></span>
                            </button>
                        </div>

                        <div className="flex flex-row items-center justify-between w-[796.8px] h-[77.6px] rounded-[10px] border-[0.8px] border-black/10 bg-[#FFFFFF] px-[16px]">
                            <div className="flex flex-row items-center w-[309.11px] h-[44px] gap-[12px]">
                                <div className="flex items-center justify-center w-[20px] h-[20px]">
                                    <img src={MessagesIcon3} className="w-[16.67px] h-[15.83px]" />
                                </div>
                                <div className="flex flex-col w-[277.11px] h-[44px]">
                                    <div className="w-[277.11px] h-[24px]">
                                        <p className="font-[Arial] font-[400] text[16px] leading-[24px] text-[#0A0A0A]">Price Updates</p>
                                    </div>
                                    <div className="w-[282px] h-[20px]">
                                        <p className="font-[Arial] fonr-[400] text-[14px] leading-[20px] text-[#717182]">
                                            Notifications about price changes
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button className="flex items-center w-[32px] h-[18.4px] rounded-full border-[0.8px] border-black/0 bg-[#CBCED4] pl-[1.2px]">
                                <span className="w-[16px] h-[16px] rounded-full bg-[#FFFFFF]"></span>
                            </button>
                        </div>

                        <div className="flex flex-row items-center justify-between w-[796.8px] h-[77.6px] rounded-[10px] border-[0.8px] border-black/10 bg-[#FFFFFF] px-[16px]">
                            <div className="flex flex-row items-center w-[309.11px] h-[44px] gap-[12px]">
                                <div className="flex items-center justify-center w-[20px] h-[20px]">
                                    <img src={MessagesIcon4} className="w-[16.67px] h-[15.83px]" />
                                </div>
                                <div className="flex flex-col w-[277.11px] h-[44px]">
                                    <div className="w-[277.11px] h-[24px]">
                                        <p className="font-[Arial] font-[400] text[16px] leading-[24px] text-[#0A0A0A]">System Alerts</p>
                                    </div>
                                    <div className="w-[282px] h-[20px]">
                                        <p className="font-[Arial] fonr-[400] text-[14px] leading-[20px] text-[#717182]">
                                            Important system and security notifications
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button className="flex items-center w-[32px] h-[18.4px] rounded-full border-[0.8px] border-black/0 bg-[#030213] pl-[14px]">
                                <span className="w-[16px] h-[16px] rounded-full bg-[#FFFFFF]"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MessagesNotifications;