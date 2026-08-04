import { NavLink } from "react-router-dom";
import AdminIcon from "../assets/adminicon-1.png";
import AnalyticsIcon1 from "../assets/analyticsicon-1.png";
import RevenueChart from "./RevenueChart";
function AdminAnalytics() {
    return (
        <div className="flex flex-col w-[1151.2px] h-[847px] bg-[#FFFFFF] pt-[32px] px-[32px] gap-[24px]">
            <div className="flex flex-row items-center w-[831.2px] h-[64px] gap-[12px]">
                <div className="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-[#030213]/10">
                    <img src={AdminIcon} className="w-[24px] h-[24px]" />
                </div>
                <div className="flex flex-col gap-[4px]">
                    <h1 className="font-[Arial] font-[400] text-[24px] leading-[32px] text-[#0A0A0A]">Admin Dashboard</h1>
                    <p className="w-[437px] font-[Arial] font-[400] text-[16px] leading-[24px] text-[#717182]">Manage approvals, monitor analytics, and review system logs</p>
                </div>
            </div>

            <div className="flex flex-col w-[831.2px] h-[695.17px] pb-[24px] gap-[32px]">

                <div className="grid grid-cols-3 w-[672px] h-[36px] rounded-[14px] bg-[#ECECF0] p-[3px]">
                    <NavLink
                        to="/admin"
                        className="w-[222px] h-[29px] flex items-center justify-center">
                        <p className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#0A0A0A]">Approvals</p>
                    </NavLink>
                    <div className="flex items-center justify-center h-full rounded-[14px] border-[0.8px] border-[#E4E4E7] bg-[#FFFFFF]">
                        <p className="font-[Arial] font-[400] text-[14px] leading-[20px] text-[#0A0A0A]">Analytics</p>
                    </div>
                    <NavLink
                        to="/admin/audit-logs"
                        className="w-[222px] h-[29px] flex items-center justify-center">
                        <p className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#0A0A0A]">Audit Logs</p>
                    </NavLink>
                </div>

                <div className="flex flex-col w-[831.2px] h-[603.17px] gap-[24px]">
                    <div className="flex w-[831.2px] h-[159.57px] gap-[16px]">
                        {/* 1stcard */}
                        <div className="flex flex-col w-[195.8px] h-[159.57px] rounded-[14px] border-[0.8px] border-black/10 bg-[#FFFFFF] p-[24px]">
                            <div className="w-[146.2px] h-[20px]">
                                <p className="w-[90px] h-[20px] font-[Arial] font-[400] text-[14px] leading-[20px] text-[#0A0A0A]">Total Revenue</p>
                            </div>
                            <div className="mt-[38.8px] flex flex-col w-[146.2px] gap-[4px]">
                                <p className="font-[Arial] font-[700] text-[24px] leading-[32px] text-[#0A0A0A]">$328,000</p>
                                <div className="flex items-center gap-[4px]">
                                    <img src={AnalyticsIcon1} className="w-[12px] h-[12px]" />
                                    <p className="font-[Arial] font-[400] text-[12px] leading-[16px] text-[#00A63E]">
                                        +23% vs last period
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-[195.8px] h-[159.57px] rounded-[14px] border-[0.8px] border-black/10 bg-[#FFFFFF] p-[24px]">
                            <div className="w-[146.2px] h-[20px]">
                                <p className="w-[90px] h-[20px] font-[Arial] font-[400] text-[14px] leading-[20px] text-[#0A0A0A]">Total Orders</p>
                            </div>
                            <div className="mt-[38.8px] flex flex-col w-[146.2px] gap-[4px]">
                                <p className="font-[Arial] font-[700] text-[24px] leading-[32px] text-[#0A0A0A]">2,310</p>
                                <div className="flex items-center gap-[4px]">
                                    <img src={AnalyticsIcon1} className="w-[12px] h-[12px]" />
                                    <p className="font-[Arial] font-[400] text-[12px] leading-[16px] text-[#00A63E]">
                                        +18% vs last period
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-[195.8px] h-[159.57px] rounded-[14px] border-[0.8px] border-black/10 bg-[#FFFFFF] p-[24px]">
                            <div className="w-[146.2px] h-[20px]">
                                <p className="w-[90px] h-[20px] font-[Arial] font-[400] text-[14px] leading-[20px] text-[#0A0A0A]">Active Users</p>
                            </div>
                            <div className="mt-[38.8px] flex flex-col w-[146.2px] gap-[4px]">
                                <p className="font-[Arial] font-[700] text-[24px] leading-[32px] text-[#0A0A0A]">580</p>
                                <div className="flex items-center gap-[4px]">
                                    <img src={AnalyticsIcon1} className="w-[12px] h-[12px]" />
                                    <p className="font-[Arial] font-[400] text-[12px] leading-[16px] text-[#00A63E]">
                                        +12% vs last period
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-[195.8px] h-[159.57px] rounded-[14px] border-[0.8px] border-black/10 bg-[#FFFFFF] p-[24px]">
                            <div className="w-[146.2px] h-[20px]">
                                <p className="w-[90px] h-[20px] font-[Arial] font-[400] text-[14px] leading-[20px] text-[#0A0A0A]">Avg Order Value</p>
                            </div>
                            <div className="mt-[38.8px] flex flex-col w-[146.2px] gap-[4px]">
                                <p className="font-[Arial] font-[700] text-[24px] leading-[32px] text-[#0A0A0A]">$142</p>
                                <div className="flex items-center gap-[4px]">
                                    <img src={AnalyticsIcon1} className="w-[12px] h-[12px]" />
                                    <p className="font-[Arial] font-[400] text-[12px] leading-[16px] text-[#00A63E]">
                                        +8% vs last period
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-[831.2px] h-[236.03px] gap-[16px]">
                        <div className="w-[404px] h-[420px] bg-white border border-black/10 rounded-[14px] p-5">
    <h2 className="text-[18px] font-medium">
        Revenue Trend
    </h2>

    <p className="text-[14px] text-[#717182] mt-1">
        Monthly revenue over the last 6 months
    </p>

    <div className="w-full h-[300px] mt-5">
        <RevenueChart />
    </div>
</div>

                    </div>

                </div>


            </div>

        </div>

    )
}

export default AdminAnalytics;