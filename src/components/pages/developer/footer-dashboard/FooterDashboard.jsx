import React from "react";
import {
  FaFacebook,
  FaFacebookF,
  FaTiktok,
  FaWhatsapp,
  FaWhatsappSquare,
  FaYoutube,
} from "react-icons/fa";
import logo from "/img/Logo.png";
import { AiFillTikTok } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

const FooterDashboard = () => {
  return (
    <>
      <section id="contact" className="footer join bg-customGray py-20">
        <div className="customContainer">
          <div className="wrapper grid place-items-center xl:grid-cols-[_2fr_1fr] gap-10 items-center">
            <div>
              <p className="text-[clamp(20px,3vw,36px)] text-center xl:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
            </div>
            <div className="flex flex-col gap-5 md:flex-row xl:grid xl:grid-cols-2 md:gap-10 items-center">
              <a
                href="#"
                className="btn h-12 text-light bg-secondary border-secondary border"
              >
                Book Now
              </a>
              <a
                href="#"
                className="btn h-12 text-secondary  bg-light outline-1 border-secondary border"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer py-20 bg-light">
        <div className="customContainer">
          <div className="wrapper md:flex justify-between items-center border-b-2 pb-10 border-b-[#808080] border-opacity-80">
            <img
              src={logo}
              alt=""
              className="object-contain order-1 md:order-2 mx-auto"
            />
            <div className="grid place-items-center text-center md:text-left order-2 md:order-1">
              <ul className="font-semibold lg:flex items-center gap-10 [&>li]:w-[90px]  my-5">
                <li>Mobile App</li>
                <li>Community</li>
                <li>Company</li>
              </ul>
            </div>
            <div className="grid place-items-center text-center md:order-3">
              <ul className="font-semibold lg:flex items-center gap-10 [&>li]:w-[90px] md:[&>li]:text-right">
                <li>Help desk</li>
                <li>Blog</li>
                <li>Resource</li>
              </ul>
            </div>
          </div>
          <div className="footerSocLinks pt-10 grid place-items-center">
            <div>
              <ul className="flex items-center gap-3 justify-center mb-8">
                <li>
                  <span className="bg-primary h-10 w-10 grid place-items-center rounded-full">
                    <FaFacebookF className="text-xl text-light" />
                  </span>
                </li>
                <li>
                  <span className="bg-primary h-10 w-10 grid place-items-center rounded-full">
                    <FaTiktok className="text-xl text-light" />
                  </span>
                </li>
                <li>
                  <span className="bg-primary h-10 w-10 grid place-items-center rounded-full">
                    <FaYoutube className="text-xl text-light" />
                  </span>
                </li>
                <li>
                  <span className="bg-primary h-10 w-10 grid place-items-center rounded-full">
                    <IoLogoWhatsapp className="text-xl text-light" />
                  </span>
                </li>
              </ul>
              <p className="opacity-80">
                <small>© SPLASH. 2024. We love our users!</small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterDashboard;
