import { NavLink } from "react-router-dom";
import FedExIcon from "../assets/FedExIcon.png";
import USPSIcon from "../assets/USPSIcon.png";
import DHLIcon from "../assets/DHLIcon.png";
import UPSIcon from "../assets/UPSIcon.png";
import ArrowIcon from "../assets/arrowicon.png";


function ShippingProviders() {
  return (
    <div className="flex-1 bg-[#FFFFFF] min-h-screen pt-[32px] px-[32px] pb-[32px] flex flex-col gap-[24px]">
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

      <div className="w-[831.2px] h-[742.4px] pb-[24px] flex flex-col gap-[32px]">
        <div className="w-[672px] h-[36px] rounded-[14px] bg-[#ECECF0] flex items-center p-[4px]">
          <NavLink
            to="/shipping"
            className="w-[222px] h-[29px] flex items-center justify-center">
            <p className="font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A]">Shipments</p>
          </NavLink>
          <div className="w-[222px] h-[29px] rounded-[14px] bg-[#FFFFFF] flex items-center justify-center">
            <p className="font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A]">Providers</p>
          </div>
          <div className="w-[222px] h-[29px] flex items-center justify-center">
            <p className="font-[Arial] font-[400] text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A]">Cost Calculator</p>
          </div>
        </div>

        <div className="w-[831.2px] h-[650.4px] flex flex-col gap-[24px]">
          <div className="w-[831.2px] h-[322.8px] rounded-[14px] border-[0.8px] border-black/10 bg-[#FFFFFF]">
            <div className="w-[829.6px] h-[70px] pt-[24px] px-[24px] flex flex-col gap-[8px]">
              <div className="w-[781.6px] h-[16px]">
                <p className="font-[Arial] font-normal text-[16px] leading-[16px] tracking-[0px] text-[#0A0A0A]">Shipping Providers</p>
              </div>
              <div className="w-[781.6px] h-[46px]">
                <p className="font-[Arial] font-normal text-[14px] leading-[20px] tracking-[0px] text-[#717182]">
                  Configure your preferred shipping carriers and regional rules
                </p>
              </div>
            </div>

            <div className="w-[781.6px] h-[203.2px] ml-[24px] mt-[10px] flex flex-col gap-[16px]">
              <div className="flex gap-[16px]">
                <div className="w-[382.8px] h-[76px] mt-[20px] rounded-[14px] border-[0.8px] border-[#030213] bg-[#FFFFFF] px-[28px] flex items-center justify-between">
                  <div className="flex items-center gap-[16px]">
                    <img src={FedExIcon} className="w-[34px] h-[34px]" />
                    <div className="flex flex-col justify-center">
                      <p className="font-[Arial] font-normal text-[16px] leading-[24px] text-[#0A0A0A]">FedEx</p>
                      <p className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#717182]">Active</p>
                    </div>
                  </div>
                  <button className="w-[71px] h-[36px] rounded-[8px] bg-[#030213] flex items-center justify-center">
                    <span className="font-[Arial] text-[12px] leading-[16px] text-[#FFFFFF]">Active</span>
                  </button>
                </div>

                <div className="w-[382.8px] h-[76px] mt-[20px] rounded-[14px] border-[0.8px] border-[#030213] bg-[#FFFFFF] px-[28px] flex items-center justify-between">
                  <div className="flex items-center gap-[16px]">
                    <img src={UPSIcon} className="w-[34px] h-[34px]" />
                    <div className="flex flex-col justify-center">
                      <p className="font-[Arial] font-normal text-[16px] leading-[24px] text-[#0A0A0A]">FedEx</p>
                      <p className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#717182]">Active</p>
                    </div>
                  </div>
                  <button className="w-[71px] h-[36px] rounded-[8px] bg-[#030213] flex items-center justify-center">
                    <span className="font-[Arial] text-[12px] leading-[16px] text-[#FFFFFF]">Active</span>
                  </button>
                </div>
              </div>

              <div className="flex gap-[16px]">
                <div className="w-[382.8px] h-[76px] mt-[20px] rounded-[14px] border-[0.8px] bg-[#FFFFFF] px-[28px] flex items-center justify-between border-black/10">
                  <div className="flex items-center gap-[16px]">
                    <img src={DHLIcon} className="w-[34px] h-[34px]" />
                    <div className="flex flex-col justify-center">
                      <p className="font-[Arial] font-normal text-[16px] leading-[24px] text-[#0A0A0A]">DHL</p>
                      <p className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#717182]">Inactive</p>
                    </div>
                  </div>
                  <button className="w-[71px] h-[36px] rounded-[8px] bg-[#FFFFFF] flex items-center justify-center border border-black/10">
                    <span className="font-[Arial] text-[12px] leading-[16px] text-[#0A0A0A]">Activate</span>
                  </button>
                </div>

                <div className="w-[382.8px] h-[76px] mt-[20px] rounded-[14px] border-[0.8px] border-[#030213] bg-[#FFFFFF] px-[28px] flex items-center justify-between">
                  <div className="flex items-center gap-[16px]">
                    <img src={USPSIcon} className="w-[34px] h-[34px]" />
                    <div className="flex flex-col justify-center">
                      <p className="font-[Arial] font-normal text-[16px] leading-[24px] text-[#0A0A0A]">USPS</p>
                      <p className="font-[Arial] font-normal text-[14px] leading-[20px] text-[#717182]">Active</p>
                    </div>
                  </div>
                  <button className="w-[71px] h-[36px] rounded-[8px] bg-[#030213] flex items-center justify-center">
                    <span className="font-[Arial] text-[12px] leading-[16px] text-[#FFFFFF]">Active</span>
                  </button>
                </div>
              </div>
            </div>
          </div>


          <div className="w-[831.2px] h-[303.6px] rounded-[14px] border-[0.8px] border-black/10 bg-[#FFFFFF]">
            <div className="w-[829.6px] h-[70px] pt-[24px] px-[24px] flex flex-col gap-[8px]">
              <div className="w-[781.6px] h-[16px]">
                <p className="font-[Arial] font-normal text-[16px] leading-[16px] tracking-[0px] text-[#0A0A0A]">
                  Regional Shipping Rules
                </p>
              </div>
              <div className="w-[323px] h-[24px]">
                <p className="font-[Arial] font-normal text-[16px] leading-[24px] tracking-[0px] text-[#717182]">
                  Set up region-specific shipping configurations
                </p>
              </div>
            </div>

            <div className="w-[829.6px] h-[208px] px-[24px] pb-[24px] flex flex-col gap-[24px] mt-[30px]">
              <div className="w-[781.6px] h-[132px] flex flex-col gap-[16px]">
                <div className="flex flex-row gap-[16px]">
                  <div className="w-[382.8px] h-[58px] flex flex-col gap-[8px]">
                    <p className="font-[Arial] font-normal text-[14px] leading-[14px] tracking-[0px] text-[#0A0A0A]">Region</p>
                    <button className="w-[382.8px] h-[36px] rounded-[8px] border-[0.8px] border-black/0 bg-[#F3F3F5] px-[12px] flex items-center justify-between">
                      <span className="font-[Arial] font-normal text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A]">North America</span>
                      <img src={ArrowIcon} className="w-[16px] h-[16px]" />
                    </button>
                  </div>

                  <div className="w-[382.8px] h-[58px] flex flex-col gap-[8px]">
                    <p className="font-[Arial] font-normal text-[14px] leading-[14px] tracking-[0px] text-[#0A0A0A]">Default Carrier</p>
                    <button className="w-[382.8px] h-[36px] rounded-[8px] border-[0.8px] border-black/0 bg-[#F3F3F5] px-[12px] flex items-center justify-between">
                      <span className="font-[Arial] font-normal text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A]">FedEx</span>
                      <img src={ArrowIcon} className="w-[16px] h-[16px]" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-row gap-[16px]">
                  <div className="w-[382.8px] h-[58px] flex flex-col gap-[8px]">
                    <p className="font-[Arial] font-normal text-[14px] leading-[14px] tracking-[0px] text-[#0A0A0A]">Free Shipping Treshold</p>
                    <button className="w-[382.8px] h-[36px] rounded-[8px] border-[0.8px] border-black/0 bg-[#F3F3F5] px-[12px] flex items-center justify-between">
                      <span className="font-[Arial] font-normal text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A]">500.00</span>
                    </button>

                  </div>
                  <div className="w-[382.8px] h-[58px] flex flex-col gap-[8px]">
                    <p className="font-[Arial] font-normal text-[14px] leading-[14px] tracking-[0px] text-[#0A0A0A]">Handling Fee</p>
                    <button className="w-[382.8px] h-[36px] rounded-[8px] border-[0.8px] border-black/0 bg-[#F3F3F5] px-[12px] flex items-center justify-between">
                      <span className="font-[Arial] font-normal text-[14px] leading-[20px] tracking-[0px] text-[#0A0A0A]">5.00</span>
                    </button>
                  </div>
                </div>
              </div>

              <button className="w-[158.45px] h-[36px] rounded-[8px] bg-[#030213] flex items-center justify-center">
                <span className="font-[Arial] font-normal text-[14px] leading-[20px] tracking-[0px] text-[#FFFFFF]">
                  Save Regional Rules
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingProviders;