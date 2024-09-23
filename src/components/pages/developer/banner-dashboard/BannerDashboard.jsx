import PopupButton from "@/components/partials/popup/PopupButton";
import Tooltip from "@/components/partials/Tooltip";
import React from "react";

const BannerDashboard = () => {
  return (
    <>
      <section
        id="header"
        className="header bg-[#00185a] bg-[url('../../public/img/BannerImgUpdate.jpg')] bg-cover bg-center relative"
      >
        <div className="customContainer">
          <div className="wrapper flex place-items-center h-[60vh] md:h-[90vh] transition-all w-full">
            <div className="relative">
              <h1 className="text-light leading-[1.2] md:leading-normal text-[clamp(30px,7vw,56px)] w-full mb-10 md:mb-20 md:w-[757px]  md:text-[56px]">
                Discover the ultimate escape at our breathtaking beach resort
              </h1>
              <a href="#" className="btn bg-primary text-light ">
                Book Now
              </a>
              <div className="absolute right-[-10px] top-[-10px] group">
                <PopupButton />
                <Tooltip text="Edit" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-[20px] top-[20px] group">
          <PopupButton />
          <Tooltip text="Edit" />
        </div>
      </section>
    </>
  );
};

export default BannerDashboard;
