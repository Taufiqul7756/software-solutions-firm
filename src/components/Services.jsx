import React from "react";
import erp from "../assets/services-logo/erp1.png";
import web from "../assets/services-logo/web-design.png";
import pos from "../assets/services-logo/pos.png";
import ai from "../assets/services-logo/ai.png";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "WebDevelopment Solutions",
      description: "Our Web Services is well reputed.",
      image: web,
    },
    {
      id: 2,
      title: "ERP/CRM Solutions",
      description: "Our Web Services is well reputed.",
      image: erp,
    },
    {
      id: 3,
      title: "WeStrike POS",
      description: "Our Web Services is well reputed.",
      image: pos,
    },
    {
      id: 4,
      title: "AI/ML Solutions",
      description: "Our Web Services is well reputed.",
      image: ai,
    },
  ];
  return (
    <div className="m-5">
      <div className="text-center my-8 ">
        <h2 className="text-4xl text-NeutralD_Grey font-semibold mb-2">
          {" "}
          What's so Special About{" "}
          <span className="text-BrandPrimary">weStrike</span> ?
        </h2>
        <p className="text-xl text-NeutralGrey">
          We help small businesses around the world with amazing products that
          solve their business and web problems.{" "}
          <span className="text-BrandPrimary">weStrike</span> is special because
          -
        </p>
      </div>

      {/* Services Card */}
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-10">
        {services.map((services) => (
          <div
            key={services.id}
            className=" px-4 py-8 text-center md:w-[300px] 
            mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:before-b-4
            hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full "
          >
            <div>
              <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl ">
                <img src={services.image} alt="" />
              </div>
              <h4 className="text-2xl font-bold text-NeutralD_Grey mb-2 px-2">
                {services.title}
              </h4>
              <p className="text-sm text-NeutralGrey">{services.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
