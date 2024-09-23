import React from "react";

const Gallery = () => {
  return (
    <>
      <section
        id="gallery"
        className="gallery resortGallery pt-20 text-center bg-light"
      >
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
      </section>
    </>
  );
};

export default Gallery;
