import { NavLink } from "react-router-dom";
import PickedUpIcon from "../assets/picked-up-icon.png";
import InTransmitIcon from "../assets/in-transmit-icon.png";
import DeliveredIcon from "../assets/delivered-icon.png";
import DeliveryIcon from "../assets/delivery-icon.png";
function ShippingLogistics() {
    return (
        <div className="flex-1 bg-[#FFFFFF] pt-[32px] px-[32px] flex flex-col gap-[24px]">
            <div className="w-full h-[68px] flex flex-col gap-[8px]">
                <div className="w-[831.2px] h-[36px]">
                    <h1 className="w-[217px] h-[36px] font-[Arial] font-[400] text-[24px] leading-[36px] tracking-[0px] text-[#0A0A0A]">Shipping & Logistics</h1>
                </div>
                <div classNmae="w-[831.2px] h-[36px]">
                    <p className="w-[459px] h-[24px] font-[Arial] font-[400] text-[16px] leading-[24px] tracking-[0px] text-[#717182]">
                        Manage shipping providers, track shipments, calculate cost
                    </p>
                </div>
            </div>


            <div className="flex flex-col h-[1344.75px] flex-1 pb-[24px] gap-[32px]">
                <div className="w-[672px] h-[36px] rounded-[14px] bg-[#ECECF0] flex items-center p-[4px]">
                    <div className="w-[222px] h-[29px] rounded-[14px] bg-[#FFFFFF] flex items-center justify-center">
                        <p className="w-[67px] h-[20px] font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A]">Shipments</p>
                    </div>
                    <NavLink
                        to="/shipping/providers"
                        className="w-[222px] h-[29px] flex items-center justify-center">
                        <p className="w-[60px] h-[20px] font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A]">Providers</p>
                    </NavLink>
                    <div className="w-[222px] h-[29px] flex items-center justify-center">
                        <p className="w-[96px] h-[20px] font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A]">Cost Calculator</p>
                    </div>
                </div>


                <div className="flex flex-col flex-1 w-[831.2px] ">
                    <div className="w-[831.2px] h-[139.59px] flex gap-[20px]">
                        <div className="w-[831.2px] h-[139.59px] flex gap-[16px]">
                            <div className="w-[195.8px] h-[139.59px] rounded-[14px] border-[0.8px] border-black/10 pt-[24px] pl-[24px] bg-[#FFFFFF]">
                                <div className="flex flex-col h-full">
                                    <div className="w-[146.2px] h-[20px]">
                                        <p className="w-[100px] h-[20px] font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A]">Total Shipments</p>
                                    </div>
                                    <div className="mt-[38px]">
                                        <p className="w-[146.2px] h-[32px] font-[Arial] font-[700] text-[24px] leading-[32px] tracking-[0px] text-[#16A34A]">3</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[195.8px] h-[139.59px] rounded-[14px] border-[0.8px] border-black/10 pt-[24px] pl-[24px] bg-[#FFFFFF]">
                                <div className="flex flex-col h-full">
                                    <div className="w-[146.2px] h-[20px]">
                                        <p className="w-[58px] h-[20px] font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A]">In Transit</p>
                                    </div>
                                    <div className="mt-[38px]">
                                        <p className="w-[146.2px] h-[32px] font-[Arial] font-[700] text-[24px] leading-[32px] tracking-[0px] text-[#9810FA]">1</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[195.8px] h-[139.59px] rounded-[14px] border-[0.8px] border-black/10 pt-[24px] pl-[24px] bg-[#FFFFFF]">
                                <div className="flex flex-col h-full">
                                    <div className="w-[146.2px] h-[20px]">
                                        <p className="w-[98px] h-[20px] font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A]">Out for Delivery</p>
                                    </div>
                                    <div className="mt-[38px]">
                                        <p className="w-[146px] h-[32px] font-[Arial] font-[700] text-[24px] leading-[32px] tracking-[0px] text-[#F54900]">1</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[195.8px] h-[139.59px] rounded-[14px] border-[0.8px] border-black/10 pt-[24px] pl-[24px] bg-[#FFFFFF]">
                                <div className="flex flex-col h-full">
                                    <div className="w-[146.2px] h-[20px]">
                                        <p className="w-[60px] h-[20px] font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A]">Delivered</p>
                                    </div>
                                    <div className="mt-[38px]">
                                        <p className="w-[146px] h-[32px] font-[Arial] font-[700] text-[24px] leading-[32px] tracking-[0px] text-[#00A63E]">1</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col flex-1 h-[1089.16px] gap-[16px]">
                    <div className="origin-top-left scale-[0.94]">
                        <div className="w-[831.2px] h-[375.39px] rounded-[14px] bg-[#FFFFFF] border-[0.8px] border-black/10">
                            <div className="w-[781.6px] h-[60px] mt-[24.8px] ml-[24.8px]">
                                <div className="w-[781.38px] h-[60px] flex flex-col gap-[8px]">
                                    <div className="flex justify-between items-start w-full h-[35.99px]">
                                        <div className="flex items-center gap-[12px]">
                                            <div className="h-[28px]">
                                                <p className="font-[Arial] font-[400] text-[18px] leading-[28px] tracking-[0px] text-[#0A0A0A]">SHIP-001</p>
                                            </div>
                                            <div className="w-[65.72px] h-[21.59px] flex items-center justify-center gap-[4px] rounded-[8px] bg-[#F3E8FF] px-[8px] py-[2px]">
                                                <p className="font-[Arial] font-[400] text-[12px] leading-[16px] tracking-[0px] text-[#8200DB] whitespace-nowrap">in transit</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end ml-auto">
                                            <p className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#0A0A0A]">FedEx</p>
                                            <p className="font-[Arial] font-normal text-[12px] leading-[16px] text-[#717182]">FDX123456789</p>
                                        </div>
                                    </div>
                                    <div className="flex-1 h-[24px]">
                                        <p className="font-[Arial] font-[400] text-[16px] leading-[24px] tracking-[0px] text-[#717182] whitespace-nowrap">
                                            Order: ORD-2025-001 • Customer: ABC Retail<br />Store
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[829.6px] mt-[40px]">
                                <div className="flex justify-between w-[781.6px] h-[48px] ml-[24px]">
                                    <div className="w-[382.8px] h-[48px] flex flex-col gap-[4px]">
                                        <p className="font-[Arial] font-normal text-[14px] leading-[20px] tracking-[0px] text-[#717182]">Origin</p>
                                        <p className="font-[Arial] font-normal text-[16px] leading-[24px] tracking-[0px] text-[#0A0A0A]">New York, NY</p>
                                    </div>
                                    <div className="w-[382.8px] h-[48px] flex flex-col gap-[4px]">
                                        <p className="font-[Arial] font-normal text-[14px] leading-[20px] tracking-[0px] text-[#717182]">Destination</p>
                                        <p className="font-[Arial] font-normal text-[16px] leading-[24px] tracking-[0px] text-[#0A0A0A]">Los Angeles, CA</p>
                                    </div>
                                </div>
                                <div className="w-[781.6px] ml-[24px] mt-[16px] flex flex-col gap-[8px]">
                                    <div className="flex justify-between items-center w-full h-[20px]">
                                        <p className="font-[Arial] font-normal text-[14px] leading-[20px] tracking-[0px] text-[#717182]">Delivery Progress</p>
                                        <div className="flex items-center gap-[2px]">
                                            <p className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#0A0A0A]">65</p>
                                            <p className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#0A0A0A]">%</p>
                                        </div>
                                    </div>
                                    <div className="relative w-[781.6px] h-[8px] rounded-full bg-[#D9D9D9] overflow-hidden">
                                        <div className="w-[65%] h-full rounded-full bg-[#030213]"></div>
                                    </div>
                                </div>
                                <div className="w-[781.6px] h-[47.99px] ml-[24px] mt-[30px] flex items-start justify-between">
                                    <div className="w-[53.06px] h-[39.99px] flex flex-col items-center gap-[4px]">
                                        <img src={PickedUpIcon} className="w-[20px] h-[20px]" />
                                        <p className="font-[Arial] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#0A0A0A] whitespace-nowrap">Picked Up</p>
                                    </div>
                                    <div className="w-[166.3px] h-[1px] mt-[10px] bg-black/10"></div>
                                    <div className="w-[53.06px] h-[39.99px] flex flex-col items-center gap-[4px]">
                                        <img src={InTransmitIcon} className="w-[20px] h-[20px]" />
                                        <p className="font-[Arial] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#0A0A0A] whitespace-nowrap">In Transit</p>
                                    </div>
                                    <div className="w-[166.3px] h-[1px] mt-[10px] bg-black/10"></div>
                                    <div className="w-[53.06px] h-[39.99px] flex flex-col items-center gap-[4px]">
                                        <img src={DeliveryIcon} className="w-[20px] h-[20px]" />
                                        <p className="font-[Arial] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#0A0A0A] whitespace-nowrap">Out for Delivery</p>
                                    </div>
                                    <div className="w-[166.3px] h-[1px] mt-[10px] bg-black/10"></div>
                                    <div className="w-[53.06px] h-[39.99px] flex flex-col items-center gap-[4px]">
                                        <img src={DeliveredIcon} className="w-[20px] h-[20px]" />
                                        <p className="font-[Arial] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#0A0A0A] whitespace-nowrap">Delivered</p>
                                    </div>
                                </div>
                                <div className="w-[781.6px] h-[32.8px] ml-[24px] mt-[16px] flex justify-between items-center border-t-[0.8px] border-black/10 pt-[8px] md-[10px]">
                                    <p className="font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#717182]">Estimated Delivery</p>
                                    <p className="font-[Arial] font-[400] text-[16px] leading-[24px] tracking-[0px] text-[#0A0A0A]">2025-10-15</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="origin-top-left scale-[0.94]">
                        <div className="w-[831.2px] h-[375.39px] rounded-[14px] bg-[#FFFFFF] border-[0.8px] border-black/10">
                            <div className="w-[781.6px] h-[60px] mt-[24.8px] ml-[24.8px]">
                                <div className="w-[702.38px] h-[60px] flex flex-col gap-[8px]">
                                    <div className="flex justify-between items-start w-full h-[35.99px]">
                                        <div className="flex items-center gap-[12px]">
                                            <div className="h-[28px]">
                                                <p className="font-[Arial] font-[400] text-[18px] leading-[28px] tracking-[0px] text-[#0A0A0A]">SHIP-002</p>
                                            </div>
                                            <div className="w-[103.4px] h-[21.59px] flex items-center justify-center gap-[4px] rounded-[8px] bg-[#FFEDD4] px-[8px] py-[2px]">
                                                <p className="font-[Arial] font-[400] text-[12px] leading-[16px] tracking-[0px] text-[#CA3500] whitespace-nowrap">out for_delivery</p>
                                            </div>
                                        </div>
                                        <div className="w-[79.22px] h-[35.99px] flex flex-col">
                                            <div className="w-[41px] h-[20px]">
                                                <p className="font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-right text-[#0A0A0A]">UPS</p>
                                            </div>
                                            <div className="w-[85px] h-[16px] self-end">
                                                <p className="font-[Arial] font-[400] text-[12px] leading-[16px] tracking-[0px] text-right text-[#717182] whitespace-nowrap">UPS987654321</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-1 h-[24px]">
                                        <p className="font-[Arial] font-[400] text-[16px] leading-[24px] tracking-[0px] text-[#717182] whitespace-nowrap">
                                            Order: ORD-2025-002 • Customer: XYZ<br />Market
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[829.6px] mt-[40px]">
                                <div className="flex justify-between w-[781.6px] h-[48px] ml-[24px]">
                                    <div className="w-[382.8px] h-[48px] flex flex-col gap-[4px]">
                                        <p className="font-[Arial] font-normal text-[14px] leading-[20px] tracking-[0px] text-[#717182]">Origin</p>
                                        <p className="font-[Arial] font-normal text-[16px] leading-[24px] tracking-[0px] text-[#0A0A0A]">New York, NY</p>
                                    </div>
                                    <div className="w-[382.8px] h-[48px] flex flex-col gap-[4px]">
                                        <p className="font-[Arial] font-normal text-[14px] leading-[20px] tracking-[0px] text-[#717182]">Destination</p>
                                        <p className="font-[Arial] font-normal text-[16px] leading-[24px] tracking-[0px] text-[#0A0A0A]">Chicago, IL</p>
                                    </div>
                                </div>
                                <div className="w-[781.6px] ml-[24px] mt-[16px] flex flex-col gap-[8px]">
                                    <div className="flex justify-between items-center w-full h-[20px]">
                                        <p className="font-[Arial] font-normal text-[14px] leading-[20px] tracking-[0px] text-[#717182]">Delivery Progress</p>
                                        <div className="flex items-center gap-[2px]">
                                            <p className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#0A0A0A]">90</p>
                                            <p className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#0A0A0A]">%</p>
                                        </div>
                                    </div>
                                    <div className="relative w-[781.6px] h-[8px] rounded-full bg-[#D9D9D9] overflow-hidden">
                                        <div className="w-[90%] h-full rounded-full bg-[#030213]"></div>
                                    </div>
                                </div>
                                <div className="w-[781.6px] h-[47.99px] ml-[24px] mt-[30px] flex items-start justify-between">
                                    <div className="w-[53.06px] h-[39.99px] flex flex-col items-center gap-[4px]">
                                        <img src={PickedUpIcon} className="w-[20px] h-[20px]" />
                                        <p className="font-[Arial] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#0A0A0A] whitespace-nowrap">Picked Up</p>
                                    </div>
                                    <div className="w-[166.3px] h-[1px] mt-[10px] bg-black/10"></div>
                                    <div className="w-[53.06px] h-[39.99px] flex flex-col items-center gap-[4px]">
                                        <img src={InTransmitIcon} className="w-[20px] h-[20px]" />
                                        <p className="font-[Arial] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#0A0A0A] whitespace-nowrap">In Transit</p>
                                    </div>
                                    <div className="w-[166.3px] h-[1px] mt-[10px] bg-black/10"></div>

                                    <div className="w-[53.06px] h-[39.99px] flex flex-col items-center gap-[4px]">
                                        <img src={DeliveryIcon} className="w-[20px] h-[20px]" />
                                        <p className="font-[Arial] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#0A0A0A] whitespace-nowrap">Out for Delivery</p>
                                    </div>
                                    <div className="w-[166.3px] h-[1px] mt-[10px] bg-black/10"></div>

                                    <div className="w-[53.06px] h-[39.99px] flex flex-col items-center gap-[4px]">
                                        <img src={DeliveredIcon} className="w-[20px] h-[20px]" />
                                        <p className="font-[Arial] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#0A0A0A] whitespace-nowrap">Delivered</p>
                                    </div>
                                </div>
                                <div className="w-[781.6px] h-[32.8px] ml-[24px] mt-[16px] flex justify-between items-center border-t-[0.8px] border-black/10 pt-[8px] md-[10px]">
                                    <p className="font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#717182]">Estimated Delivery</p>
                                    <p className="font-[Arial] font-[400] text-[16px] leading-[24px] tracking-[0px] text-[#0A0A0A]">2025-10-12</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="origin-top-left scale-[0.94]">
                        <div className="w-[831.2px] h-[375.39px] rounded-[14px] bg-[#FFFFFF] border-[0.8px] border-black/10">
                            <div className="w-[781.6px] h-[60px] mt-[24.8px] ml-[24.8px]">
                                <div className="w-[781.38px] h-[60px] flex flex-col gap-[8px]">
                                    <div className="flex justify-between items-start w-full h-[35.99px]">
                                        <div className="flex items-center gap-[12px]">
                                            <div className="h-[28px]">
                                                <p className="font-[Arial] font-[400] text-[18px] leading-[28px] tracking-[0px] text-[#0A0A0A]">SHIP-003</p>
                                            </div>
                                            <div className="w-[67.79px] h-[21.59px] flex items-center justify-center gap-[4px] rounded-[8px] bg-[#DCFCE7] px-[8px] py-[2px]">
                                                <p className="font-[Arial] font-[400] text-[12px] leading-[16px] tracking-[0px] text-[#008236] whitespace-nowrap">delivered</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end ml-auto">
                                            <p className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#0A0A0A]">DHL</p>
                                            <p className="font-[Arial] font-normal text-[12px] leading-[16px] text-[#717182]">DHL456789123</p>
                                        </div>
                                    </div>
                                    <div className="flex-1 h-[24px]">
                                        <p className="font-[Arial] font-[400] text-[16px] leading-[24px] tracking-[0px] text-[#717182] whitespace-nowrap">
                                            Order: ORD-2025-003 • Customer: Quick<br />Shop
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[829.6px] mt-[40px]">
                                <div className="flex justify-between w-[781.6px] h-[48px] ml-[24px]">
                                    <div className="w-[382.8px] h-[48px] flex flex-col gap-[4px]">
                                        <p className="font-[Arial] font-normal text-[14px] leading-[20px] tracking-[0px] text-[#717182]">Origin</p>
                                        <p className="font-[Arial] font-normal text-[16px] leading-[24px] tracking-[0px] text-[#0A0A0A]">New York, NY</p>
                                    </div>
                                    <div className="w-[382.8px] h-[48px] flex flex-col gap-[4px]">
                                        <p className="font-[Arial] font-normal text-[14px] leading-[20px] tracking-[0px] text-[#717182]">Destination</p>
                                        <p className="font-[Arial] font-normal text-[16px] leading-[24px] tracking-[0px] text-[#0A0A0A]">Miami, FL</p>
                                    </div>
                                </div>
                                <div className="w-[781.6px] ml-[24px] mt-[16px] flex flex-col gap-[8px]">
                                    <div className="flex justify-between items-center w-full h-[20px]">
                                        <p className="font-[Arial] font-normal text-[14px] leading-[20px] tracking-[0px] text-[#717182]">Delivery Progress</p>
                                        <div className="flex items-center gap-[2px]">
                                            <p className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#0A0A0A]">100</p>
                                            <p className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#0A0A0A]">%</p>
                                        </div>
                                    </div>
                                    <div className="relative w-[781.6px] h-[8px] rounded-full bg-[#D9D9D9] overflow-hidden">
                                        <div className="w-[100%] h-full rounded-full bg-[#030213]"></div>
                                    </div>
                                </div>
                                <div className="w-[781.6px] h-[47.99px] ml-[24px] mt-[30px] flex items-start justify-between">
                                    <div className="w-[53.06px] h-[39.99px] flex flex-col items-center gap-[4px]">
                                        <img src={PickedUpIcon} className="w-[20px] h-[20px]" />
                                        <p className="font-[Arial] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#0A0A0A] whitespace-nowrap">Picked Up</p>
                                    </div>
                                    <div className="w-[166.3px] h-[1px] mt-[10px] bg-black/10"></div>
                                    <div className="w-[53.06px] h-[39.99px] flex flex-col items-center gap-[4px]">
                                        <img src={InTransmitIcon} className="w-[20px] h-[20px]" />
                                        <p className="font-[Arial] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#0A0A0A] whitespace-nowrap">In Transit</p>
                                    </div>
                                    <div className="w-[166.3px] h-[1px] mt-[10px] bg-black/10"></div>
                                    <div className="w-[53.06px] h-[39.99px] flex flex-col items-center gap-[4px]">
                                        <img src={DeliveryIcon} className="w-[20px] h-[20px]" />
                                        <p className="font-[Arial] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#0A0A0A] whitespace-nowrap">Out for Delivery</p>
                                    </div>
                                    <div className="w-[166.3px] h-[1px] mt-[10px] bg-black/10"></div>
                                    <div className="w-[53.06px] h-[39.99px] flex flex-col items-center gap-[4px]">
                                        <img src={DeliveredIcon} className="w-[20px] h-[20px]" />
                                        <p className="font-[Arial] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#0A0A0A] whitespace-nowrap">Delivered</p>
                                    </div>
                                </div>
                                <div className="w-[781.6px] h-[32.8px] ml-[24px] mt-[16px] flex justify-between items-center border-t-[0.8px] border-black/10 pt-[8px] md-[10px]">
                                    <p className="font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#717182]">Estimated Delivery</p>
                                    <p className="font-[Arial] font-[400] text-[16px] leading-[24px] tracking-[0px] text-[#0A0A0A]">2025-10-10</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ShippingLogistics;