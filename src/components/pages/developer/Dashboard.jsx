import Navigation from "@/components/partials/Navigation";
import React from "react";
import Header from "../website/Header";
import Banner from "../website/Banner";
import Cottage from "../website/Cottage";
import Rooms from "../website/Rooms";
import Gallery from "../website/Gallery";
import Footer from "../website/Footer";
import { FaDesktop } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FiSmartphone } from "react-icons/fi";
import { LuPaintbrush2 } from "react-icons/lu";
import HeaderDashboard from "./header-dashboard/HeaderDashboard";
import BannerDashboard from "./banner-dashboard/BannerDashboard";
import CottageDashboard from "./cottage-dashboard/CottageDashboard";
import RoomDashboard from "./room-dashboard/RoomDashboard";
import GalleryDashboard from "./gallery-dashboard/GalleryDashboard";
import FooterDashboard from "./footer-dashboard/FooterDashboard";

const navLinks = document.querySelectorAll("a.navLink");
const sections = document.querySelectorAll("section");

const Dashboard = () => {
  let currentSection = "home";
  window.addEventListener("scroll", () => {
    sections.forEach((section) => {
      // if (window.scrollY >= section.offsetTop - section.clientHeight / 6) {
      if (window.scrollY >= section.offsetTop - 500) {
        currentSection = section.id;
      }
    });

    navLinks.forEach((navLink) => {
      if (navLink.href.includes(currentSection)) {
        document.querySelector(".active").classList.remove("active");
        navLink.classList.add("active");
      }
    });
  });

  return (
    <>
      <div className="wrapper bg-[#f5f5f3]">
        <Navigation />
        <div className="main ml-[220px] w-[calc(100%_-_230px)] z-10">
          <div className="profileHeader p-4 addShadow border-none bg-[#ececec] h-[58px] rounded-tl-lg rounded-tr-lg  fixed top-[20px] w-[calc(100%_-_240px)] grid items-center z-[9]">
            <div className="flex justify-between  items-center ">
              <p className="font-semibold text-[14px]">Single Page Website</p>
              <div className="flex items-center gap-4">
                <Link className="tooltip-desktop" data-tooltip="Desktop">
                  <FaDesktop className="size-4 " />
                </Link>
                <Link className="tooltip-phone" data-tooltip="Phone">
                  <FiSmartphone className="size-4 text-dashAccent hover:text-dark" />
                </Link>
                <Link className="tooltip-colors" data-tooltip="Colors">
                  <LuPaintbrush2 className="size-4 text-dashAccent hover:text-dark" />
                </Link>
                <Link className="tooltip-website" data-tooltip="Go to Webpage">
                  <BsBoxArrowUpRight className="size-4 text-dashAccent hover:text-dark" />
                </Link>
              </div>
            </div>
          </div>
          <div className=" w-[calc(100%_-_10px)] pt-[70px] relative">
            <div className="headerCover fixed top-0 left-[200px] w-full h-[76px]  bg-[#f5f5f3] z-[1]"></div>
            <div className="addShadow">
              <HeaderDashboard />
              <CottageDashboard />
              <RoomDashboard />
              <GalleryDashboard />
              <FooterDashboard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
