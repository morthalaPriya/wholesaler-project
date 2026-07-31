import { LuPackage } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import Icon from "../assets/Icon.svg";
import Icon1 from "../assets/Icon-1.png";
import Icon2 from "../assets/Icon-2.png";
import Icon3 from "../assets/Icon-3.png";
import Icon4 from "../assets/Icon-4.png";
import Icon5 from "../assets/Icon-5.png";

function Sidebar() {
    return (
        <div className="w-[255.2px] h-[729.6px] bg-white border-r-[0.8px] border-black/50 flex flex-col">
            <div className="h-[64px] flex items-center pl-[16px] gap-[8px] border-b-[0.8px] border-black/10">
                <div className="w-[32px] h-[32px] rounded-[10px] bg-[#030213] flex items-center justify-center">
                    <LuPackage className="text-white w-[20px] h-[20px]" />
                </div>
                <h1 className="font-[Arial] font-bold text-[16px] leading-[24px] text-[#0A0A0A]">B2B Platform</h1>
            </div>
            <div className="flex-1 flex flex-col pt-[24px] px-[16px] gap-[8px]">
                <NavLink to="/" className={({isActive}) => `w-[223.2px] h-[48px] flex items-center pl-[16px] gap-[12px] rounded-[10px]
            ${isActive ? "bg-[#030213] text-white" : "bg-white text-[#717182]"}`}>
                    <img src={Icon} alt="Dashboard" className="w-[20px] h-[20px]" />
                    <p className="font-[Arial] text-[16px]">Dashboard</p>
                </NavLink>
                <NavLink to="/products" className={({isActive}) => `w-[223.2px] h-[48px] flex items-center pl-[16px] gap-[12px] rounded-[10px]
            ${isActive ? "bg-[#030213] text-white" : "bg-white text-[#717182]"}`}>
                    <img src={Icon1} alt="Products" className="w-[20px] h-[20px]" />
                    <p className="font-[Arial] text-[16px]">Products</p>
                </NavLink>
                <NavLink to="/orders" className={({isActive}) => `w-[223.2px] h-[48px] flex items-center justify-between px-[16px] rounded-[10px]
            ${isActive ? "bg-[#030213] text-white" : "bg-white text-[#717182]"}`}>
                    <div className="flex items-center gap-[12px]">
                        <img src={Icon2} alt="Orders" className="w-[20px] h-[20px]" />
                        <p className="font-[Arial] text-[16px]">Orders</p>
                    </div>
                    <span className="w-[24px] h-[22px] rounded-[8px] bg-[#D4183D] flex items-center justify-center text-white text-[12px]">3</span>
                </NavLink>
                <NavLink to="/shipping" className={({isActive}) => `w-[223.2px] h-[48px] flex items-center pl-[16px] gap-[12px] rounded-[10px]
            ${isActive ? "bg-[#030213] text-white" : "bg-white text-[#717182]"}`}>
                    <img src={Icon3} alt="Shipping" className="w-[20px] h-[20px]" />
                    <p className="font-[Arial] text-[16px]">Shipping</p>
                </NavLink>
                <NavLink to="/messages" className={({isActive}) => `w-[223.2px] h-[48px] flex items-center justify-between px-[16px] rounded-[10px]
            ${isActive ? "bg-[#030213] text-white" : "bg-white text-[#717182]"}`}>
                    <div className="flex items-center gap-[12px]">
                        <img src={Icon4} alt="Messages" className="w-[20px] h-[20px]" />
                        <p className="font-[Arial] text-[16px]">Messages</p>
                    </div>
                    <span className="w-[24px] h-[22px] rounded-[8px] bg-[#D4183D] flex items-center justify-center text-white text-[12px]">5</span>
                </NavLink>
                <NavLink to="/admin" className={({isActive}) => `w-[223.2px] h-[48px] flex items-center pl-[16px] gap-[12px] rounded-[10px]
            ${isActive ? "bg-[#030213] text-white" : "bg-white text-[#717182]"}`}>
                    <img src={Icon5} alt="Admin" className="w-[20px] h-[20px]"/>
                    <p className="font-[Arial] text-[16px]">Admin</p>
                </NavLink>
            </div>
            <div className="mt-auto border-t-[0.8px] border-black/10 p-[16px]">
                <div className="w-[223.2px] h-[56px] flex items-center gap-[12px] rounded-[10px]">
                    <div className="w-[40px] h-[40px] rounded-full bg-[#ECECF0] flex items-center justify-center">
                        <span className="font-[Arial] text-[14px] text-[#717182]">A</span>
                    </div>
                    <div>
                        <p className="font-[Arial] text-[14px] text-[#0A0A0A]">Company Name</p>
                        <p className="font-[Arial] text-[12px] text-[#717182]">abc@abc.in</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;