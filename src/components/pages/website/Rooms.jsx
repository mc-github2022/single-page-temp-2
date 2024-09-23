import React from "react";

const Rooms = () => {
  return (
    <>
      <section id="room" className="room bg-light">
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
    </>
  );
};

export default Rooms;
