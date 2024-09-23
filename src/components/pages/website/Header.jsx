import React from "react";
import logo from "/img/Logo.png";

const Header = () => {
  const [toggleNav, setToggleNav] = React.useState(true);
  const handdleToggle = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <>
      <section id="header" className="header text-[15x] py-2 bg-light">
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
      </section>
    </>
  );
};

export default Header;
