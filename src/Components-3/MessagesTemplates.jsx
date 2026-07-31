import { NavLink } from "react-router-dom";
function MessagesTemplates() {
    return (
        <div className="flex flex-col w-[1151px] h-[770px] bg-[#FFFFFF] pt-[32px] px-[32px] gap-[24px]">
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

            <div className="flex flex-col h-[613.98px] gap-[32px]">
                <div className="flex flex-row items-center w-[448px] h-[36px] rounded-[14px] bg-[#ECECF0] p-[3px]">
                    <NavLink
                        to="/messages"
                        className="w-[222px] h-[29px] flex items-center justify-center">
                        <p className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#0A0A0A]">Messages</p>
                    </NavLink>
                    <div className="flex items-center justify-center w-[147.32px] h-[29px] rounded-[14px] border-[0.8px] border-[#E4E4E7] bg-[#FFFFFF] px-[8px] py-[4px]">
                        <p className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#0A0A0A]">Templates</p>
                    </div>
                    <NavLink
                        to="/messages/notifications"
                        className="w-[147.32px] h-[29px] flex items-center justify-center">
                        <p className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#0A0A0A]">Notifications</p>
                    </NavLink>
                </div>

                <div className="flex flex-col w-[831.2px] h-[521.98px] bg-white rounded-[14px] border-[0.8px] border-black/10">
                    <div className="flex flex-col w-full h-[70px] pt-[24px] pl-[24px]">
                        <div className="w-[781.6px] h-[16px]">
                            <h2 className="text-[16px] font-normal leading-[16px] tracking-[0px] text-[#0A0A0A]">
                                Quick Reply Templates
                            </h2>
                        </div>
                        <div className="w-[781.6px] h-[24px] mt-[10px]">
                            <p className="font-[Arial] font-[400] text-[16px] leading-[24px] text-[#717182]">
                                Pre-defined responses for common queries
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col w-[781.6px] h-[402.38px] gap-[12px] mt-[20px] px-[20px]">
                        <div className="flex flex-row gap-[16px]">
                            <div className="flex flex-col w-[382.8px] h-[193.19px] rounded-[14px] border-[0.8px] border-black/10 bg-[#FFFFFF] px-[24px] py-[24px] gap-[30px]">
                                <div className="flex flex-row justify-between w-[333.2px] h-[53.59px]">
                                    <div className="flex flex-col w-[284.27px] h-[53.59px]">
                                        <div className="w-[284.27px] h-[24px] mb-[8px]">
                                            <h3 className="font-[Arial] font-normal text-[16px] leading-[24px] tracking-[0px] text-[#0A0A0A]">
                                                Order Status Update
                                            </h3>
                                        </div>
                                        <div className="flex items-center justify-center w-[54.31px] h-[21.59px] rounded-[8px] bg-[#ECEEF2]">
                                            <p className="font-[Arial] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#030213]">
                                                Orders
                                            </p>
                                        </div>
                                    </div>
                                    <button className="flex items-center justify-center w-[48.92px] h-[32px] rounded-[8px] border-[0.8px] border-black/10 bg-white px-[12px] gap-[6px]">
                                        <span className="font-[Arial] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#0A0A0A]"> Use </span>
                                    </button>
                                </div>
                                <div className="w-[333.2px] h-[60px]">
                                    <p className="font-[Arial] font-normal text-[14px] leading-[20px] text[#717182]">
                                        Your order #[ORDER_ID] is currently being processed and will be shipped within 24-48 hours.
                                        You will receive tracking information via email.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col w-[382.8px] h-[193.19px] rounded-[14px] border-[0.8px] border-black/10 bg-[#FFFFFF] px-[24px] py-[24px] gap-[30px]">
                                <div className="flex flex-row justify-between w-[333.2px] h-[53.59px]">
                                    <div className="flex flex-col w-[284.27px] h-[53.59px]">
                                        <div className="w-[284.27px] h-[24px] mb-[8px]">
                                            <h3 className="font-[Arial] font-normal text-[16px] leading-[24px] tracking-[0px] text-[#0A0A0A]">
                                                Bulk Discount Information
                                            </h3>
                                        </div>
                                        <div className="flex items-center justify-center w-[55.2px] h-[21.59px] rounded-[8px] bg-[#ECEEF2]">
                                            <p className="font-[Arial] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#030213]">
                                                Pricing
                                            </p>
                                        </div>
                                    </div>
                                    <button className="flex items-center justify-center w-[48.92px] h-[32px] rounded-[8px] border-[0.8px] border-black/10 bg-white px-[12px] gap-[6px]">
                                        <span className="font-[Arial] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#0A0A0A]"> Use </span>
                                    </button>
                                </div>
                                <div className="w-[333.2px] h-[60px]">
                                    <p className="font-[Arial] font-normal text-[14px] leading-[20px] text[#717182]">
                                        We offer attractive bulk discounts for orders [QUANTITY] units. Please contact
                                        our sales team for customized pricing.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row gap-[16px]">
                            <div className="flex flex-col w-[382.8px] h-[193.19px] rounded-[14px] border-[0.8px] border-black/10 bg-[#FFFFFF] px-[24px] py-[24px] gap-[30px]">
                                <div className="flex flex-row justify-between w-[333.2px] h-[53.59px]">
                                    <div className="flex flex-col w-[284.27px] h-[53.59px]">
                                        <div className="w-[284.27px] h-[24px] mb-[8px]">
                                            <h3 className="font-[Arial] font-normal text-[16px] leading-[24px] tracking-[0px] text-[#0A0A0A]">
                                                Product Availability
                                            </h3>
                                        </div>
                                        <div className="flex items-center justify-center w-[65.51px] h-[21.59px] rounded-[8px] bg-[#ECEEF2]">
                                            <p className="font-[Arial] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#030213]">
                                                Products
                                            </p>
                                        </div>
                                    </div>
                                    <button className="flex items-center justify-center w-[48.92px] h-[32px] rounded-[8px] border-[0.8px] border-black/10 bg-white px-[12px] gap-[6px]">
                                        <span className="font-[Arial] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#0A0A0A]"> Use </span>
                                    </button>
                                </div>
                                <div className="w-[333.2px] h-[60px]">
                                    <p className="font-[Arial] font-normal text-[14px] leading-[20px] text[#717182]">
                                        The products you inquired about is currently in stock with an estimated delivery
                                        time of [DAYS] business days.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col w-[382.8px] h-[193.19px] rounded-[14px] border-[0.8px] border-black/10 bg-[#FFFFFF] px-[24px] py-[24px] gap-[30px]">
                                <div className="flex flex-row justify-between w-[333.2px] h-[53.59px]">
                                    <div className="flex flex-col w-[284.27px] h-[53.59px]">
                                        <div className="w-[284.27px] h-[24px] mb-[8px]">
                                            <h3 className="font-[Arial] font-normal text-[16px] leading-[24px] tracking-[0px] text-[#0A0A0A]">
                                                Payment Terms
                                            </h3>
                                        </div>
                                        <div className="flex items-center justify-center w-[64.97px] h-[21.59px] rounded-[8px] bg-[#ECEEF2]">
                                            <p className="font-[Arial] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#030213]">
                                                Payment
                                            </p>
                                        </div>
                                    </div>
                                    <button className="flex items-center justify-center w-[48.92px] h-[32px] rounded-[8px] border-[0.8px] border-black/10 bg-white px-[12px] gap-[6px]">
                                        <span className="font-[Arial] font-normal text-[12px] leading-[16px] tracking-[0px] text-[#0A0A0A]"> Use </span>
                                    </button>
                                </div>
                                <div className="w-[333.2px] h-[60px]">
                                    <p className="font-[Arial] font-normal text-[14px] leading-[20px] text[#717182]">
                                        We offer flexible payment terms including NET 30, NET 60, and advance payment discounts.
                                        Please let us known which option works best for you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MessagesTemplates;