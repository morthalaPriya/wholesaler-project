import { NavLink } from "react-router-dom";
import AdminIcon from "../assets/adminicon-1.png";
import AuditLogsIcon1 from "../assets/auditlogsicon-1.png";
import AuditLogsIcon2 from "../assets/auditlogsicon-2.png";
import AuditLogsIcon3 from "../assets/auditlogsicon-3.png";
import AuditIcon1 from "../assets/auditicon-1.png";
import AuditIcon2 from "../assets/auditicon-2.png";

function AdminAuditLogs() {
    return (
        <div className="flex flex-col w-[1151.2px] h-[1254px] bg-[#FFFFFF] pt-[32px] px-[32px] gap-[24px]">
            <div className="flex flex-row items-center w-[831.2px] h-[64px] gap-[12px]">
                <div className="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-[#030213]/10">
                    <img src={AdminIcon} className="w-[24px] h-[24px]" />
                </div>
                <div className="flex flex-col gap-[4px]">
                    <h1 className="font-[Arial] font-[400] text-[24px] leading-[32px] text-[#0A0A0A]">Admin Dashboard</h1>
                    <p className="w-[437px] font-[Arial] font-[400] text-[16px] leading-[24px] text-[#717182]">Manage approvals, monitor analytics, and review system logs</p>
                </div>
            </div>

            <div className="flex flex-col w-[831.2px] h-[1102.4pxpx] pb-[24px] gap-[32px]">
                <div className="grid grid-cols-3 w-[672px] h-[36px] rounded-[14px] bg-[#ECECF0] p-[3px]">
                    <NavLink
                        to="/admin"
                        className="w-[222px] h-[29px] flex items-center justify-center">
                        <p className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#0A0A0A]">Approvals</p>
                    </NavLink>
                    <NavLink
                        to="/admin/analytics"
                        className="w-[222px] h-[29px] flex items-center justify-center">
                        <p className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#0A0A0A]">Analytics</p>
                    </NavLink>
                    <div className="flex items-center justify-center h-full rounded-[14px] border-[0.8px] border-[#E4E4E7] bg-[#FFFFFF]">
                        <p className="font-[Arial] font-[400] text-[14px] leading-[20px] text-[#0A0A0A]">Audit Logs</p>
                    </div>
                </div>

                <div className="flex flex-col w-[831.2px] h-[1034.4px] gap-[24px]">
                    <div className="flex flex-col w-[831.2px] h-[719.6px] rounded-[14px] border-[0.8px] border-black/10 bg-[#FFFFFF]">
                        <div className="flex flex-col w-[829.6px] h-[70px] gap-[4px] pt-[24px] pl-[24px]">
                            <div className="w-[781.6px] h-[16px]">
                                <h2 className="font-[Arial] font-[400] text-[16px] leading-[16px] text-[#0A0A0A]">
                                    System Audit Logs
                                </h2>
                            </div>
                            <div className="w-[781.6px] h-[24px] mt-[8px]">
                                <p className="font-[Arial] font-[400] text-[16px] leading-[24px] text-[#717182]">
                                    Track all system activities and security events
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col w-full h-[700px] px-[24px] pt-[24px]">
                            <div className="flex flex-col gap-[12px]">
                                <div className="flex w-[781.6px] h-[110.59px] rounded-[10px] border-[0.8px] border-black/10 bg-[#FFFFFF] px-[16px] py-[16px]">
                                    <div className="flex items-start w-full gap-[12px]">
                                        <img src={AuditLogsIcon1} className="w-[16px] h-[16px] flex-shrink-0 mt-[2px]" />
                                        <div className="flex flex-col flex-1 gap-[4px]">
                                            <div className="flex items-center justify-between">
                                                <p className="font-[Arial] font-[400] text-[16px] leading-[24px] text-[#0A0A0A]">Vendor Approved</p>
                                                <p className="font-[Arial] font-[400] text-[12px] leading-[16px] text-[#717182]">2025-10-11 10:30 AM</p>
                                            </div>
                                            <p className="font-[Arial] font-[400] text-[14px] leading-[20px] text-[#717182]">
                                                Approved New Tech Suppliers Inc.
                                            </p>
                                            <p className="font-[Arial] font-[400] text-[12px] leading-[16px] text-[#717182]">User:</p>
                                            <p className="font-[Arial] font-[400] text-[12px] leading-[16px] text-[#717182]">Admin</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex w-[781.6px] h-[110.59px] rounded-[10px] border-[0.8px] border-black/10 bg-[#FFFFFF] px-[16px] py-[16px]">
                                    <div className="flex items-start w-full gap-[12px]">
                                        <img src={AuditLogsIcon1} className="w-[16px] h-[16px] flex-shrink-0 mt-[2px]" />
                                        <div className="flex flex-col flex-1 gap-[4px]">
                                            <div className="flex items-center justify-between">
                                                <p className="font-[Arial] font-[400] text-[16px] leading-[24px] text-[#0A0A0A]">Product Updated</p>
                                                <p className="font-[Arial] font-[400] text-[12px] leading-[16px] text-[#717182]">2025-10-11 09:15 AM</p>
                                            </div>
                                            <p className="font-[Arial] font-[400] text-[14px] leading-[20px] text-[#717182]">
                                                Updated pricing for Premium Headphones
                                            </p>
                                            <p className="font-[Arial] font-[400] text-[12px] leading-[16px] text-[#717182]">User: ABC</p>
                                            <p className="font-[Arial] font-[400] text-[12px] leading-[16px] text-[#717182]">Electronics</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex w-[781.6px] h-[110.59px] rounded-[10px] border-[0.8px] border-black/10 bg-[#FFFFFF] px-[16px] py-[16px]">
                                    <div className="flex items-start w-full gap-[12px]">
                                        <img src={AuditLogsIcon2} className="w-[16px] h-[16px] flex-shrink-0 mt-[2px]" />
                                        <div className="flex flex-col flex-1 gap-[4px]">
                                            <div className="flex items-center justify-between">
                                                <p className="font-[Arial] font-[400] text-[16px] leading-[24px] text-[#0A0A0A]">Failed Login Attempt</p>
                                                <p className="font-[Arial] font-[400] text-[12px] leading-[16px] text-[#717182]">2025-10-11 08:45 AM</p>
                                            </div>
                                            <p className="font-[Arial] font-[400] text-[14px] leading-[20px] text-[#717182]">
                                                Multiple failed login attempts detected"
                                            </p>
                                            <p className="font-[Arial] font-[400] text-[12px] leading-[16px] text-[#717182]">User:</p>
                                            <p className="font-[Arial] font-[400] text-[12px] leading-[16px] text-[#717182]">Unknown</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex w-[781.6px] h-[110.59px] rounded-[10px] border-[0.8px] border-black/10 bg-[#FFFFFF] px-[16px] py-[16px]">
                                    <div className="flex items-start w-full gap-[12px]">
                                        <img src={AuditLogsIcon3} className="w-[16px] h-[16px] flex-shrink-0 mt-[2px]" />
                                        <div className="flex flex-col flex-1 gap-[4px]">
                                            <div className="flex items-center justify-between">
                                                <p className="font-[Arial] font-[400] text-[16px] leading-[24px] text-[#0A0A0A]">License Verification</p>
                                                <p className="font-[Arial] font-[400] text-[12px] leading-[16px] text-[#717182]">2025-10-11 08:00AM</p>
                                            </div>
                                            <p className="font-[Arial] font-[400] text-[14px] leading-[20px] text-[#717182]">
                                                Licence verification completed for 5 vendors
                                            </p>
                                            <p className="font-[Arial] font-[400] text-[12px] leading-[16px] text-[#717182]">User:</p>
                                            <p className="font-[Arial] font-[400] text-[12px] leading-[16px] text-[#717182]">System</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-[831.2px] h-[300.8px] rounded-[14px] border-[0.8px] border-black/10 bg-[#FFFFFF] p-[24px] gap-[24px]">
                        <div className="flex flex-col w-[829.6px] h-[70px] gap-[4px] pt-[13px] pl-[6px]">
                            <div className="w-[781.6px] h-[16px]">
                                <h2 className="font-[Arial] font-[400] text-[16px] leading-[16px] text-[#0A0A0A]">
                                    Security & Compliance
                                </h2>
                            </div>

                            <div className="w-[781.6px] h-[24px]">
                                <p className="font-[Arial] font-[400] text-[16px] leading-[24px] text-[#717182]">
                                    System security status and compliance checks
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col w-[781.6px] h-[171.2px] gap-[12px]">
                            <div className="flex flex-row w-[781.6px] h-[79.6px] gap-[12px]">
                                <div className="w-[382.8px] h-[77.6px] rounded-[10px] border-[0.8px] border-black/10 bg-white px-[16px] py-[16px]">
                                    <div className="flex flex-row items-start gap-[12px]">
                                        <div className="w-[24px] h-[24px] flex items-center justify-center shrink-0  mt-[4px]">
                                            <img src={AuditIcon1} className="w-[24px] h-[24px]" />
                                        </div>
                                        <div className="flex flex-col w-[118.93px] h-[44px]">
                                            <p className="w-[107px] h-[24px] font-[Arial] font-normal text-[16px] leading-[24px] text-[#0A0A0A]">SSL Certificate</p>
                                            <p className="w-[122px] h-[20px] font-[Arial] font-normal text-[14px] leading-[20px] text-[#717182]">Valid until Jan 2026</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[382.8px] h-[77.6px] rounded-[10px] border-[0.8px] border-black/10 bg-white px-[16px] py-[16px]">
                                    <div className="flex flex-row items-start gap-[12px]">
                                        <div className="w-[24px] h-[24px] flex items-center justify-center shrink-0  mt-[4px]">
                                            <img src={AuditIcon1} className="w-[24px] h-[24px]" />
                                        </div>
                                        <div className="flex flex-col w-[116.69px] h-[44px]">
                                            <p className="w-[114px] h-[24px] font-[Arial] font-normal text-[16px] leading-[24px] text-[#0A0A0A]">Data Encryption</p>
                                            <p className="w-[98px] h-[20px] font-[Arial] font-normal text-[14px] leading-[20px] text-[#717182]">AES-256 Active</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row w-[781.6px] h-[79.6px] gap-[12px]">
                                <div className="w-[382.8px] h-[77.6px] rounded-[10px] border-[0.8px] border-black/10 bg-white px-[16px] py-[16px]">
                                    <div className="flex flex-row items-start gap-[12px]">
                                        <div className="w-[24px] h-[24px] flex items-center justify-center shrink-0  mt-[4px]">
                                            <img src={AuditIcon1} className="w-[24px] h-[24px]" />
                                        </div>
                                        <div className="flex flex-col w-[131.73px] h-[44px]">
                                            <p className="w-[136px] h-[24px] font-[Arial] font-normal text-[16px] leading-[24px] text-[#0A0A0A]">GDPR Compliance</p>
                                            <p className="w-[97px] h-[20px] font-[Arial] font-normal text-[14px] leading-[20px] text-[#717182]">Fully Compliant</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[382.8px] h-[77.6px] rounded-[10px] border-[0.8px] border-black/10 bg-white px-[16px] py-[16px]">
                                    <div className="flex flex-row items-start gap-[12px]">
                                        <div className="w-[24px] h-[24px] flex items-center justify-center shrink-0  mt-[4px]">
                                            <img src={AuditIcon2} className="w-[24px] h-[24px]" />
                                        </div>
                                        <div className="flex flex-col w-[128.32px] h-[44px]">
                                            <p className="w-[98px] h-[24px] font-[Arial] font-normal text-[16px] leading-[24px] text-[#0A0A0A]">Audit Reports</p>
                                            <p className="w-[131px] h-[20px] font-[Arial] font-normal text-[14px] leading-[20px] text-[#717182]">last generated Oct 1</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminAuditLogs;