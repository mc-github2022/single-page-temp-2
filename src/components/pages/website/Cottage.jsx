import React from "react";

const Cottage = () => {
  return (
    <>
      <section id="cottage" className="cottage py-20 bg-light">
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
    </>
  );
};

export default Cottage;
