import { LuPackage, LuLayoutGrid } from "react-icons/lu";
import Icon from "../assets/Icon.svg";
import Icon1 from "../assets/Icon-1.png";
import Icon2 from "../assets/Icon-2.png";
import Icon3 from "../assets/Icon-3.png";
import Icon4 from "../assets/Icon-4.png";
import Icon5 from "../assets/Icon-5.png";



function Sidebar() {
    return (
        <div className="w-[255.2px] h-[729.6px]  bg-white border-r-[0.8px] border-black/50 flex flex-col">
            <div className="h-[64px] flex items-center pl-[16px] gap-[8px] border-b-[0.8px] border-black/10">
                <div className="w-[32px] h-[32px] rounded-[10px] bg-[#030213] flex items-center justify-center">
                    <LuPackage className="text-white w-[20px] h-[20px]" />
                </div>
                <div className="w-[102px] h-[24px]">
                    <h1 className="font-[Arial] font-bold text-[16px] leading-[24px] tracking-[0px] text-[#0A0A0A]">
                        B2B Platform
                    </h1>
                </div>
            </div>

            <div className="flex-1 flex flex-col pt-[24px] px-[16px] gap-[8px]">
                <div className="w-[223.2px] h-[48px] flex items-center pl-[16px] gap-[12px] rounded-[10px]">
                    <div>
                        <img src={Icon} alt="Dashboard" className="w-[20px] h-[20px]" />
                    </div>
                    <div className="w-[77.11px] h-[24px]">
                        <p className="w-[79px] h-[24px] font-[Arial] font-[400] text-[16px] leading-[24px] tracking-[0px] text-[#717182]">Dashboard</p>
                    </div>
                </div>

                <div className="w-[223.2px] h-[48px] flex items-center pl-[16px] gap-[12px] rounded-[10px]">
                    <div>
                        <img src={Icon1} alt="Products" className="w-[20px] h-[20px]" />
                    </div>
                    <div className="w-[61.99px] h-[24px]">
                        <p className="w-[64px] h-[24px] font-[Arial] font-[400] text-[16px] leading-[24px] tracking-[0px] text-[#717182]">Products</p>
                    </div>
                </div>

                <div className="w-[223.2px] h-[48px] flex items-center pl-[16px] gap-[12px] rounded-[10px]">
                    <img src={Icon2} alt="Orders" className="w-[20px] h-[20px]" />

                    <div className="flex items-center gap-[6px]">
                        <p className="w-[49px] h-[24px] font-[Arial] font-normal text-[16px] leading-[24px] tracking-[0px] text-[#717182]">
                            Orders
                        </p>

                        <span className="w-[24.26px] h-[21.59px] rounded-[8px] border-[0.8px] border-black/0 bg-[#D4183D] pt-[2px] pr-[8px] pb-[2px] pl-[8px] flex items-center justify-center">
                            <span className="w-[7px] h-[16px] font-[Arial] text-[12px] font-[400] leading-[16px] tracking-[0px] text-[#FFFFFF]">
                                3
                            </span>
                        </span>
                    </div>
                </div>

                <div className="w-[223.2px] h-[48px] flex items-center pl-[16px] gap-[12px] rounded-[10px] bg-[#030213]">
                    <div>
                        <img src={Icon3} alt="Shipping" className="w-[20px] h-[20px]" />
                    </div>
                    <div className="w-[62.6px] h-[24px]">
                        <p className="w-[63px] h-[24px] font-[Arial] font-[400] text-[16px] leading-[24px] tracking-[0px] text-[#FFFFFF]">Shipping</p>
                    </div>
                </div>

                <div className="w-[223.2px] h-[48px] flex items-center pl-[16px] gap-[12px] rounded-[10px]">
                    <div>
                        <img src={Icon4} alt="Messages" className="w-[20px] h-[20px]" />
                    </div>
                    <div className="flex items-center gap-[6px] w-[69.04px] h-[24px]">
                        <p className="w-[73px] h-[24px] font-[Arial] font-[400] text-[16px] leading-[24px] tracking-[0px] text-[#717182]">Messages</p>
                        <span className="w-[24.26px] h-[21.59px] rounded-[8px] border-[0.8px] border-black/0 bg-[#D4183D] pt-[2px] pr-[8px] pb-[2px] pl-[8px] flex items-center justify-center">
                            <span className="w-[7px] h-[16px] font-[Arial] text-[12px] font-[400] leading-[16px] tracking-[0px] text-[#FFFFFF]">
                                5
                            </span>
                        </span>
                    </div>
                </div>

                <div className="w-[223.2px] h-[48px] flex items-center pl-[16px] gap-[12px] rounded-[10px]">
                    <div>
                        <img src={Icon5} alt="Admin" className="w-[20px] h-[20px]" />
                    </div>
                    <div className="w-[46.46px] h-[24px]">
                        <p className="w-[46px] h-[24px] font-[Arial] font-[400] text-[16px] leading-[24px] tracking-[0px] text-[#717182]">Admin</p>
                    </div>
                </div>
            </div>

            {/* Company Section */}
            <div className="mt-auto border-t-[0.8px] border-black/10 pt-[16.8px] pr-[16px] pb-[16px] pl-[16px]">
                <div className="w-[223.2px] h-[56px] flex items-center gap-[12px] rounded-[10px]">

                    {/* Avatar */}
                    <div className="w-[40px] h-[40px] rounded-full bg-[#ECECF0] flex items-center justify-center">
                        <span className="w-[9px] h-[20px] font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#717182]">
                            A
                        </span>
                    </div>

                    {/* Company Details */}
                    <div className="w-[155.2px] h-[35.99px] flex flex-col">

                        <p className="w-[102px] h-[20px] font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A]">
                            Company Name
                        </p>

                        <p className="w-[155.2px] h-[16px] font-[Arial] font-[400] text-[12px] leading-[16px] tracking-[0px] text-[#717182]">
                            abc@abc.in
                        </p>

                    </div>

                </div>
            </div>




        </div>

    );
}

export default Sidebar;