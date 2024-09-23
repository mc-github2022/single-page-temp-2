import React from "react";

const Banner = () => {
  return (
    <>
      <section
        id="banner"
        className="banner bg-[#00185a] bg-[url('../../public/img/BannerImgUpdate.jpg')] bg-cover bg-center"
      >
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
    </>
  );
};

export default Banner;
