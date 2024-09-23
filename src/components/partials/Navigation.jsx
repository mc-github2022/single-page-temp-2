import React from "react";
import { Link } from "react-router-dom";
import { devNavUrl } from "../helpers/functions-general";
import { CgMenuGridO, CgUser } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { VscGear } from "react-icons/vsc";

const Navigation = ({ menu }) => {
  const ref = React.useRef();
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="theNav bg-[#f5f5f3] w-[211px] h-screen fixed top-0 p-4 z-50  border-customGray">
        <div className="theLogo mb-[114px] ">
          <h2 className="text-xl mt-5 font-bold">Splash Website</h2>
        </div>
        <div className="flex flex-col justify-between h-[calc(100%_-_160px)]">
          <nav>
            <ul className="flex-col [&>li]:text-left [&>li]:text-[16px] font-semibold [&>li]:mb-[17px]">
              <li>
                <a href="#banner" className="navLink active">
                  Header
                </a>
              </li>
              <li>
                <a href="#pricing" className="navLink">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#rooms" className="navLink">
                  Rooms
                </a>
              </li>
              <li>
                <a href="#gallery" className="navLink">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="navLink">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <div
              className={`py-[51px] relative ${isOpen && "border-dark"}`}
              onClick={handleOpen}
              ref={ref}
            >
              <span className="w-[40px] h-[40px] cursor-pointer">
                <img src="/img/user.webp" alt="" />
              </span>
              {isOpen && (
                <div className="absolute top-14 ml-[45px] bg-[#1E1E1E] shadow-md flex flex-col  p-3 min-w-[180px] rounded-md">
                  <h6 className="text-light  text-[16px]">Juan Dela Cruz</h6>
                  <p className="text-sm">
                    <span className="text-secondary">jdcruz@gmail.com</span>
                  </p>
                  <p className="mb-3 text-sm">
                    <span className="text-[#a7a7a7]">Admin</span>
                  </p>
                  <Link to="/changePass">
                    <span className="text-light hover:border-b">
                      Change Password
                    </span>
                  </Link>
                  <div className="flex flex-row gap-4 items-center">
                    <Link>
                      <button className="text-light hover:border-b">
                        Users
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className="border-t-[2px] border-[#e5e5e4] flex flex-col gap-2">
              <h5 className="mt-[10px]">Powered by:</h5>
              <div className="w-[120px] h-[44px]">
                <img src="/img/logo-fbs.png" alt="" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
