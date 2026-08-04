import { NavLink } from "react-router-dom";
import AdminIcon from "../assets/adminicon-1.png";
import SearchIcon from "../assets/adminsearchicon.png";
import FilterIcon from "../assets/filtericon.png";
import DownIcon from "../assets/arrowdownicon.png";
import AdminIcon2 from "../assets/adminicon-2.png";
function AdminApprovals() {
  return (
    <div className="flex flex-col w-[1151.2px] h-[838px] bg-[#FFFFFF] pt-[32px] px-[32px] gap-[24px]">
      <div className="flex flex-row items-center w-[831.2px] h-[64px] gap-[12px]">
        <div className="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-[#030213]/10">
          <img src={AdminIcon} className="w-[24px] h-[24px]" />
        </div>
        <div className="flex flex-col gap-[4px]">
          <h1 className="font-[Arial] font-[400] text-[24px] leading-[32px] text-[#0A0A0A]">Admin Dashboard</h1>
          <p className="w-[437px] font-[Arial] font-[400] text-[16px] leading-[24px] text-[#717182]">Manage approvals, monitor analytics, and review system logs</p>
        </div>
      </div>


      <div className="flex flex-col w-[831.2px] h-[685.99px] pb-[24px] gap-[32px]">
        <div className="grid grid-cols-3 w-[672px] h-[36px] rounded-[14px] bg-[#ECECF0] p-[3px]">
          <div className="flex items-center justify-center gap-[8px] h-full rounded-[14px] border-[0.8px] border-[#E4E4E7] bg-[#FFFFFF]">
            <p className="font-[Arial] font-[400] text-[14px] leading-[20px] text-[#0A0A0A]"> Approvals </p>
            <span className="flex items-center justify-center w-[24.26px] h-[21.59px] rounded-[8px] bg-[#F54900] text-[#FFFFFF] text-[10px] leading-none"> 2 </span>
          </div>
          <NavLink
            to="/admin/analytics"
            className="w-[222px] h-[29px] flex items-center justify-center">
            <p className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#0A0A0A]">Analytics</p>
          </NavLink>
          <NavLink
            to="/admin/audit-logs"
            className="w-[222px] h-[29px] flex items-center justify-center">
            <p className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#0A0A0A]">Audit Logs</p>
          </NavLink>
        </div>

        <div className="flex flex-col w-[831.2px] h-[593.99px] gap-[24px]">
          <div className="w-[831.2px] h-[139.59px] flex gap-[20px]">
            <div className="w-[831.2px] h-[139.59px] flex gap-[16px]">
              <div className="w-[195.8px] h-[139.59px] rounded-[14px] border-[0.8px] border-black/10 pt-[24px] pl-[24px] bg-[#FFFFFF]">
                <div className="flex flex-col h-full">
                  <div className="w-[146.2px] h-[20px]">
                    <p className="w-[117px] h-[20px] font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A]">Pending Approvals</p>
                  </div>
                  <div className="mt-[38px]">
                    <p className="w-[146.2px] h-[32px] font-[Arial] font-[700] text-[24px] leading-[32px] tracking-[0px] text-[#F54900]">2</p>
                  </div>
                </div>
              </div>
              <div className="w-[195.8px] h-[139.59px] rounded-[14px] border-[0.8px] border-black/10 pt-[24px] pl-[24px] bg-[#FFFFFF]">
                <div className="flex flex-col h-full">
                  <div className="w-[146.2px] h-[20px]">
                    <p className="w-[101px] h-[20px] font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A]">Approval Today</p>
                  </div>
                  <div className="mt-[38px]">
                    <p className="w-[146.2px] h-[32px] font-[Arial] font-[700] text-[24px] leading-[32px] tracking-[0px] text-[#00A63E]">1</p>
                  </div>
                </div>
              </div>
              <div className="w-[195.8px] h-[139.59px] rounded-[14px] border-[0.8px] border-black/10 pt-[24px] pl-[24px] bg-[#FFFFFF]">
                <div className="flex flex-col h-full">
                  <div className="w-[146.2px] h-[20px]">
                    <p className="w-[56px] h-[20px] font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A]">Rejected</p>
                  </div>
                  <div className="mt-[38px]">
                    <p className="w-[146px] h-[32px] font-[Arial] font-[700] text-[24px] leading-[32px] tracking-[0px] text-[#E7000B]">0</p>
                  </div>
                </div>
              </div>
              <div className="w-[195.8px] h-[139.59px] rounded-[14px] border-[0.8px] border-black/10 pt-[24px] pl-[24px] bg-[#FFFFFF]">
                <div className="flex flex-col h-full">
                  <div className="w-[146.2px] h-[20px]">
                    <p className="w-[97px] h-[20px] font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A]">Total Submitted</p>
                  </div>
                  <div className="mt-[38px]">
                    <p className="w-[146px] h-[32px] font-[Arial] font-[700] text-[24px] leading-[32px] tracking-[0px] text-[#0A0A0A]">3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full h-[85.6px] rounded-[14px] border-[0.8px] border-black/10 bg-[#FFFFFF] pt-[24px] pl-[24px]">
            <div className="flex flex-row items-center justify-between w-[781.6px] h-[36px]">
              <div className="flex flex-row items-center w-[573.6px] h-[36px] rounded-[8px] bg-[#F3F3F5] mr-[10px]">
                <img src={SearchIcon} alt="Search" className="w-[16px] h-[16px] ml-[12px]" />
                <div className="flex flex-row items-center w-[517.6px] h-[28px] pt-[4px] pr-[12px] pb-[4px] pl-[20px]">
                  <input
                    type="text"
                    placeholder="Search by name or submitter..."
                    className="w-full h-[20px] bg-transparent outline-none font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#717182] placeholder:text-[#717182]"
                  />
                </div>
              </div>
              <button className="flex items-center justify-between w-[192px] h-[36px] rounded-[8px] bg-[#F3F3F5] px-[12px]">
                <div className="flex items-center gap-[8px]">
                  <img src={FilterIcon} alt="Filter" className="w-[16px] h-[16px]" />
                  <p className="font-[Arial] font-[400] text-[14px] leading-[20px] text-[#0A0A0A]">
                    All Types
                  </p>
                </div>

                <img src={DownIcon} alt="Arrow" className="w-[16px] h-[16px]" />
              </button>
            </div>
          </div>

          <div className="flex flex-col w-[831.2px] h-[330.8px] rounded-[14px] border-[0.8px] border-black/10 bg-[#FFFFFF] pt-[24px] px-[24px] gap-[24px] overflow-hidden">
            <div className="flex flex-col w-[829.6px] h-[70px] gap-[4px]">
              <h2 className="font-[Arial] font-[400] text-[20px] leading-[28px] text-[#0A0A0A]">Approval Queue</h2>
              <p className="font-[Arial] font-[400] text-[14px] leading-[20px] text-[#717182]">
                Review and approve pending submissions
              </p>
            </div>

            <div className="flex flex-col w-[781.6px] h-[201.2px] overflow-hidden ">
              <div className="w-[972.19px] h-[186px]">
                <div className="flex flex-col w-[972.19px] h-[40px]">
                  <div className="flex items-center w-[972.19px] h-[40px] border-b-[0.8px] border-black/10">
                    <div className="flex items-center w-[76.55px] h-[40px]">
                      <p className="ml-[8px] font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A]">Type</p>
                    </div>
                    <div className="flex items-center w-[184.66px] h-[40px]">
                      <p className="ml-[8px] font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A]">Name</p>
                    </div>
                    <div className="flex items-center w-[111.36px] h-[40px]">
                      <p className="ml-[8px] font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A]">Submitted by</p>
                    </div>
                    <div className="flex items-center w-[87.58px] h-[40px]">
                      <p className="ml-[8px] font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A]">Date</p>
                    </div>
                    <div className="flex items-center w-[214.75px] h-[40px]">
                      <p className="ml-[8px] font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A]">Details</p>
                    </div>
                    <div className="flex items-center w-[85.44px] h-[40px]">
                      <p className="ml-[8px] font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A]">Status</p>
                    </div>
                    <div className="flex items-center w-[211.85px] h-[40px]">
                      <p className="ml-[8px] font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A]">Action</p>
                    </div>
                  </div>
                </div>


                <div className="flex flex-col w-[972.19px] h-[146px]">
                  <div className="flex items-center w-[972.19px] h-[48.8px] border-b-[0.8px] border-black/10">
                    <div className="flex items-center w-[76.55px] h-[48.8px]">
                      <div className="flex items-center justify-center w-[55.81px] h-[21.59px] rounded-[8px] border-[0.8px] border-black/0 bg-[#030213] ml-[8px]">
                        <p className="font-[Arial] font-[400] text-[12px] leading-[16px] tracking-[0px] text-[#FFFFFF]">vendor</p>
                      </div>
                    </div>
                    <div className="flex items-center w-[184.66px] h-[48.8px]">
                      <div className="flex items-center w-[151px] h-[20px] ml-[8px]">
                        <p className="font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A]">
                          New Tech Suppliers Inc.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center w-[111.36px] h-[48.8px]">
                      <div className="flex items-center w-[60px] h-[20px] ml-[8px]">
                        <p className="font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A]">John Doe</p>
                      </div>
                    </div>
                    <div className="flex items-center w-[87.58px] h-[48.8px]">
                      <div className="flex items-center w-[72px] h-[20px] ml-[8px]">
                        <p className="font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A]">2025-10-10</p>
                      </div>
                    </div>
                    <div className="flex items-center w-[214.75px] h-[48.8px]">
                      <div className="flex items-center w-[201px] h-[20px] ml-[8px]">
                        <p className="font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A]">
                          Electronics wholesale distributor
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center w-[85.44px] h-[48.8px]">
                      <div className="flex items-center justify-center w-[62.81px] h-[21.59px] rounded-[8px] border-[0.8px] border-black/0 bg-[#FFEDD4] ml-[8px]">
                        <p className="font-[Arial] font-[400] text-[12px] leading-[16px] tracking-[0px] text-[#CA3500]">Pending</p>
                      </div>
                    </div>
                    <div className="flex items-center w-[211.85px] h-[48.8px]">
                      <div className="flex flex-row items-center w-[195.85px] h-[32px] gap-[8px] ml-[8px]">
                        <button className="flex items-center justify-center gap-[8px] w-[101.72px] h-[32px] rounded-[8px] border-[0.8px] border-black/10 bg-white">
                          <img src={AdminIcon2} className="w-[16px] h-[16px]" />
                          <span className="font-[Arial] font-[400] text-[14px] leading-[20px] text-[#0A0A0A]">Approve</span>
                        </button>
                        <button className="flex items-center justify-center gap-[8px] w-[101.72px] h-[32px] rounded-[8px] border-[0.8px] border-black/10 bg-white">
                          <img src={AdminIcon2} className="w-[16px] h-[16px]" />
                          <span className="font-[Arial] font-[400] text-[14px] leading-[20px] text-[#0A0A0A]"> Approve </span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center w-[972.19px] h-[48.8px] border-b-[0.8px] border-black/10">
                    <div className="flex items-center w-[76.55px] h-[48.8px]">
                      <div className="flex items-center justify-center w-[60.55px] h-[21.59px] rounded-[8px] border-[0.8px] border-black/0 bg-[#ECEEFC] ml-[8px]">
                        <p className="font-[Arial] font-[400] text-[12px] leading-[16px] tracking-[0px] text-[#030213]">Products</p>
                      </div>
                    </div>
                    <div className="flex items-center w-[184.66px] h-[48.8px]">
                      <div className="flex items-center w-[170px] h-[20px] ml-[8px]">
                        <p className="font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A]">
                          New Tech Suppliers Inc.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center w-[111.36px] h-[48.8px]">
                      <div className="flex items-center w-[102px] h-[20px] ml-[8px]">
                        <p className="font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A]">ABC Electronics</p>
                      </div>
                    </div>
                    <div className="flex items-center w-[87.58px] h-[48.8px]">
                      <div className="flex items-center w-[72px] h-[20px] ml-[8px]">
                        <p className="font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A] whitespace-nowrap">2025-10-09</p>
                      </div>
                    </div>
                    <div className="flex items-center w-[214.75px] h-[48.8px]">
                      <div className="flex items-center w-[119px] h-[20px] ml-[8px]">
                        <p className="font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A]">
                          New Product listing
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center w-[85.44px] h-[48.8px]">
                      <div className="flex items-center justify-center w-[62.81px] h-[21.59px] rounded-[8px] border-[0.8px] border-black/0 bg-[#FFEDD4] ml-[8px]">
                        <p className="font-[Arial] font-[400] text-[12px] leading-[16px] tracking-[0px] text-[#CA3500]">Pending</p>
                      </div>
                    </div>
                    <div className="flex items-center w-[211.85px] h-[48.8px]">
                      <div className="flex flex-row items-center w-[195.85px] h-[32px] gap-[8px] ml-[8px]">
                        <button className="flex items-center justify-center gap-[8px] w-[101.72px] h-[32px] rounded-[8px] border-[0.8px] border-black/10 bg-white">
                          <img src={AdminIcon2} className="w-[16px] h-[16px]" />
                          <span className="font-[Arial] font-[400] text-[14px] leading-[20px] text-[#0A0A0A]">Approve</span>
                        </button>
                        <button className="flex items-center justify-center gap-[8px] w-[101.72px] h-[32px] rounded-[8px] border-[0.8px] border-black/10 bg-white">
                          <img src={AdminIcon2} className="w-[16px] h-[16px]" />
                          <span className="font-[Arial] font-[400] text-[14px] leading-[20px] text-[#0A0A0A]">Approve</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center w-[972.19px] h-[48.8px] mb-[20px]">
                    <div className="flex items-center w-[76.55px] h-[48.8px]">
                      <div className="flex items-center justify-center w-[55.81px] h-[21.59px] rounded-[8px] border-[0.8px] border-black/0 bg-[#030213] ml-[8px]">
                        <p className="font-[Arial] font-[400] text-[12px] leading-[16px] tracking-[0px] text-[#FFFFFF]">vendor</p>
                      </div>
                    </div>
                    <div className="flex items-center w-[184.66px] h-[48.8px]">
                      <div className="flex items-center w-[135px] h-[20px] ml-[8px]">
                        <p className="font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A]">
                          New Tech Suppliers Inc.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center w-[111.36px] h-[48.8px]">
                      <div className="flex items-center w-[71px] h-[20px] ml-[8px]">
                        <p className="font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A]"> Jane Smith </p>
                      </div>
                    </div>
                    <div className="flex items-center w-[87.58px] h-[48.8px]">
                      <div className="flex items-center w-[72px] h-[20px] ml-[8px]">
                        <p className="font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A] whitespace-nowrap">2025-10-08</p>
                      </div>
                    </div>
                    <div className="flex items-center w-[214.75px] h-[48.8px]">
                      <div className="flex items-center w-[157px] h-[20px] ml-[8px]">
                        <p className="font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A] whitespace-nowrap">
                          Clothing and accessories
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center w-[85.44px] h-[48.8px]">
                      <div className="flex items-center justify-center w-[69.44px] h-[21.59px] rounded-[8px] border-[0.8px] border-black/0 bg-[#DCFCE7] ml-[8px]">
                        <p className="font-[Arial] font-[400] text-[12px] leading-[16px] tracking-[0px] text-[#008236]">Approved</p>
                      </div>
                    </div>
                    <div className="flex items-center w-[211.85px] h-[48.8px]">
                      <div className="flex flex-row items-center w-[195.85px] h-[32px] gap-[8px] ml-[8px]">
                        <button className="flex items-center justify-center gap-[8px] w-[101.72px] h-[32px] rounded-[8px] border-[0.8px] border-black/10 bg-white">
                          <img src={AdminIcon2} className="w-[16px] h-[16px]" />
                          <span className="font-[Arial] font-[400] text-[14px] leading-[20px] text-[#0A0A0A]">Approve</span>
                        </button>
                        <button className="flex items-center justify-center gap-[8px] w-[101.72px] h-[32px] rounded-[8px] border-[0.8px] border-black/10 bg-white" >
                          <img src={AdminIcon2} className="w-[16px] h-[16px]" />
                          <span className="font-[Arial] font-[400] text-[14px] leading-[20px] text-[#0A0A0A]">Approve</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminApprovals;