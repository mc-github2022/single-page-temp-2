import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import logo from "/img/Logo.png";
import bannerBg from "/img/bannerImg.png";
import {
  FaFacebook,
  FaFacebookF,
  FaTiktok,
  FaWhatsapp,
  FaWhatsappSquare,
  FaYoutube,
} from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import React, { useEffect } from "react";

function App() {
  const [toggleNav, setToggleNav] = React.useState(true);
  const handdleToggle = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <>
      <header className="text-[15x] py-2">
        <div className="customContainer">
          <div className="wrapper grid grid-cols-[_1fr_2fr] justify-between items-center">
            <div className="theLogo">
              <img src={logo} alt="" />
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
      </header>

      <section className="banner bg-[#00185a] bg-[url('../../public/img/bannerImg.png')] bg-cover bg-center">
        <div className="customContainer">
          <div className="wrapper flex place-items-center h-[60vh] md:h-[90vh] transition-all w-full">
            <div>
              <h1 className="text-light leading-[1.2] md:leading-normal text-[clamp(30px,7vw,56px)] w-full mb-10 md:mb-20 md:w-[757px]  md:text-[56px]">
                Discover the ultimate escape at our breathtaking beach resort
              </h1>
              <a href="#" className="btn bg-primary text-light ">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="rooms py-20">
        <div className="customContainer">
          <h2 className="text-[clamp(30px,5vw,48px)] w-full mb-20 md:w-[757px]  md:text-[48px] font-semibold lg:w-[50%]">
            Discovering the Charm of Unique Rooms and Cottages
          </h2>
          <div className="wrapper grid grid-cols-1 md:grid-cols-2 md:gap-[40px]">
            <div className="roomItem mb-14">
              <img
                src="/img/cottageA.webp"
                alt=""
                className="mb-2 w-full h-[250px] md:h-[400px] object-cover"
              />
              <h3 className="text-[24px] font-semibold mb-6">Small Cottages</h3>
              <p className="mb-8">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est.
              </p>
              <a href="#" className="btn bg-secondary text-light">
                Learn More
              </a>
            </div>
            <div className="roomItem mb-14">
              <img
                src="/img/cottageB.jfif"
                alt=""
                className="mb-2 w-full h-[250px] md:h-[400px] object-cover"
              />
              <h3 className="text-[24px] font-semibold mb-6">Small Cottages</h3>
              <p className="mb-8">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est.
              </p>
              <a href="#" className="btn bg-secondary text-light">
                Learn More
              </a>
            </div>
            <div className="roomItem mb-14">
              <img
                src="/img/cottageC.webp"
                alt=""
                className="mb-2 w-full h-[250px] md:h-[400px] object-cover"
              />
              <h3 className="text-[24px] font-semibold mb-6">Small Cottages</h3>
              <p className="mb-8">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est.
              </p>
              <a href="#" className="btn bg-secondary text-light">
                Learn More
              </a>
            </div>
            <div className="roomItem mb-14">
              <img
                src="/img/cottageD.jpg"
                alt=""
                className="mb-2 w-full h-[250px] md:h-[400px] object-cover"
              />
              <h3 className="text-[24px] font-semibold mb-6">Small Cottages</h3>
              <p className="mb-8">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est.
              </p>
              <a href="#" className="btn bg-secondary text-light">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div className="customContainer py-10">
            <div className="roomPreviewItem grid grid-cols-1 gap-5  md:grid-cols-2 py-10 items-center md:gap-20">
              <img src="../../public/img/roomA.png" alt="" />
              <div className="roomDesc">
                <h3 className="font-semibold text-[24px] mb-6">
                  Sed ut perspiciatis unde omnis
                </h3>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-customGray">
          <div className="customContainer py-10">
            <div className="roomPreviewItem grid grid-cols-1 gap-5 md:grid-cols-2 py-10 items-center md:gap-20 ">
              <div className="roomDesc order-2 md:order-1">
                <h3 className="font-semibold text-[24px] mb-6">
                  Sed ut perspiciatis unde omnis
                </h3>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem.
                </p>
              </div>
              <img
                src="../../public/img/roomB.png"
                alt=""
                className="md:order-2"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="resortGallery pt-20 text-center">
        <div className="customContainer">
          <h2 className="text-[clamp(30px,5vw,48px)] w-full mb-10  md:text-[48px]">
            Lorem ipsum dolor sit amet.
          </h2>
          <h3 className="text-[clamp(20px,3vw,36px)] w-full mb-20  md:text-[36px] lg:w-[80%] mx-auto opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </h3>
        </div>
        <div className="wrapper grid grid-cols-2 md:grid-cols-5">
          <div className="galleryImageList">
            <img src="/img/galleryImageA.webp" className="w-full" alt="" />
          </div>
          <div className="galleryImageList">
            <img src="/img/galleryImageB.jpg" className="w-full" alt="" />
          </div>
          <div className="galleryImageList">
            <img src="/img/galleryImageC.jpg" className="w-full" alt="" />
          </div>
          <div className="galleryImageList">
            <img src="/img/galleryImageD.jpg" className="w-full" alt="" />
          </div>
          <div className="galleryImageList">
            <img src="/img/galleryImageE.jpg" className="w-full" alt="" />
          </div>
          <div className="galleryImageList">
            <img src="/img/galleryImageF.jpg" className="w-full" alt="" />
          </div>
          <div className="galleryImageList">
            <img src="/img/galleryImageG.webp" className="w-full" alt="" />
          </div>
          <div className="galleryImageList">
            <img src="/img/galleryImageH.jpg" className="w-full" alt="" />
          </div>
          <div className="galleryImageList">
            <img src="/img/galleryImageI.webp" className="w-full" alt="" />
          </div>
          <div className="galleryImageList">
            <img src="/img/galleryImageJ.jpg" className="w-full" alt="" />
          </div>
        </div>
      </div>

      <section className="join bg-customGray py-20">
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

      <footer className="py-20">
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
}

export default App;
