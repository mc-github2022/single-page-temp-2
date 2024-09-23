import React from "react";
import Tooltip from "@/components/partials/Tooltip";
import PopupButton from "@/components/partials/popup/PopupButton";
import useQueryData from "@/components/custom-hooks/useQueryData";
import { StoreContext } from "@/components/store/StoreContext";
import ModalEditHeaderLogo from "./ModalEditHeaderLogo";
import { devBaseImgUrl } from "@/components/helpers/functions-general";
import { IoImageOutline } from "react-icons/io5";
import ModalEditBannerContent from "./ModalEditBannerContent";
import Toast from "@/components/partials/Toast";
import ModalEditBannerImage from "./ModalEditBannerImage";

const HeaderDashboard = () => {
  const [toggleNav, setToggleNav] = React.useState(true);
  const handdleToggle = () => {
    setToggleNav(!toggleNav);
  };
  const [updateHeader, setUpdateHeader] = React.useState("");

  const [loading, setLoading] = React.useState(true);
  const { store, dispatch } = React.useContext(StoreContext);

  const [webLogo, setWebLogo] = React.useState(false);
  const handleWebLogo = () => {
    setWebLogo(true);
    setUpdateHeader("logoContent");
  };

  const [content, setContent] = React.useState(false);
  const handleTextContent = () => {
    setContent(true);
    setUpdateHeader("textContent");
  };

  const [bannerImg, setBannerImg] = React.useState(false);
  const handleBannerImg = () => {
    setBannerImg(true);
    setUpdateHeader("imageContent");
  };

  const {
    isLoading,
    error,
    data: headerContent,
  } = useQueryData(
    "/v2/header-content", // endpoint
    "get", // method
    "headerContent" // key
  );

  return (
    <>
      <section id="banner" className="header text-[15x] py-2 bg-light">
        <div className="customContainer">
          <div className="wrapper grid grid-cols-[_1fr_2fr] justify-between items-center">
            <div className="theLogo w-[131px] relative">
              {headerContent?.data[0].header_logo === "" ? (
                <div>
                  <div className="w-[150px] h-[50px]  grid place-items-center bg-[#e2e2e2] rounded-md">
                    <IoImageOutline className="text-[40px] text-light" />
                  </div>
                  <div className="absolute right-[-10px] top-[-10px] group">
                    <PopupButton fn={handleWebLogo} />
                    <Tooltip text="Edit" />
                  </div>
                </div>
              ) : (
                <div>
                  <img
                    src={`${devBaseImgUrl}/${headerContent?.data[0].header_logo}`}
                    alt=""
                  />
                  <div className="absolute right-[-10px] top-[-10px] group">
                    <PopupButton fn={handleWebLogo} />
                    <Tooltip text="Edit" />
                  </div>
                </div>
              )}
            </div>
            <div
              className={`${
                toggleNav ? "active" : ""
              } theNav flex justify-end md:justify-between items-center`}
            >
              <ul className="flex [&>li]:py-5 [&>li]:px-5 font-bold  md:ml-auto lg:m-0">
                <li>Rooms</li>
                <li>Pricing</li>
                <li>Gallery</li>
                <li>Rooms</li>
              </ul>

              <a
                href="#"
                className="btn bg-primary text-light my-5 hidden lg:block"
              >
                Book Now
              </a>
            </div>
            <button
              onClick={handdleToggle}
              className={`${
                toggleNav ? "active" : ""
              } toggleNav block md:hidden relative w-[20px] h-[20px] ml-auto`}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </section>

      <section
        id="banner"
        style={{
          background: `url('${devBaseImgUrl}/${headerContent?.data[0].header_banner_img}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        className={`banner bg-[#00185a] bg-cover bg-center relative`}
      >
        <div className="customContainer">
          <div className="wrapper flex place-items-center h-[60vh] md:h-[90vh] transition-all w-full">
            <div className="relative">
              <h1 className="text-light leading-[1.2] md:leading-normal text-[clamp(30px,7vw,56px)] w-full  md:w-[757px]  md:text-[56px]">
                {headerContent?.data[0].header_banner_title}
              </h1>
              <p className="mb-10 md:mb-20 text-light">
                {headerContent?.data[0].header_banner_text}
              </p>
              <a
                href={headerContent?.data[0].header_banner_btn_link}
                className="btn bg-primary text-light"
              >
                {headerContent?.data[0].header_banner_btn_text}
              </a>
              <div className="absolute right-[-10px] top-[-10px] group">
                <PopupButton fn={handleTextContent} />
                <Tooltip text="Edit" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-[20px] top-[20px] group">
          <PopupButton fn={handleBannerImg} />
          <Tooltip text="Edit" />
        </div>
      </section>

      {webLogo && (
        <ModalEditHeaderLogo
          updateHeader={updateHeader}
          close={setWebLogo}
          theContent={headerContent}
        />
      )}
      {bannerImg && (
        <ModalEditBannerImage
          updateHeader={updateHeader}
          close={setBannerImg}
          theContent={headerContent}
        />
      )}
      {content && (
        <ModalEditBannerContent
          updateHeader={updateHeader}
          close={setContent}
          theContent={headerContent}
        />
      )}
      {store.success && <Toast />}
    </>
  );
};

export default HeaderDashboard;
